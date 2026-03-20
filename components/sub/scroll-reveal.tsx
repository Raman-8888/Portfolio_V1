"use client";

import React, { FC, PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

type ScrollRevealProps = {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
};

export const ScrollReveal: FC<PropsWithChildren<ScrollRevealProps>> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  stagger = false,
  staggerDelay = 0.1,
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: stagger ? i * staggerDelay : delay,
        duration: duration,
        ease: "easeOut" as any, // Cast to any to bypass strict easing types if they conflict
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      custom={0}
      className="w-full"
    >
      {stagger ? (
        React.Children.map(children, (child, i) => (
          <motion.div variants={variants} custom={i} key={i}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};
