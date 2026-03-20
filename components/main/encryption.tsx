"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";
import { ScrollReveal } from "@/components/sub/scroll-reveal";

export const Encryption = () => {
  return (
    <div className="flex flex-col md:flex-row relative items-center justify-center min-h-[60vh] md:min-h-screen w-full h-full -z-20">
      <ScrollReveal direction="down">
        <div className="absolute w-auto h-auto top-0 left-0 right-0 z-[5]">
          <motion.div
            variants={slideInFromTop}
            className="text-[30px] md:text-[40px] font-medium text-center text-gray-200 mt-10 md:mt-0"
          >
            Performance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              &
            </span>{" "}
            security.
          </motion.div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.3}>
        <div className="flex flex-col items-center justify-center md:translate-y-[-50px] absolute z-[20] w-auto h-auto inset-0 m-auto mt-40 md:mt-auto">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
              src="/lock-top.png"
              alt="Lock top"
              width={50}
              height={50}
              className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/lock-main.png"
              alt="Lock main"
              width={70}
              height={70}
              className="z-10"
            />
          </div>

          <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Encryption</h1>
          </div>
        </div>
      </ScrollReveal>

      <div className="absolute z-[20] bottom-[10px] px-[5px] w-full">
        <ScrollReveal direction="up">
          <div className="cursive text-[18px] md:text-[20px] font-medium text-center text-gray-300">
            Secure your data with end-to-end encryption.
          </div>
        </ScrollReveal>
      </div>

      <div className="w-full flex items-start justify-center absolute inset-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover md:h-auto opacity-50 md:opacity-100"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
