import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Eye,
  MessageSquareText,
  LayoutTemplate,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function TrustSection() {
  const deliverables = [
    {
      icon: LayoutTemplate,
      title: "Estrutura pensada para conversão",
      description:
        "Cada seção tem uma função clara: prender atenção, explicar valor, gerar confiança e conduzir para o contato.",
    },
    {
      icon: MessageSquareText,
      title: "Comunicação clara de valor",
      description:
        "O visitante entende rapidamente o que você faz, por que isso importa e por que escolher sua empresa.",
    },
    {
      icon: Eye,
      title: "Design com percepção premium",
      description:
        "A apresentação visual aumenta a confiança antes mesmo da primeira conversa.",
    },
    {
      icon: BadgeCheck,
      title: "Organização para facilitar decisão",
      description:
        "Menos dúvida, menos fricção e uma jornada mais simples até a ação certa.",
    },
  ];

  const comparison = [
    {
      label: "Antes",
      title: "Presença confusa",
      items: [
        "Cliente chega sem contexto",
        "Valor percebido baixo",
        "Conversa começa pelo preço",
      ],
    },
    {
      label: "Depois",
      title: "Presença direcionada",
      items: [
        "Cliente entende o valor",
        "Imagem transmite confiança",
        "Contato chega mais preparado",
      ],
    },
  ];

  return (
    <section
      id="confianca"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0F] px-4 py-20 text-white md:px-8 lg:h-screen lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -35, 0],
            opacity: [0.16, 0.32, 0.16],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[14%] h-[280px] w-[280px] rounded-full bg-white/[0.04] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 45, 0],
            opacity: [0.14, 0.28, 0.14],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[12%] h-[340px] w-[340px] rounded-full bg-white/[0.035] blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/50 backdrop-blur-xl">
            Confiança
          </span>

          <h2 className="font-serif text-[42px] font-normal leading-[0.92] tracking-[-0.06em] md:text-[68px]">
            Confiança não vem só do design.
            <br />
            <span className="text-white/40">
              Vem da clareza e consistência.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-relaxed text-white/52 md:text-lg">
            Estruturamos cada projeto para transmitir valor antes mesmo do
            primeiro contato — sem promessas exageradas, sem atalhos e sem
            parecer genérico.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/60">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <p className="font-serif text-[28px] leading-[1] tracking-[-0.045em] text-white/90 md:text-[38px]">
              Não é sobre prometer mais.
              <br />
              <span className="text-white/35">É sobre mostrar melhor.</span>
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

        {/* Right */}
        <div className="space-y-5">
          {/* Deliverables */}
          <div className="grid gap-4 md:grid-cols-2">
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.07 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/55 transition group-hover:bg-white group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/43">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          {/* Before / After */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl md:grid-cols-2"
          >
            {comparison.map((block, index) => (
              <div
                key={block.label}
                className={`rounded-[26px] border p-6 ${
                  index === 0
                    ? "border-white/8 bg-black/20"
                    : "border-white/15 bg-white/[0.055]"
                }`}
              >
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/30">
                  {block.label}
                </span>

                <h3 className="mt-3 font-serif text-3xl leading-none tracking-[-0.045em] text-white">
                  {block.title}
                </h3>

                <div className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          index === 0 ? "text-white/25" : "text-white/70"
                        }`}
                      />
                      <p
                        className={`text-sm leading-relaxed ${
                          index === 0 ? "text-white/38" : "text-white/62"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}