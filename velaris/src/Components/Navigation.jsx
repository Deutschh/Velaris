import React, { useEffect, useRef, useState } from "react";
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
  ShieldCheck,
} from "lucide-react";
import Logo from "../assets/Logo.svg";
import InstagramLogo from "../assets/Previews/Instagram.svg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isPastHome, setIsPastHome] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navItems = [
    { icon: Home, label: "Início", href: "#inicio", id: "inicio" },
    {
      icon: Star,
      label: "Diagnóstico",
      href: "#diagnostico",
      id: "diagnostico",
    },
    { icon: Wand2, label: "Solução", href: "#solucao", id: "solucao" },
    { icon: Image, label: "Prova", href: "#galeria", id: "galeria" },
    { icon: Briefcase, label: "Processo", href: "#proce", id: "proce" },
    {
      icon: ShieldCheck,
      label: "Confiança",
      href: "#confianca",
      id: "confianca",
    },
    {
      icon: MessageCircle,
      label: "Contato",
      href: "#contato",
      id: "contato",
    },
  ];

  const shouldHideSidebar = !isPastHome;
  const isContactActive = activeSection === "contato";

  function handleNavigate(event, href) {
    event.preventDefault();

    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);
    setMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Atualiza seção ativa com base no centro da tela
  useEffect(() => {
    const sectionIds = [
      ...navItems.map((item) => item.id),
      "contato",
      "instagram",
    ];

    function updateActiveSection() {
      const viewportCenter = window.innerHeight / 2;

      let currentSection = "inicio";
      let smallestDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        const sectionIsVisible =
          rect.top <= window.innerHeight * 0.65 &&
          rect.bottom >= window.innerHeight * 0.35;

        if (!sectionIsVisible) return;

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  // Controla se já saiu da Home para mostrar a sidebar desktop
  useEffect(() => {
    function handleHomeVisibility() {
      const home = document.getElementById("inicio");

      if (!home) {
        setIsPastHome(window.scrollY > 120);
        return;
      }

      const homeBottom = home.offsetTop + home.offsetHeight;
      const triggerPoint = homeBottom - window.innerHeight * 0.35;

      setIsPastHome(window.scrollY > triggerPoint);
    }

    handleHomeVisibility();

    window.addEventListener("scroll", handleHomeVisibility, { passive: true });
    window.addEventListener("resize", handleHomeVisibility);

    return () => {
      window.removeEventListener("scroll", handleHomeVisibility);
      window.removeEventListener("resize", handleHomeVisibility);
    };
  }, []);

  // Fecha menu ao clicar fora ou apertar ESC
  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuOpen) return;

      const clickedInsideMenu = menuRef.current?.contains(event.target);
      const clickedMenuButton = menuButtonRef.current?.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 transition duration-500 lg:block ${
          shouldHideSidebar
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100"
        }`}
      >
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
              href="https://instagram.com/seuusuario"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1, scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] shadow-[0_12px_35px_rgba(214,41,118,0.35)] transition"
            >
              <span className="absolute inset-0 bg-white/0 transition group-hover:bg-white/10" />

              <img
                src={InstagramLogo}
                alt="Instagram"
                className="relative z-10 h-[20px] w-[20px]"
              />

              <span className="pointer-events-none absolute left-14 rounded-full border border-white/10 bg-[#111118] px-3 py-1.5 text-xs font-medium text-white/70 opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100">
                Instagram
              </span>
            </motion.a>
          </div>
        </div>
      </aside>

      {/* Mobile Floating Header */}
      <motion.header
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 px-2 py-2 lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0A0A0F]/60 px-5 py-2 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <a
            href="#inicio"
            onClick={(event) => handleNavigate(event, "#inicio")}
            className="flex items-center gap-3"
          >
            <div className="h-14 w-14">
              <img src={Logo} alt="Logo Velaris" />
            </div>
          </a>

          <button
            ref={menuButtonRef}
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
              ref={menuRef}
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute right-4 top-[82px] w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111118]/88 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
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
                className={`group flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isContactActive
                    ? "bg-white text-black"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                Solicitar análise gratuita
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
