import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 p-10 backdrop-blur"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(255,255,255,0.15),transparent)]" />
          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Your window to the universe is boarding</h3>
              <p className="mt-2 text-white/80">Be the first to know about launch windows, exclusive packages, and early‑bird deals.</p>
            </div>
            <form className="flex w-full flex-col gap-3 sm:flex-row">
              <input 
                type="email" 
                required
                placeholder="you@galaxymail.com" 
                className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-black transition hover:bg-white/90">
                <Rocket className="h-5 w-5" />
                Get updates
              </button>
            </form>
          </div>
        </motion.div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Spacy Orbital Hospitality. All rights reserved.</p>
      </div>
    </section>
  );
}
