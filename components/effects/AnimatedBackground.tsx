"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    size: 700,
    color: "#1DB954",
    top: "-12%",
    left: "-10%",
    duration: 18,
  },
  {
    size: 550,
    color: "#00E5A8",
    top: "55%",
    right: "-8%",
    duration: 22,
  },
  {
    size: 450,
    color: "#0EA5E9",
    bottom: "-10%",
    left: "35%",
    duration: 20,
  },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Aurora */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[170px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: 0.14,
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
          opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

    </div>
  );
}