"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  });

  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;

      setHover(
        !!target.closest(
          "button,a,input,textarea,[role='button']"
        )
      );
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY, visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Glow Besar */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hover ? 180 : 120,
          height: hover ? 180 : 120,
          opacity: visible ? 0.22 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full bg-[#1DB954] blur-[60px]"
      />

      {/* Ring */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hover ? 42 : 26,
          height: hover ? 42 : 26,
        }}
        transition={{
          duration: 0.18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-[#1DB954]"
      />

      {/* Dot */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2.5 w-2.5 rounded-full bg-[#1DB954]"
      />
    </>
  );
}