import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Hero from "./sections/Hero";
import PainSection from "./sections/Pain";
import Navigation from "./Components/Navigation";
import SolutionSection from "./sections/Solutio";
import ProofSection from "./sections/Proof";
import ProcessSection from "./sections/Process";
import TrustSection from "./sections/Trust";
import CTASection from "./sections/CTA";

export default function App() {

  return (
    <div className="w-full flex-col overflow-hidden ">
      <Navigation />
      <section id="inicio">
        <Hero />
      </section>
      <section id="diagnostico">
        <PainSection />
      </section>
      <section id="solucao">
        <SolutionSection />
      </section>
      <section id="prova">
        <ProofSection />
      </section>
      <section id="proce">
        <ProcessSection />
      </section>
      <section id="confianca">
        <TrustSection />
      </section>
      <section id="contato">
        <CTASection />
      </section>
    </div>
  );
}
