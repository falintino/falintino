"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[99999]"
          aria-hidden="true"
        >
          {/* TOP PROGRESS BAR */}
          <div className="h-[3px] w-full overflow-hidden bg-white/5">
            <motion.div
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="h-full bg-[#1DB954] shadow-[0_0_18px_rgba(29,185,84,0.8)]"
            />
          </div>

          {/* SMALL BRAND BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2.5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DB954] text-sm font-black text-black">
              F
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-white">
                FALINTINO
              </p>

              <p className="text-[10px] text-white/40">
                Official Website
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}