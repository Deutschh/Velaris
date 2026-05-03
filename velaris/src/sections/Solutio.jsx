import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  MousePointerClick,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function SolutionSection() {
  const pillars = [
    {
      icon: Brain,
      title: "Estrutura estratégica",
      description:
        "Não criamos páginas soltas. Organizamos uma jornada para conduzir o visitante do interesse até a decisão.",
    },
    {
      icon: Target,
      title: "Clareza de valor",
      description:
        "Seu cliente entende rápido o que você faz, por que isso importa e por que escolher sua empresa.",
    },
    {
      icon: MousePointerClick,
      title: "Conversão orientada",
      description:
        "Cada bloco, texto e botão existe com uma função: reduzir dúvidas e gerar uma próxima ação.",
    },
    {
      icon: Smartphone,
      title: "Experiência fluida",
      description:
        "Do primeiro clique ao contato, tudo precisa parecer simples, confiável e fácil de continuar.",
    },
  ];

  return (
    <section
      id="processo"
      className="relative min-h-screen lg:h-screen overflow-hidden bg-[#0A0A0F] px-4 py-20 text-white md:px-8 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-[12%] top-[18%] h-[320px] w-[320px] rounded-full bg-white/[0.045] blur-[110px]" />
        <div className="absolute bottom-[12%] left-[8%] h-[260px] w-[260px] rounded-full bg-white/[0.035] blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/50 backdrop-blur-xl">
            A solução
          </span>

          <h2 className="font-serif text-[42px] font-normal leading-[0.92] tracking-[-0.06em] md:text-[68px]">
            A solução não é só ter um site.
            <br />
            <span className="text-white/40">
              É conduzir o cliente até a decisão.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/52 md:text-lg">
            Cada detalhe é pensado para guiar quem chega até você — desde a
            primeira impressão até o momento do contato.
          </p>

          <div className="mt-10 max-w-xl rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <p className="font-serif text-[28px] leading-[1] tracking-[-0.045em] text-white/90 md:text-[38px]">
              Não se trata de aparecer mais.
              <br />
              <span className="text-white/35">
                Se trata de transformar quem já chega até você.
              </span>
            </p>
          </div>

          <a
            href="#galeria"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/45 transition hover:text-white"
          >
            Ver como isso fica na prática
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Right */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />
          <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="group relative min-h-[230px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-[0_30px_90px_rgba(255,255,255,0.055)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/60 transition group-hover:bg-white group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-medium tracking-[-0.03em] text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    {pillar.description}
                  </p>

                  <span className="absolute right-6 top-6 font-serif text-4xl text-white/[0.06] transition group-hover:text-white/[0.12]">
                    0{index + 1}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
