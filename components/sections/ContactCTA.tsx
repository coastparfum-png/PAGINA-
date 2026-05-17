"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

interface Star {
  width: number;
  height: number;
  left: string;
  top: string;
  opacity: number;
  duration: number;
  delay: number;
  minOp: number;
  maxOp: number;
}

const CoastLogoLarge = () => (
  <svg width="70" height="70" viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="55" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.08)" />
    <circle cx="60" cy="60" r="46" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
    <path d="M30 82 Q40 76 50 82 Q60 88 70 82 Q80 76 90 82" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeOpacity="0.7" />
    <path d="M35 88 Q45 83 55 88 Q65 93 75 88 Q82 83 88 88" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeOpacity="0.4" />
    <path d="M55 38 Q36 38 32 60 Q32 82 55 82" stroke="#C9A84C" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M58 38 L58 78" stroke="#C9A84C" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M58 38 Q82 38 82 54 Q82 70 58 70" stroke="#C9A84C" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

export function ContactCTA() {
  const t = useTranslations("contact");
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 60 }).map(() => {
      const minOp = Math.random() * 0.2 + 0.05;
      const maxOp = Math.random() * 0.4 + 0.1;
      return {
        width: Math.random() * 2 + 0.5,
        height: Math.random() * 2 + 0.5,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: minOp,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
        minOp,
        maxOp,
      };
    });
    setStars(generated);
  }, []);


  return (
    <section
      id="contacto"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080808 0%, #1a0d00 50%, #080808 100%)",
      }}
    >
      {/* Tiny gold stars bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#C9A84C]"
            style={{
              width: star.width,
              height: star.height,
              left: star.left,
              top: star.top,
              opacity: star.minOp,
            }}
            animate={{
              opacity: [star.minOp, star.maxOp, star.minOp],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>


      <div className="container-coast relative z-10 text-center">
        {/* Logo with slow spin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <CoastLogoLarge />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair mb-4 leading-tight"
        >
          <span className="block text-4xl md:text-5xl text-[#F5F0E8]">{t("title1")}</span>
          <span className="block text-4xl md:text-5xl font-playfair italic text-gradient-gold mt-1">
            {t("title2")}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-dm text-[0.92rem] text-[#C8BFB0] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            {/* Pulse outline */}
            <motion.div
              className="absolute inset-0 rounded bg-[#25D366] opacity-30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.button
              onClick={() => window.open(buildWhatsAppLink(), "_blank")}
              whileHover={{ scale: 1.04, filter: "brightness(1.1)", boxShadow: "0 12px 40px rgba(37,211,102,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 flex items-center gap-3.5 bg-[#25D366] text-white font-dm font-bold text-[0.88rem] tracking-[0.2em] uppercase px-14 py-5 rounded cursor-pointer transition-all duration-200"
              style={{ boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
              </svg>
              {t("cta")}
            </motion.button>
          </div>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6 text-[0.8rem] font-dm text-[#C8BFB0]"
        >
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            coastparfum@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @coast.parfum
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Concón, V Región
          </span>
        </motion.div>

        {/* Hours */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
          className="font-mono-dm text-[0.72rem] tracking-[0.2em] text-[#C9A84C] opacity-70"
        >
          {t("hours")}
        </motion.p>
      </div>
    </section>
  );
}
