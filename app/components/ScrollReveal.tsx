"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  amount = 0.12,
}: ScrollRevealProps) {
  const hiddenState = {
    opacity: 0,
    x: direction === "left" ? -45 : direction === "right" ? 45 : 0,
    y: direction === "up" ? 42 : direction === "down" ? -42 : 0,
    scale: direction === "scale" ? 0.92 : 0.985,
    filter: "blur(8px)",
  };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      className={`scroll-reveal ${className}`}
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{
        amount: Math.min(amount, 0.1),
        margin: "0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
