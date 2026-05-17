"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), { ssr: false });
const PerfumeOrb = dynamic(() => import("@/components/3d/PerfumeOrb"), { ssr: false });

const LetterAnim = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split("");
  return (
    <span className="inline-flex overflow-hidden">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.055,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export function Hero() {
  const t = useTranslations("hero");
  const [showScroll, setShowScroll] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExplore = () => {
    document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBuyNow = () => {
    window.open(buildWhatsAppLink(), "_blank");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #1a0d00 0%, #080808 65%)",
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Particle Field */}
      <div className="absolute inset-0 z-[1]">
        <ParticleField />
      </div>

      {/* Gold Orb — desktop only */}
      <div className="hidden lg:block absolute inset-0 z-[2]">
        <PerfumeOrb />
      </div>

      {/* SVG Wave Decorations */}
      <svg
        className="absolute top-0 right-0 opacity-[0.06] pointer-events-none z-[3]"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path d="M400 0 Q300 100 350 200 Q400 300 300 400" stroke="#C9A84C" strokeWidth="1" fill="none" />
        <path d="M400 50 Q280 150 340 250 Q400 340 280 400" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 opacity-[0.06] pointer-events-none z-[3]"
        width="350"
        height="350"
        viewBox="0 0 350 350"
        fill="none"
      >
        <path d="M0 350 Q100 250 50 150 Q0 50 100 0" stroke="#C9A84C" strokeWidth="1" fill="none" />
        <path d="M50 350 Q120 240 80 140 Q40 60 130 0" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Content */}
      <div className="container-coast relative z-[10] pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-mono-dm text-[0.68rem] tracking-[0.45em] text-[#C9A84C] uppercase mb-6"
          >
            {t("eyebrow")}
          </motion.p>

          {/* Main Title */}
          <h1 className="font-playfair font-black leading-[0.9] mb-4">
            <div
              className="text-gradient-gold"
              style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
            >
              <LetterAnim text={t("title1")} delay={0.5} />
            </div>
            <div
              className="text-gradient-gold"
              style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
            >
              <LetterAnim text={t("title2")} delay={0.8} />
            </div>
          </h1>

          {/* Ornamental separator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              className="h-px bg-[#C9A84C] opacity-60"
            />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#C9A84C" opacity="0.8">
              <polygon points="5,0 10,5 5,10 0,5" />
            </svg>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              className="h-px bg-[#C9A84C] opacity-60"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="font-cormorant italic text-xl md:text-2xl text-[#C8BFB0] mb-6"
          >
            {t("subtitle")}
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            {([t("badge1"), t("badge2"), t("badge3")] as string[]).map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                className="font-dm text-[0.68rem] tracking-wider text-[#C8BFB0] border border-[rgba(201,168,76,0.3)] rounded-full px-4 py-1.5"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={handleExplore}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201,168,76,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.8rem] tracking-[0.25em] uppercase px-10 py-4 cursor-pointer transition-all duration-300"
            >
              {t("cta1")}
            </motion.button>

            <motion.button
              onClick={handleBuyNow}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(201,168,76,0.12)",
                boxShadow: "0 0 25px rgba(201,168,76,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2.5 border border-[#C9A84C] text-[#C9A84C] font-dm font-medium text-[0.8rem] tracking-[0.2em] uppercase px-8 py-4 cursor-pointer transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
              </svg>
              {t("cta2")}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-2"
      >
        <p className="font-mono-dm text-[0.58rem] tracking-[0.45em] text-[#C9A84C] opacity-60 uppercase">
          {t("scroll")}
        </p>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent animate-bounce-slow" />
        <motion.svg
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeOpacity="0.6"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
