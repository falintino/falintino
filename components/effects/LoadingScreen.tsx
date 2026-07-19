"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <div className="text-center">

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#1DB954] text-5xl font-black text-black shadow-[0_0_50px_rgba(29,185,84,.45)]"
            >
              F
            </motion.div>

            <motion.h1
              initial={{
                y: 18,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.15,
                duration: 0.4,
              }}
              className="mt-8 text-5xl font-black tracking-[8px]"
            >
              FALINTINO
            </motion.h1>

            <p className="mt-3 text-zinc-500">
              Official Artist
            </p>

            <div className="mx-auto mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="h-full rounded-full bg-[#1DB954]"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}