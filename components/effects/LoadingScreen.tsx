"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <div className="text-center">

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#1DB954] text-5xl font-black text-black shadow-[0_0_60px_rgba(29,185,84,.5)]"
            >
              F
            </motion.div>

            <motion.h1
              initial={{ y: 25, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 text-5xl font-black tracking-[8px]"
            >
              FALINTINO
            </motion.h1>

            <p className="mt-3 text-zinc-500">
              Official Artist
            </p>

            <div className="mx-auto mt-10 h-1.5 w-64 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "linear",
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