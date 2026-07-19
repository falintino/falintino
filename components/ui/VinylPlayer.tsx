"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  cover: string;
  title: string;
};

export default function VinylPlayer({
  cover,
  title,
}: Props) {
  return (
    <div className="relative flex items-center justify-center">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[48%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-zinc-900 via-zinc-700 to-black shadow-[0_0_80px_rgba(29,185,84,.25)]"
      >
        <div className="absolute inset-5 rounded-full border border-white/10" />
        <div className="absolute inset-10 rounded-full border border-white/5" />
        <div className="absolute inset-16 rounded-full border border-white/5" />

        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300" />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        className="relative z-10"
      >
        <Image
          src={cover}
          alt={title}
          width={320}
          height={320}
          className="rounded-[28px] border border-white/10 shadow-[0_0_60px_rgba(29,185,84,.25)]"
        />
      </motion.div>

    </div>
  );
}