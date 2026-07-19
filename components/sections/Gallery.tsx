"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiX } from "react-icons/hi";

import { gallery } from "@/data/gallery";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-sm font-bold tracking-[6px] text-[#1DB954]">
              GALLERY
            </p>

            <h2 className="mt-4 text-5xl font-black text-white lg:text-6xl">
              Visual Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
              Kumpulan momen, karya, dan perjalanan Falintino
              dalam dunia musik, gaming, dan konten digital.
            </p>
          </motion.div>

          <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
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
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative mb-6 cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
                onClick={() => setSelected(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={900}
                  className="h-auto w-full transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-300">
                    Click to preview
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 transition hover:bg-[#1DB954] hover:text-black"
            >
              <HiX size={28} />
            </button>

            <motion.div
              initial={{
                scale: 0.9,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt="Preview"
                width={1200}
                height={1600}
                className="max-h-[90vh] w-auto rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}