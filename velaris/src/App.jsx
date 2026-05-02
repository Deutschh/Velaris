import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Hero from "./sections/Hero";
import PainSection from "./sections/Pain";

export default function App() {

  return (
    <div className="w-full flex-col">
      <Hero />
      <PainSection />
    </div>
  );
}
