import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Suites from './components/Suites';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Features />
      <Suites />
      <CTA />
    </div>
  );
}

export default App;
