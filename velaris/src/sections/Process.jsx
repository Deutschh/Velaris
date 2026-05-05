import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Route,
  LayoutTemplate,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico",
      description:
        "Entendemos seu momento, seu posicionamento e o que o site precisa gerar para o seu negócio.",
    },
    {
      number: "02",
      icon: Route,
      title: "Estrutura",
      description:
        "Definimos a lógica da página para guiar o visitante da primeira impressão até a decisão.",
    },
    {
      number: "03",
      icon: LayoutTemplate,
      title: "Construção",
      description:
        "Criamos o visual, organizamos as seções e transformamos a estratégia em uma presença premium.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Entrega + ajustes",
      description:
        "Refinamos com você até tudo fazer sentido, com clareza, consistência e foco no resultado.",
    },
  ];

  return (
    <section
      id="processo"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0F] px-4 py-20 text-white md:px-8 lg:h-screen lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -35, 0],
            opacity: [0.18, 0.34, 0.18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[12%] top-[15%] h-[300px] w-[300px] rounded-full bg-white/[0.04] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 45, 0],
            opacity: [0.14, 0.28, 0.14],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[8%] h-[280px] w-[280px] rounded-full bg-white/[0.035] blur-[110px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/50 backdrop-blur-xl">
            Como funciona
          </span>

          <h2 className="font-serif text-[42px] font-normal leading-[0.92] tracking-[-0.06em] md:text-[68px]">
            Não é complexo.
            <br />
            <span className="text-white/40">
              Existe um processo claro por trás.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-relaxed text-white/52 md:text-lg">
            Você não precisa saber exatamente o que fazer. Nós conduzimos cada
            etapa com você, da ideia inicial até uma presença digital pronta
            para gerar confiança.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <p className="font-serif text-[28px] leading-[1] tracking-[-0.045em] text-white/90 md:text-[38px]">
              Você participa.
              <br />
              <span className="text-white/35">
                Mas não precisa carregar o processo.
              </span>
            </p>
          </div>

          <a
            href="#contato"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/45 transition hover:text-white"
          >
            Quero entender meu projeto
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Right timeline */}
        <div className="relative">
          <div className="absolute left-[26px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, x: 34 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="group relative grid gap-5 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] md:grid-cols-[64px_1fr]"
                >
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/[0.045] to-transparent opacity-0 transition duration-700 group-hover:translate-x-[100%] group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between md:block">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-[#0A0A0F]/70 text-white/55 transition group-hover:bg-white group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-serif text-4xl text-white/10 transition group-hover:text-white/20 md:mt-5 md:block">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/28">
                        Etapa {step.number}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <h3 className="text-2xl font-medium tracking-[-0.035em] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.025] px-6 py-5 backdrop-blur-xl"
          >
            <p className="font-serif text-2xl leading-tight tracking-[-0.04em] text-white/85 md:text-3xl">
              Quando o caminho é claro,{" "}
              <span className="text-white/35">a decisão fica mais fácil.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}