"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaTiktok,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { videos } from "@/data/videos";

export default function FeaturedVideos() {
  return (
    <section
      id="videos"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <SectionTitle
          subtitle="VIDEOS"
          title="Featured Videos"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {videos.map((video, index) => {

            const PlatformIcon =
              video.platform === "YouTube"
                ? FaYoutube
                : FaTiktok;

            return (

              <motion.a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={900}
                    height={520}
                    className="aspect-video w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm backdrop-blur-xl">

                    <PlatformIcon className="text-[#1DB954]" />

                    {video.platform}

                  </div>

                  <div className="absolute right-6 top-6 rounded-full bg-black/60 px-4 py-2 text-sm backdrop-blur-xl">
                    {video.duration}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1DB954] text-3xl text-black shadow-[0_0_60px_rgba(29,185,84,.5)] transition duration-300 group-hover:scale-110">
                      <FaPlay className="ml-1" />
                    </div>

                  </div>

                </div>

                <div className="flex items-center justify-between p-7">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {video.title}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      Watch on {video.platform}
                    </p>

                  </div>

                  <FaArrowRight className="transition duration-300 group-hover:translate-x-2 group-hover:text-[#1DB954]" />

                </div>

              </motion.a>

            );
          })}

        </div>

      </Container>
    </section>
  );
}