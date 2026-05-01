import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Menu, MessageCircle, LayoutDashboard } from "lucide-react";

export default function MonochromeHero() {
  const [cursorActive, setCursorActive] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-16 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 bottom-0 h-[540px] w-[540px] rounded-full bg-white/10 blur-[150px]"
          />
        </div>

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between py-6">
          <motion.div
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            whileHover={{ y: -1 }}
            className="flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
              <span className="text-sm font-black tracking-[-0.08em]">DS</span>
            </div>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:block">Deutschh Studio</span>
          </motion.div>

          <nav className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            {["Projetos", "Processo", "Contato"].map((item) => (
              <motion.a
                key={item}
                href="#"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
                whileHover={{ y: -1 }}
                className="transition hover:text-white"
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
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-50/100 max-w-5xl flex-col items-center justify-center px-4 text-center md:px-8 my-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60"
          >
            <Sparkles className="h-4 w-4 text-white/70" />
            Sites estratégicos com foco em percepção e conversão
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            className="max-w-5xl font-serif text-[50px] font-normal leading-[0.88] tracking-[-0.075em] text-white md:text-[88px] lg:text-[116px]"
          >
            Presença digital que transforma atenção em clientes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            Criamos sites refinados para empresas que querem aumentar percepção de valor e transformar visitantes em conversas reais.
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
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition hover:bg-white/90"
            >
              Solicitar análise gratuita
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contato"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/[0.08] hover:text-white"
            >
              Conhecer Galeria
             <LayoutDashboard />
            </motion.a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center mb-4">
          <svg className="h-[260px] w-[1100px] opacity-40" viewBox="0 0 1100 260" fill="none">
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
