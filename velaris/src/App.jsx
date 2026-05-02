import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Hero from "./sections/Hero";
import PainSection from "./sections/Pain";
import Navigation from "./Components/Navigation";

export default function App() {

  return (
    <div className="w-full flex-col">
      <Navigation />
      <section id="inicio">
        <Hero />
      </section>
      <section id="diagnostico">
        <PainSection />
      </section>
    </div>
  );
}
