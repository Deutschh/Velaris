import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Menu,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";
import Logo from "../assets/Logo.svg";

export default function Hero() {
  const [cursorActive, setCursorActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const parallaxY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.3 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.3 });

  function handleMouseMove(event) {
    mouseX.set(event.clientX - 56);
    mouseY.set(event.clientY - 56);
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      className="h-screen overflow-hidden bg-[#0A0A0F] text-white selection:bg-white/30"
    >
      <section className="relative min-h-screen overflow-hidden px-4 py-6 md:px-8 md:py-8">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,#0f0f15_0%,#0A0A0F_50%,#07070b_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
          <motion.div
            style={{
              x: parallaxX,
              y: parallaxY,
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-16 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]"
          />
          <motion.div
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 bottom-0 h-[540px] w-[540px] rounded-full bg-white/10 blur-[150px]"
          />
        </div>

        <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between py-6">
          <motion.a
            href="#inicio"
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            whileHover={{ y: -1 }}
            className="flex items-center gap-3"
          >
            <div className="grid h-18 w-18 place-items-center rounded-full text-black">
              <img src={Logo} alt="Logo Velaris" className="h-full w-full" />
            </div>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:block">
              
            </span>
          </motion.a>

          <div className="justify-end flex gap-x-6">
            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-sm backdrop-blur-xl md:flex">
              {["Projetos", "Processo", "Galeria", "Contato"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onMouseEnter={() => setCursorActive(true)}
                  onMouseLeave={() => setCursorActive(false)}
                  whileHover={{ y: -1 }}
                  className="rounded-full px-4 py-2 text-white/50 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href="#contato"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
                whileHover={{ y: -1 }}
                className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 md:inline-flex"
              >
                Começar
              </motion.a>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 bg-[#0A0A0F]/95 px-6 py-6 backdrop-blur-xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                    <span className="text-sm font-black tracking-[-0.08em]">
                      DS
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Deutschh Studio
                  </span>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-2xl leading-none text-white/70"
                >
                  ×
                </button>
              </div>

              <nav className="mt-20 flex flex-col gap-6">
                {["Projetos", "Processo", "Galeria", "Contato"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="border-b border-white/10 pb-5 font-serif text-4xl text-white"
                    >
                      {item}
                    </motion.a>
                  ),
                )}

                <motion.a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black"
                >
                  Solicitar análise gratuita
                </motion.a>
              </nav>
            </motion.div>
          )}
        </header>

        <div className="relative z-10 mx-auto flex min-h-50/100 max-w-5xl flex-col items-center justify-center px-4 text-center md:px-8 my-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60"
          >
            <Sparkles className="h-4 w-4 text-white/70" />
            Estrutura pensada para conversão real
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            className="max-w-5xl font-serif text-[50px] font-normal leading-[0.88] tracking-[-0.075em] text-white md:text-[88px] lg:text-[116px]"
          >
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Presença digital que transforma
            </span>
            <br className="hidden md:block" />
            <span className="text-white">atenção em clientes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            Criamos sites estratégicos para empresas que querem aumentar
            percepção de valor e transformar visitantes em clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contato"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.18)] transition hover:shadow-[0_0_65px_rgba(255,255,255,0.32)]"
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80" />
              <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/60 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10">Solicitar análise gratuita</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contato"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-transparent px-7 py-4 text-sm font-semibold text-white/50 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            >
              Conhecer Galeria
              <LayoutDashboard />
            </motion.a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center mb-4">
          <svg
            className="h-[260px] w-[1100px] opacity-40"
            viewBox="0 0 1100 260"
            fill="none"
          >
            <motion.path
              d="M0 200C120 60 200 60 300 200C400 340 480 60 600 200C720 340 800 60 920 200C1000 300 1080 80 1100 200"
              stroke="white"
              strokeOpacity="0.7"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 0.6 }}
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
