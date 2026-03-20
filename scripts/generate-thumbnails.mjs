/**
 * Generate PNG thumbnail previews from certificate PDFs.
 * Uses pdf-to-img (pure JS, no native dependencies).
 *
 * Usage: node scripts/generate-thumbnails.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { pdf } from "pdf-to-img";

const CERTS_DIR = path.resolve("public/certificates");
const THUMBS_DIR = path.join(CERTS_DIR, "thumbs");

function sanitizeFilename(name) {
  // Remove the .pdf extension and replace non-alphanumeric chars with dashes
  return name
    .replace(/\.pdf$/i, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

async function main() {
  // Ensure output directory exists
  await fs.mkdir(THUMBS_DIR, { recursive: true });

  // Get all PDF files
  const files = (await fs.readdir(CERTS_DIR)).filter((f) =>
    f.toLowerCase().endsWith(".pdf")
  );

  console.log(`Found ${files.length} PDF files. Generating thumbnails...\n`);

  for (const file of files) {
    const pdfPath = path.join(CERTS_DIR, file);
    const thumbName = sanitizeFilename(file) + ".png";
    const thumbPath = path.join(THUMBS_DIR, thumbName);

    try {
      const doc = await pdf(pdfPath, { scale: 2 });
      // Get only the first page
      const firstPage = await doc.getPage(1);
      await fs.writeFile(thumbPath, firstPage);
      console.log(`  ✓ ${file}  →  thumbs/${thumbName}`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log("\nDone! Thumbnails saved to public/certificates/thumbs/");

  // Print the mapping for updating constants/index.ts
  console.log("\n--- Mapping for constants/index.ts ---");
  for (const file of files) {
    const thumbName = sanitizeFilename(file) + ".png";
    console.log(`  "${file}" → "/certificates/thumbs/${thumbName}"`);
  }
}

main();
