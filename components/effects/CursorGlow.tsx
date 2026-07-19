"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
    mass: 0.3,
  });

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  if (typeof window !== "undefined") {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return null;
    }
  }

  return (
    <>
      <motion.div
        ref={glowRef}
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-28 w-28 rounded-full bg-[#1DB954]/20 blur-[55px]"
      />

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full border border-[#1DB954]/70"
      />

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-[#1DB954]"
      />
    </>
  );
}