"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LanguageToggle } from "@/components/LanguageToggle";

const CoastLogo = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="55" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.08)" />
    {/* Decorative inner circle */}
    <circle cx="60" cy="60" r="46" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
    {/* Wave decorations bottom */}
    <path d="M30 82 Q40 76 50 82 Q60 88 70 82 Q80 76 90 82" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeOpacity="0.7" />
    <path d="M35 88 Q45 83 55 88 Q65 93 75 88 Q82 83 88 88" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeOpacity="0.4" />
    {/* C letter */}
    <path
      d="M55 38 Q36 38 32 60 Q32 82 55 82"
      stroke="#C9A84C"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
    />
    {/* P letter */}
    <path
      d="M58 38 L58 78"
      stroke="#C9A84C"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M58 38 Q82 38 82 54 Q82 70 58 70"
      stroke="#C9A84C"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const navLinks = [
  { href: "#productos", labelKey: "perfumes" },
  { href: "#nosotros", labelKey: "about" },
  { href: "#envios", labelKey: "shipping" },
  { href: "#contacto", labelKey: "contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-400"
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="container-coast">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                <CoastLogo size={38} />
              </motion.div>
              <div className="hidden sm:block">
                <p className="font-playfair font-bold text-[#C9A84C] text-sm tracking-[0.25em] leading-none">
                  COAST
                </p>
                <p className="font-mono-dm text-[#C8BFB0] text-[0.55rem] tracking-[0.35em] leading-none mt-0.5">
                  PARFUM
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, labelKey }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  onClick={() => handleNavClick(href)}
                  className="relative group font-dm text-[0.78rem] tracking-[0.18em] uppercase text-[#C8BFB0] hover:text-[#E8C96A] transition-colors duration-300 cursor-pointer"
                >
                  {t(labelKey)}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-[#C9A84C] w-0 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <LanguageToggle />

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => window.open(buildWhatsAppLink(), "_blank")}
                className="hidden md:flex items-center gap-2 bg-[#25D366] text-white font-dm font-bold text-[0.7rem] tracking-wider px-4 py-2 rounded-full hover:brightness-110 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.04 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                </svg>
                WhatsApp
              </motion.button>

              {/* Mobile WhatsApp */}
              <motion.button
                onClick={() => window.open(buildWhatsAppLink(), "_blank")}
                className="md:hidden w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                </svg>
              </motion.button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center cursor-pointer"
                aria-label="Menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 bg-[#C9A84C]"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block w-5 h-0.5 bg-[#C9A84C]"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 bg-[#C9A84C]"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[98] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[99] w-72 bg-[#080808] border-l border-[rgba(201,168,76,0.3)] flex flex-col pt-24 pb-8 px-8 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map(({ href, labelKey }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNavClick(href)}
                    className="text-left font-playfair text-2xl text-[#F5F0E8] hover:text-[#E8C96A] transition-colors cursor-pointer"
                  >
                    {t(labelKey)}
                  </motion.button>
                ))}
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => { window.open(buildWhatsAppLink(), "_blank"); setMobileOpen(false); }}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-dm font-bold text-sm py-3.5 rounded-xl cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                  </svg>
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
