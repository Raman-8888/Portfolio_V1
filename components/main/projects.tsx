"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ScrollReveal } from "@/components/sub/scroll-reveal";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const xMultiplier = isMobile ? 180 : 350;

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <ScrollReveal direction="down">
        <div className="flex flex-col items-center mb-10 w-full text-center">
          <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 uppercase">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mt-4 text-base md:text-lg px-4 md:px-0">
            Showcasing my journey through code, from concept to deployment, building impactful digital solutions.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative w-full max-w-[1200px] h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
          aria-label="Previous Project"
        >
          <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, index) => {
              // Calculate relative position
              let position = index - currentIndex;
              
              // Handle wrap-around logic
              if (position > PROJECTS.length / 2) position -= PROJECTS.length;
              if (position < -PROJECTS.length / 2) position += PROJECTS.length;

              const isVisible = Math.abs(position) <= 1;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1 - Math.abs(position) * 0.3,
                    scale: isMobile ? (1 - Math.abs(position) * 0.15) : (1 - Math.abs(position) * 0.2),
                    x: position * xMultiplier,
                    zIndex: 10 - Math.abs(position),
                    rotateY: position * -25,
                    filter: `blur(${Math.max(0, Math.abs(position) * 4)}px)`,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -100) handleNext();
                    else if (swipe > 100) handlePrev();
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    filter: { type: "tween", ease: "easeInOut", duration: 0.3 }
                  }}
                  className="absolute w-[280px] md:w-[450px] cursor-grab active:cursor-grabbing"
                  style={{
                    perspective: "1000px",
                  }}
                >
                  <ProjectCard
                    src={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    isCenter={Math.abs(position) === 0}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
          aria-label="Next Project"
        >
          <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex gap-2 mt-10">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-500 w-6" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      
    </section>
  );
};
