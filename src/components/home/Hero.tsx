"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black leading-tight text-white md:text-7xl"
        >
          DRE'S
          <br />
          BARBERSHOP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-zinc-300 md:text-xl"
        >
          Premium cuts, expert grooming and a live queue that lets you
          reserve your spot before you arrive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Reserve Now
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black">
            View Queue
          </button>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400">5000+</h3>
            <p className="text-zinc-300">Haircuts</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">4.9★</h3>
            <p className="text-zinc-300">Customer Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">4</h3>
            <p className="text-zinc-300">Professional Barbers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">15 min</h3>
            <p className="text-zinc-300">Average Wait</p>
          </div>
        </div>
      </div>
    </section>
  );
}