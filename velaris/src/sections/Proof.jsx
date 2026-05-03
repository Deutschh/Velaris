import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Eye,
  Layers,
  MousePointerClick,
  ShieldCheck,
  X,
} from "lucide-react";
import Pandora from "../assets/Previews/pandora.png"
import Estetica from "../assets/Previews/realiz.jpg"
import Advocacia from "../assets/Previews/Duarte.jpg"
import Limpeza from "../assets/Previews/cleanseat.jpg"

export default function ProofSection() {
  const [activePreview, setActivePreview] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const previews = [
    {
      title: "Espaço Pandora Buffet",
      niche: "Buffet & Eventos",
      image: Pandora,
      description:
        "Preview premium para transformar eventos, fotos e estrutura em desejo imediato.",
    },
    {
      title: "Clínica Realize",
      niche: "Estética",
      image: Estetica,
      description:
        "Página focada em confiança, autoridade visual e agendamento pelo WhatsApp.",
    },
    {
      title: "Limpeza de Estofados",
      niche: "Serviços locais",
      image: Limpeza,
      description:
        "Estrutura pensada para mostrar antes/depois, prova e chamada para orçamento.",
    },
    {
      title: "Duarte & do Vale",
      niche: "Advocacia",
      image: Advocacia,
      description:
        "Visual acolhedor com foco em serviços, diferenciais e contato rápido.",
    },
  ];

  const flow = [
    {
      icon: Eye,
      label: "Hero",
      text: "Prende atenção e comunica valor em poucos segundos.",
    },
    {
      icon: Layers,
      label: "Valor",
      text: "Explica rapidamente por que escolher a empresa.",
    },
    {
      icon: ShieldCheck,
      label: "Prova",
      text: "Gera confiança antes do primeiro contato.",
    },
    {
      icon: MousePointerClick,
      label: "CTA",
      text: "Conduz o visitante para a ação certa.",
    },
  ];

  const current = previews[activePreview];

  function nextPreview() {
    setActivePreview((currentIndex) =>
      currentIndex === previews.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function previousPreview() {
    setActivePreview((currentIndex) =>
      currentIndex === 0 ? previews.length - 1 : currentIndex - 1,
    );
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (!modalOpen) return;

      if (event.key === "Escape") setModalOpen(false);
      if (event.key === "ArrowRight") nextPreview();
      if (event.key === "ArrowLeft") previousPreview();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <section
      id="galeria"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0F] px-4 py-20 text-white md:px-8  lg:py-12"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -35, 0], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] top-[16%] h-[280px] w-[280px] rounded-full bg-white/[0.045] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 45, 0],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[8%] right-[12%] h-[360px] w-[360px] rounded-full bg-white/[0.035] blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        {/* Esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/50 backdrop-blur-xl">
            Prova visual
          </span>

          <h2 className="font-serif text-[42px] font-normal leading-[0.92] tracking-[-0.06em] md:text-[68px]">
            Como isso se traduz
            <br />
            <span className="text-white/40">na prática.</span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/52 md:text-lg">
            Um modelo real de como organizamos presença, percepção e conversão
            em um único fluxo — para que o visitante entenda, confie e tome uma
            decisão.
          </p>

          <div className="mt-9 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
            <p className="mb-5 text-sm font-medium text-white/70">
              A estrutura por trás do preview
            </p>

            <div className="space-y-3">
              {flow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group flex gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-3 transition hover:border-white/15 hover:bg-white/[0.045]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition group-hover:bg-white group-hover:text-black">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/42">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.a
            href="#contato"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mt-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.18)] transition hover:shadow-[0_0_65px_rgba(255,255,255,0.32)]"
          >
            <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80" />
            <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/60 blur-md transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10">Quero algo assim</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Direita - Preview principal */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-full bg-white/[0.035] blur-[110px]" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_60px_180px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
            {/* Browser bar */}
            <div className="flex items-center justify-between rounded-t-[28px] border-b border-white/10 bg-white/[0.025] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-white/25" />
                <span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="h-3 w-3 rounded-full bg-white/10" />
              </div>

              <div className="hidden h-8 w-72 rounded-full border border-white/10 bg-black/20 md:block" />

              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
              >
                Ampliar
                <Expand className="h-3.5 w-3.5 transition group-hover:scale-110" />
              </button>
            </div>

            {/* Preview grande */}
            <button
              onClick={() => setModalOpen(true)}
              className="group relative block w-full overflow-hidden rounded-b-[28px] bg-[#0D0D12] text-left"
            >
              <div className="relative h-[470px] overflow-hidden md:h-[570px]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="mb-3 inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/55 backdrop-blur-xl">
                    {current.niche}
                  </div>

                  <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-white md:text-5xl">
                    {current.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
                    {current.description}
                  </p>
                </div>

                <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs text-white/60 opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
                  Clique para expandir
                </div>
              </div>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-5 grid grid-cols-4 gap-3">
            {previews.map((preview, index) => {
              const isActive = activePreview === index;

              return (
                <button
                  key={preview.title}
                  onClick={() => setActivePreview(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-1 transition ${
                    isActive
                      ? "border-white/50 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.035] hover:border-white/25"
                  }`}
                >
                  <div className="h-20 overflow-hidden rounded-xl bg-[#111118]">
                    <img
                      src={preview.image}
                      alt={preview.title}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Modal fullscreen */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white/70 transition hover:bg-white hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={previousPreview}
              className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white/70 transition hover:bg-white hover:text-black md:grid"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextPreview}
              className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white/70 transition hover:bg-white hover:text-black md:grid"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={current.title}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28 }}
              className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0F] shadow-[0_60px_200px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-xs text-white/40">{current.niche}</p>
                  <h3 className="font-serif text-2xl text-white">
                    {current.title}
                  </h3>
                </div>

                <div className="text-sm text-white/35">
                  {activePreview + 1} / {previews.length}
                </div>
              </div>

              <div className="max-h-[76vh] overflow-auto">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
