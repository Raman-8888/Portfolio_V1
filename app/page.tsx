import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import Certificates from "@/components/main/certificates";
import { Skills } from "@/components/main/skills";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </main>
  );
}
