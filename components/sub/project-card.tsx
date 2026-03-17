import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  buttonText?: string;
  aspectRatio?: string;
  isCenter?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  buttonText = "View Project",
  aspectRatio = "aspect-video", // Default to 16:9
  isCenter = false,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full bg-[#030014]/50"
    >
      {/* Blurred Container: Contains everything except the button */}
      <div className={`flex flex-col h-full transition-all duration-500 ${isCenter ? "group-hover:blur-md" : ""}`}>
        <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#030014] transition-all duration-500 ${isCenter ? "group-hover:scale-105" : ""}`}>
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative p-4 flex flex-col justify-between flex-grow transition-all duration-500">
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300 line-clamp-2">{description}</p>
          </div>
        </div>
      </div>

      {/* Button Overlay: Sharp and perfectly centered */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 ${isCenter ? "group-hover:opacity-100" : "pointer-events-none"}`}>
        <span className="z-50 text-white font-bold text-lg py-3 px-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 shadow-[0_0_25px_rgba(147,51,234,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-none">
          {buttonText}
        </span>
      </div>
    </Link>
  );
};
