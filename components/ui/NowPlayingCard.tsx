"use client";

import { FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NowPlayingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="glass green-glow mt-10 rounded-[30px] border border-white/10 p-6"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs tracking-[4px] text-[#1DB954]">
            NOW PLAYING
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Di Balik Layar
          </h3>

          <p className="mt-1 text-zinc-400">
            Falintino
          </p>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1DB954] text-black">
          <FaSpotify size={22} />
        </div>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-xs text-zinc-500">
          <span>1:24</span>
          <span>3:22</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

          <motion.div
            animate={{
              width: ["20%", "70%", "40%", "90%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full rounded-full bg-[#1DB954]"
          />

        </div>

      </div>

      <div className="mt-6 flex items-end gap-1">

        {[12, 26, 16, 32, 22, 30, 14, 28, 20].map((height, index) => (
          <motion.div
            key={index}
            animate={{
              height: [height, height + 10, height],
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              repeat: Infinity,
            }}
            className="w-1 rounded-full bg-[#1DB954]"
          />
        ))}

      </div>

    </motion.div>
  );
}