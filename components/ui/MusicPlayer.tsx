"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaPlay } from "react-icons/fa";

import { getFeaturedSong } from "@/lib/music";

export default function MusicPlayer() {
  const latest = getFeaturedSong();

  const [loaded, setLoaded] = useState(false);

  const embedUrl = latest.spotify.replace(
    "https://open.spotify.com/track/",
    "https://open.spotify.com/embed/track/"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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

      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          className="flex h-[352px] w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 transition hover:border-[#1DB954] hover:bg-black/60"
        >
          <FaPlay className="mb-5 text-5xl text-[#1DB954]" />

          <h4 className="text-2xl font-bold">
            Play on Spotify
          </h4>

          <p className="mt-3 max-w-sm text-center text-zinc-400">
            Spotify player akan dimuat setelah kamu menekan tombol ini.
          </p>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          width="100%"
          height="352"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="overflow-hidden rounded-2xl border-0"
        />
      )}
    </motion.div>
  );
}