"use client";

import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

import { getFeaturedSong } from "@/lib/music";

export default function MusicPlayer() {
  const latest = getFeaturedSong();

  const embedUrl = latest.spotify.replace(
    "https://open.spotify.com/track/",
    "https://open.spotify.com/embed/track/"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <FaSpotify className="text-3xl text-[#1DB954]" />

        <div>
          <p className="text-sm tracking-[4px] text-[#1DB954]">
            NOW PLAYING
          </p>

          <h3 className="text-2xl font-black">
            {latest.title}
          </h3>
        </div>
      </div>

      <iframe
        src={embedUrl}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="overflow-hidden rounded-2xl border-0"
      />
    </motion.div>
  );
}