import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Wand2,
  Image,
  MessageCircle,
  Star,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navItems = [
    { icon: Home, label: "Início", href: "#inicio", id: "inicio" },
    {
      icon: Star,
      label: "Diagnóstico",
      href: "#diagnostico",
      id: "diagnostico",
    },
    { icon: Wand2, label: "Processo", href: "#processo", id: "processo" },
    { icon: Image, label: "Galeria", href: "#galeria", id: "galeria" },
    { icon: Briefcase, label: "Projetos", href: "#projetos", id: "projetos" },
  ];

  function handleNavigate(event, href) {
    event.preventDefault();

    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) return;

    setMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-35% 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center rounded-full border border-white/10 bg-white/[0.045] px-2 py-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <nav className="flex flex-col items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavigate(event, item.href)}
                  whileHover={{ y: -1, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`group relative grid h-11 w-11 place-items-center rounded-full transition ${
                    isActive
                      ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.18)]"
                      : "text-white/45 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />

                  <span className="pointer-events-none absolute left-14 rounded-full border border-white/10 bg-[#111118] px-3 py-1.5 text-xs font-medium text-white/70 opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </nav>

          <div className="my-4 h-px w-7 bg-white/10" />

          <div className="flex flex-col items-center gap-2">
            <motion.a
              href="#contato"
              onClick={(event) => handleNavigate(event, "#contato")}
              whileHover={{ y: -1, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.06] text-white/55 transition hover:bg-white hover:text-black"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
            </motion.a>

            <motion.a
              href="#instagram"
              onClick={(event) => handleNavigate(event, "#instagram")}
              whileHover={{ y: -1, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.06] text-white/55 transition hover:bg-white hover:text-black"
            >
              
            </motion.a>
          </div>
        </div>
      </aside>

      {/* Mobile Floating Header */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#inicio"
            onClick={(event) => handleNavigate(event, "#inicio")}
            className="flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
              <span className="text-sm font-black tracking-[-0.08em]">DS</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Deutschh Studio
            </span>
          </a>

          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition hover:bg-white/[0.09] hover:text-white"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Floating Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute right-4 top-[72px] w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111118]/88 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            >
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleNavigate(event, item.href)}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-white text-black"
                          : "text-white/62 hover:bg-white/[0.07] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          className={`h-4 w-4 transition ${
                            isActive
                              ? "text-black"
                              : "text-white/38 group-hover:text-white/70"
                          }`}
                        />
                        {item.label}
                      </span>

                      <ArrowRight
                        className={`h-4 w-4 transition ${
                          isActive
                            ? "opacity-70"
                            : "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-60"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              <div className="my-2 h-px bg-white/10" />

              <a
                href="#contato"
                onClick={(event) => handleNavigate(event, "#contato")}
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Solicitar análise gratuita
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
