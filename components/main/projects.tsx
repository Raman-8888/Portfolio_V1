"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Projects
      </h1>

      <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
          aria-label="Previous Project"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, index) => {
              // Calculate relative position
              let position = index - currentIndex;
              
              // Handle wrap-around logic
              if (position > PROJECTS.length / 2) position -= PROJECTS.length;
              if (position < -PROJECTS.length / 2) position += PROJECTS.length;

              const isVisible = Math.abs(position) <= 1; // Projects usually have fewer items, show 3 total

              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1 - Math.abs(position) * 0.3,
                    scale: 1 - Math.abs(position) * 0.2,
                    x: position * 350,
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
                  className="absolute w-[350px] md:w-[450px] cursor-grab active:cursor-grabbing"
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
          className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
          aria-label="Next Project"
        >
          <ChevronRightIcon className="w-8 h-8" />
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
