"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-black leading-tight md:text-8xl"
        >
          PREMIUM
          <br />
          BARBERING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-xl text-lg text-zinc-400"
        >
          Join the live queue or reserve your spot with one of our
          professional barbers.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .96 }}
          className="mt-10 rounded-xl bg-yellow-400 px-8 py-4 text-lg font-bold text-black"
        >
          Reserve Your Spot
        </motion.button>
      </div>
    </section>
  );
}