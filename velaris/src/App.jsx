import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  LayoutDashboard,
  MonitorSmartphone,
  MessageCircle,
  BarChart3,
  ShieldCheck,
  MousePointerClick,
  Star,
  Zap,
  Layers,
} from "lucide-react";

export default function PremiumHero() {
  const navItems = [
    { icon: LayoutDashboard, label: "Início" },
    { icon: MonitorSmartphone, label: "Sites" },
    { icon: Sparkles, label: "Estratégia" },
    { icon: BarChart3, label: "Resultados" },
    { icon: MessageCircle, label: "Contato" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B14] text-white">
      {/* React Bits style background: Aurora + Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,92,255,0.34),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(124,92,255,0.24),transparent_32%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
        <motion.div
          animate={{ x: [0, 90, 0], y: [0, -60, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[#7C5CFF]/25 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 50, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-180px] right-[-120px] h-[560px] w-[560px] rounded-full bg-violet-500/25 blur-[130px]"
        />
      </div>

      {/* Sidebar */}
      <aside className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
                <span className="pointer-events-none absolute left-14 rounded-full border border-white/10 bg-[#151521] px-3 py-1 text-xs text-white/80 opacity-0 shadow-xl transition group-hover:opacity-100">
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </nav>
      </aside>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/75 shadow-lg backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C5CFF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C5CFF]" />
            </span>
            Sites premium para empresas que querem vender mais
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
            Presença digital que transforma atenção em clientes.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/68 md:text-xl">
            Criamos sites estratégicos para empresas que querem crescer com
            posicionamento premium, clareza comercial e uma experiência visual
            que gera desejo logo no primeiro contato.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.035, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#7C5CFF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_45px_rgba(124,92,255,0.45)] transition hover:bg-[#8B72FF]"
            >
              Solicitar análise gratuita
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </motion.a>

            <div className="flex items-center gap-3 text-sm text-white/55">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-9 w-9 rounded-full border-2 border-[#0B0B14] bg-gradient-to-br from-white/30 to-[#7C5CFF]/40"
                  />
                ))}
              </div>
              <span>Estratégia, design e conversão em um só projeto.</span>
            </div>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { icon: Star, title: "Premium", desc: "Imagem forte" },
              { icon: Zap, title: "Rápido", desc: "CTA direto" },
              {
                icon: ShieldCheck,
                title: "Confiável",
                desc: "Mais autoridade",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
                >
                  <Icon className="mb-4 h-5 w-5 text-[#A996FF]" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative min-h-[560px]"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-8 w-[88%] rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <div className="ml-4 h-7 flex-1 rounded-full bg-white/[0.06]" />
            </div>

            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#11111D]">
              <div className="relative h-[390px] bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.45),transparent_30%),linear-gradient(135deg,#171725,#0b0b14)] p-7">
                <div className="mb-16 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-[#7C5CFF]" />
                    <div className="h-3 w-24 rounded-full bg-white/30" />
                  </div>
                  <div className="flex gap-3">
                    <div className="h-3 w-12 rounded-full bg-white/20" />
                    <div className="h-3 w-12 rounded-full bg-white/20" />
                    <div className="h-3 w-12 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="mb-4 h-3 w-28 rounded-full bg-[#7C5CFF]/70" />
                  <div className="space-y-3">
                    <div className="h-7 w-full rounded-full bg-white/85" />
                    <div className="h-7 w-4/5 rounded-full bg-white/70" />
                    <div className="h-7 w-3/5 rounded-full bg-white/50" />
                  </div>
                  <div className="mt-7 h-12 w-44 rounded-full bg-[#7C5CFF] shadow-[0_0_30px_rgba(124,92,255,0.5)]" />
                </div>

                <div className="absolute bottom-7 right-7 grid grid-cols-2 gap-3">
                  <div className="h-24 w-28 rounded-2xl bg-white/10 backdrop-blur" />
                  <div className="h-24 w-28 rounded-2xl bg-white/10 backdrop-blur" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-4 w-[230px] rounded-[2rem] border border-white/12 bg-[#11111D]/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-white/20" />
            <div className="overflow-hidden rounded-[1.45rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,92,255,0.55),transparent_35%),linear-gradient(180deg,#171725,#0B0B14)] p-5">
              <div className="mb-12 flex items-center justify-between">
                <div className="h-7 w-7 rounded-xl bg-[#7C5CFF]" />
                <div className="h-3 w-12 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2">
                <div className="h-5 w-full rounded-full bg-white/80" />
                <div className="h-5 w-3/4 rounded-full bg-white/55" />
              </div>
              <div className="mt-5 h-10 w-full rounded-full bg-[#7C5CFF]" />
              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-2xl bg-white/10" />
                <div className="h-16 rounded-2xl bg-white/10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute right-4 top-0 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C5CFF]/25 text-[#B7A8FF]">
                <MousePointerClick className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">+ clareza no CTA</p>
                <p className="text-xs text-white/50">
                  Menos fricção para converter
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-28 right-0 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C5CFF]/25 text-[#B7A8FF]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Design responsivo</p>
                <p className="text-xs text-white/50">
                  Site + celular no mesmo padrão
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
