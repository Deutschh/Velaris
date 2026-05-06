import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Instagram from "../assets/Previews/Instagram.svg";

export default function FinalCTASection() {
  return (
    <section
      id="contato"
      className="relative min-h-screen overflow-hidden bg-[#07070B] px-4 py-20 text-white md:px-8 lg:h-screen lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.22, 0.38, 0.22],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.045] blur-[150px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between">
        {/* CTA */}
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.85 }}
            className="mx-auto max-w-5xl text-center"
          >
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/50 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-white/45" />
              Próximo passo
            </span>

            <h2 className="font-serif text-[46px] font-normal leading-[0.9] tracking-[-0.065em] text-white md:text-[82px] lg:text-[104px]">
              Vamos estruturar sua presença
              <br className="hidden md:block" />
              <span className="text-white/38"> para converter melhor?</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/52 md:text-lg">
              Me conta rapidamente sobre seu negócio e te mostro como isso
              poderia funcionar na prática — com clareza, estratégia e sem
              compromisso.
            </p>

            <motion.a
              href="https://wa.me/+5511917123701"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-10 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-9 py-4 text-sm font-semibold text-black shadow-[0_0_45px_rgba(255,255,255,0.2)] transition hover:shadow-[0_0_75px_rgba(255,255,255,0.34)]"
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80" />
              <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/60 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <MessageCircle className="relative z-10 h-4 w-4" />
              <span className="relative z-10">Quero entender meu projeto</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>

            <p className="mt-5 text-sm text-white/35">
              Sem compromisso. Só clareza.
            </p>
          </motion.div>
        </div>

        {/* Footer simples */}
        <footer className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Velaris
              </p>
              <p className="mt-2 text-sm text-white/38">
                Sites estratégicos para negócios que querem vender com mais
                percepção de valor.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/+5511917123701"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition hover:bg-white hover:text-black"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>

              <a
                href="https://instagram.com/velaris_studioo"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition hover:bg-white hover:text-black"
              >
                <img src={Instagram} alt="Instagram" className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
