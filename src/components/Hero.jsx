import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.35),rgba(0,0,0,0.75))]" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div 
          className="z-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-300" />
            <span className="text-xs tracking-wide text-white/90">Beyond five stars — welcome to Spacy</span>
          </div>

          <h1 className="text-4xl leading-tight font-bold md:text-6xl md:leading-[1.1]">
            Stay among the stars at Spacy — the galaxy's coolest space hotel
          </h1>
          <p className="mt-4 max-w-xl text-white/80 md:text-lg">
            Orbital suites. Zero‑gravity lounges. Panoramic nebula views. Check in to a new dimension of comfort and thrill.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#suites" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-black transition hover:bg-white/90">
              <Rocket className="h-5 w-5" />
              Book an Orbital Suite
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-white transition hover:bg-white/10">
              Explore Amenities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
