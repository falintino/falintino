"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { press } from "@/data/press";

export default function Press() {
  const musicPress = press.filter(
    (item) => item.category === "music"
  );

  const creatorPress = press.filter(
    (item) => item.category === "creator"
  );

  const renderCards = (items: typeof press) =>
    items.map((item, index) => (
      <motion.a
        key={`${item.media}-${index}`}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        whileHover={{
          y: -6,
        }}
        className="group rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#1DB954] hover:bg-white/[0.05]"
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10 px-4 py-2 text-xs font-bold tracking-[3px] text-[#1DB954]">
            {item.media}
          </span>

          <span className="text-sm text-zinc-500">
            {item.date}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-black leading-snug transition duration-300 group-hover:text-[#1DB954]">
          {item.title}
        </h3>

        <div className="mt-10 flex items-center gap-3 font-semibold text-[#1DB954] transition-transform duration-300 group-hover:translate-x-2">
          Read Article
          <FaArrowRight />
        </div>
      </motion.a>
    ));

  return (
    <section
      id="press"
      className="relative overflow-hidden py-32"
    >
      <Container>
        <SectionTitle
          subtitle="FEATURED BY NATIONAL MEDIA"
          title="Press & Media"
        />

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-400"
        >
          Falintino has been featured by national media for his
          journey as a gaming creator and for his debut music
          release.
        </motion.p>

        {/* MUSIC */}

        <div className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="rounded-full border border-[#1DB954]/20 bg-[#1DB954]/10 px-5 py-2 text-sm font-bold tracking-[3px] text-[#1DB954]">
              MUSIC
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8">
            {renderCards(musicPress)}
          </div>
        </div>

        {/* CREATOR */}

        <div className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-bold tracking-[3px] text-white">
              CREATOR JOURNEY
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {renderCards(creatorPress)}
          </div>
        </div>
      </Container>
    </section>
  );
}