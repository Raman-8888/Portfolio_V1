"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            An aspiring fullstack engineer
          </h1>
        </motion.div>
 
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl text-bold text-white max-w-[600px] w-auto h-auto md:text-6xl"
        >
          <span>
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              real-time
            </span>{" "}
            & AI web experiences.
          </span>
        </motion.div>
 
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hi, I&apos;m Raman Negi. I&apos;m a Full Stack Developer specializing in Three.js, WebGL, Real-Time Systems, and AI Integration. Explore my work and check out my resume!
        </motion.p>
 
        <motion.a
          href="/Resume.pdf"
          download="Resume.pdf"
          variants={slideInFromLeft(1)}
          className="py-4 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] text-xl font-semibold shadow-lg mx-auto md:mx-0"
        >
          Download CV
        </motion.a>
      </div>
 
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none h-[300px] w-[300px] md:h-[650px] md:w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};
