"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  {
    size: 560,
    color: "#1DB954",
    top: "-8%",
    left: "-8%",
    duration: 30,
  },
  {
    size: 420,
    color: "#00E5A8",
    top: "58%",
    right: "-5%",
    duration: 36,
  },
  {
    size: 360,
    color: "#0EA5E9",
    bottom: "-6%",
    left: "34%",
    duration: 40,
  },
];

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 20, -15, 0],
                  y: [0, -15, 20, 0],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute rounded-full will-change-transform"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: 0.12,
            filter: "blur(140px)",
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}

      {/* Grid */}

      <div
        className="
          absolute inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}