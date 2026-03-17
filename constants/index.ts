import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/raman888/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Raman-8888",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PHP",
    image: "php.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Maven",
    image: "maven.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "github-white.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "C++",
    image: "cplusplus.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Three.js",
    image: "threejs.svg",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "StarCop — Startup Networking",
    description:
      "A full-stack platform enabling startups and investors to connect via opportunity posting, pitch videos, and real-time chat with message requests and WebRTC video calls.",
    image: "/projects/Starcop.png",
    link: "https://star-cop-v1.vercel.app/",
  },
  {
    title: "Swasth AI — Health & Wellness",
    description:
      "An AI-powered health platform featuring REST APIs built with Node.js and Firebase. Integrates a Python OCR service with Cohere AI to deliver personalized health recommendations.",
    image: "/projects/project-2.png",
    link: "https://github.com/Raman-8888/Swasth_AI",
  },
  {
    title: "Solar Command — 3D Visualizer",
    description:
      "An original Three.js application where tasks are 3D planets; size and gravity are determined by priority, featuring dynamic planet destruction animations.",
    image: "/projects/SolarCommand.png",
    link: "https://todo-nine-rose-17.vercel.app/",
  },
] as const;

export const CERTIFICATES = [
  {
    title: "Merit-HACK-IOT",
    description: "Certificate of merit from Merit-HACK-IOT event.",
    image: "/certificates/placeholder.png",
    link: "/certificates/02 Merit-HACK-IOT_split_20.pdf",
  },
  {
    title: "Cloud Computing",
    description: "Professional certification in Cloud Computing.",
    image: "/certificates/placeholder.png",
    link: "/certificates/Cloud Computing.pdf",
  },
  {
    title: "Coursera - UOXSWPSM9JTI",
    description: "Coursera certification for completed course.",
    image: "/certificates/placeholder.png",
    link: "/certificates/Coursera UOXSWPSM9JTI.pdf",
  },
  {
    title: "Udemy - Business Communication",
    description: "Udemy certification: UC-34e10601-6db9-4c9c-b323-6470c46d4358.",
    image: "/certificates/placeholder.png",
    link: "/certificates/UC-34e10601-6db9-4c9c-b323-6470c46d4358.pdf",
  },
  {
    title: "Udemy - Advanced Skillset",
    description: "Udemy certification: UC-a412e24f-d97e-45f1-8004-8db5b6302393.",
    image: "/certificates/placeholder.png",
    link: "/certificates/UC-a412e24f-d97e-45f1-8004-8db5b6302393.pdf",
  },
  {
    title: "Udemy - Specialization",
    description: "Udemy certification: UC-c01359ed-89f1-42a9-915c-4b4778505992.",
    image: "/certificates/placeholder.png",
    link: "/certificates/UC-c01359ed-89f1-42a9-915c-4b4778505992.pdf",
  },
  {
    title: "Autometa Certificate",
    description: "Professional certificate from Autometa.",
    image: "/certificates/placeholder.png",
    link: "/certificates/autometacertificate.pdf",
  },
  {
    title: "Raman Negi Personal Certificate",
    description: "Achievement certificate for Raman Negi.",
    image: "/certificates/placeholder.png",
    link: "/certificates/certificate-raman-negi.pdf",
  },
  {
    title: "Introduction to Python",
    description: "Certification for completing Introduction to Python course.",
    image: "/certificates/placeholder.png",
    link: "/certificates/introduction to p[ython.pdf",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/_sanidhyy",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
