import React from 'react';
import { Rocket, Wifi, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Zero‑G Playground',
    desc: 'Float, flip, and fly through curated microgravity zones designed by aerospace choreographers.'
  },
  {
    icon: Wifi,
    title: 'Quantum Wi‑Fi',
    desc: 'Ultra‑low latency link to EarthNet and interplanetary relays for seamless calls and streams.'
  },
  {
    icon: Shield,
    title: 'Stellar Safety',
    desc: 'Redundant hull shielding, AI navigation, and medical pods monitored 24/7.'
  },
  {
    icon: Sparkles,
    title: 'Nebula Dining',
    desc: 'Multi‑course cuisine with molecular gastronomy inspired by cosmic phenomena.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative isolate bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Amenities that bend reality</h2>
          <p className="mt-3 text-white/70">Crafted for explorers, dreamers, and anyone ready to level up their vacation to orbital status.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
