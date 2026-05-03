import React from "react";
import { motion } from "framer-motion";
import {
  MousePointerClick,
  MessageCircle,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";

export default function PainSection() {
  const pains = [
    {
      icon: MousePointerClick,
      eyebrow: "01",
      title: "Recebe visitas, mas poucos contatos",
      description:
        "A pessoa chega até você, mas não encontra uma jornada clara para entender valor, confiar e tomar uma decisão.",
    },
    {
      icon: MessageCircle,
      eyebrow: "02",
      title: "Depende de conversas soltas no WhatsApp",
      description:
        "Sem estrutura antes do contato, o cliente chega frio, pergunta preço cedo demais e muitas oportunidades morrem na conversa.",
    },
    {
      icon: ShieldAlert,
      eyebrow: "03",
      title: "Sua imagem comunica menos do que sua entrega",
      description:
        "O serviço pode ser excelente, mas se a presença digital parece improvisada, a percepção de valor cai.",
    },
    {
      icon: TrendingDown,
      eyebrow: "04",
      title: "Concorrentes piores parecem melhores",
      description:
        "Nem sempre vence quem entrega mais. Muitas vezes vence quem transmite mais confiança antes do primeiro contato.",
    },
  ];

  return (
    <section className="relative min-h-screen lg:h-screen  bg-[#0A0A0F] px-4 py-20 text-white md:px-8 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[18%] h-[260px] w-[260px] rounded-full bg-white/[0.05] blur-[90px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.38, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[10%] h-[320px] w-[320px] rounded-full bg-white/[0.04] blur-[110px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px] opacity-15 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-32">
        {/* Coluna esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/50 backdrop-blur-xl">
            Diagnóstico
          </span>

          <h2 className="font-serif text-[42px] font-normal leading-[0.92] tracking-[-0.06em] md:text-[68px]">
            Você já aparece.
            <br />
            Mas talvez não esteja convertendo.
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/50">
            Muitos negócios têm qualidade, presença e até movimento. O problema
            é que a estrutura digital não transforma essa atenção em decisão.
          </p>

          <a
            href="#solucao"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium hover:scale-110 duration-700  transition text-white"
          >
            Ver como resolvemos isso
            <span>→</span>
          </a>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-serif text-[30px] font-normal leading-[0.98] tracking-[-0.05em] text-white/90 md:text-[46px]">
              E não é falta de qualidade.
              <br />
              <span className="text-white/35">É falta de estrutura.</span>
            </p>
          </div>
        </motion.div>

        {/* Separador animado */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute left-[45%] top-1/2 hidden h-[68%] w-px origin-center -translate-y-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block"
        />

        {/* Coluna direita */}
        <div className="relative border-y border-white/10">
          {pains.map((pain, index) => {
            const Icon = pain.icon;

            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative grid gap-5 overflow-hidden border-b border-white/10 py-6 last:border-b-0 md:grid-cols-[96px_1fr]"
              >
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/[0.045] to-transparent opacity-0 transition duration-700 group-hover:translate-x-[100%] group-hover:opacity-100" />

                <div className="relative flex items-start justify-between md:block">
                  <span className="font-serif text-3xl text-white/20 transition duration-300 group-hover:text-white/45">
                    {pain.eyebrow}
                  </span>

                  <div className="mt-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/50 transition duration-300 group-hover:bg-white group-hover:text-black md:mt-6">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="max-w-xl text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
                    {pain.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45">
                    {pain.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
