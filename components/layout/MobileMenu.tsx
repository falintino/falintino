"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const menus = [
  { name: "Home", href: "#home" },
  { name: "Music", href: "#music" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .35 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[280px] flex-col border-l border-white/10 bg-[#080808] p-6"
          >
            <div className="mb-10 flex items-center justify-between">

              <h2 className="text-xl font-black">
                FALINTINO
              </h2>

              <button onClick={onClose}>
                <HiX size={30} />
              </button>

            </div>

            <div className="flex flex-col gap-6">

              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  onClick={onClose}
                  className="text-lg text-zinc-300 transition hover:text-[#1DB954]"
                >
                  {menu.name}
                </Link>
              ))}

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}