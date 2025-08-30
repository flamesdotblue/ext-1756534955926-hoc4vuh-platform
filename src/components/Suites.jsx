import React from 'react';
import { Star, Shield, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const suites = [
  {
    name: 'Cosmic Capsule',
    price: '399',
    tagline: 'Essential orbit experience',
    perks: ['Panorama porthole', 'Memory foam cocoon bed', 'Quantum Wi‑Fi', 'In‑cabin stargazing kit']
  },
  {
    name: 'Nebula Suite',
    price: '799',
    tagline: 'Spacious celestial comfort',
    perks: ['360° holo‑view', 'Zero‑G lounge corner', 'Private dining', 'Priority launch']
  },
  {
    name: 'Aurora Grand',
    price: '1299',
    tagline: 'Ultra‑lux orbit living',
    perks: ['Panoramic observatory', 'Personal astro‑concierge', 'VIP shuttle', 'Immersive spa']
  }
];

export default function Suites() {
  return (
    <section id="suites" className="relative bg-gradient-to-b from-black via-slate-900/30 to-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Choose your orbit</h2>
          <p className="mt-3 text-white/70">Three tiers of stellar comfort, all with views that defy gravity.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {suites.map((s, i) => (
            <motion.div
              key={s.name}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition ${i === 1 ? 'ring-2 ring-indigo-400/50' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {i === 1 && (
                <div className="absolute -top-3 left-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-white/70">{s.tagline}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold">${s.price}</span>
                <span className="mb-1 text-sm text-white/60">/ night</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {s.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-lg bg-white px-4 py-2 text-black transition hover:bg-white/90">
                Reserve {s.name}
              </button>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                <div className="flex items-center gap-2"><Wifi className="h-4 w-4" /> Free Quantum Wi‑Fi</div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Safety Certified</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
