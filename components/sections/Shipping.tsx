"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function Shipping() {
  const t = useTranslations("shipping");

  const handleWhatsApp = (message: string) => {
    const link = `https://wa.me/56964788533?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return (
    <section id="envios" className="section-padding bg-[#080808]">
      <div className="container-coast">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={
            <span className="text-[#F5F0E8]">{t("title")}</span>
          }
          subtitle={t("subtitle")}
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Delivery Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ borderColor: "rgba(201,168,76,0.5)" }}
            className="glass-card rounded-2xl p-8 transition-all duration-300"
          >
            {/* Animated truck icon */}
            <div className="mb-6 group">
              <motion.svg
                width="52" height="52" viewBox="0 0 24 24" fill="none"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <rect x="1" y="3" width="15" height="13" stroke="#C9A84C" strokeWidth="1.5" fill="none" rx="1" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
                <motion.circle
                  cx="5.5" cy="18.5" r="2.5"
                  stroke="#C9A84C" strokeWidth="1.5" fill="none"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{ originX: "5.5px", originY: "18.5px" }}
                />
                <motion.circle
                  cx="18.5" cy="18.5" r="2.5"
                  stroke="#C9A84C" strokeWidth="1.5" fill="none"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{ originX: "18.5px", originY: "18.5px" }}
                />
              </motion.svg>
            </div>

            <h3 className="font-playfair font-bold text-2xl text-[#F5F0E8] mb-3">
              {t("deliveryTitle")}
            </h3>
            <p className="font-dm text-[0.83rem] text-[#C8BFB0] leading-relaxed mb-6">
              {t("deliveryText")}
            </p>

            <ul className="space-y-3 mb-8">
              {(["check1", "check2", "check3", "check4"] as const).map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-dm text-[0.82rem] text-[#C8BFB0]">{t(key)}</span>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={() => handleWhatsApp("Hola Coast Parfum! 👋 Quiero cotizar el envío de mi pedido. ¿Cuál es el costo de envío a mi dirección?")}
              whileHover={{ scale: 1.02, backgroundColor: "#E8C96A" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.75rem] tracking-[0.22em] uppercase py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              {t("cta1")}
            </motion.button>
          </motion.div>

          {/* Pickup Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ borderColor: "rgba(201,168,76,0.5)" }}
            className="glass-card rounded-2xl p-8 transition-all duration-300"
          >
            {/* Animated pin */}
            <div className="mb-6 relative">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
                <circle cx="12" cy="10" r="3" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
              </svg>
              {/* Pulse ring */}
              <motion.div
                className="absolute top-5 left-5 w-6 h-6 rounded-full border border-[#C9A84C]"
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-playfair font-bold text-2xl text-[#F5F0E8]">
                {t("pickupTitle")}
              </h3>
              <span className="font-mono-dm text-[0.62rem] tracking-wider border border-[#C9A84C] text-[#C9A84C] px-3 py-1 rounded-full">
                {t("pickupBadge")}
              </span>
            </div>

            <p className="font-dm text-[0.83rem] text-[#C8BFB0] leading-relaxed mb-6">
              {t("pickupText")}
            </p>

            <ul className="space-y-3 mb-8">
              {(["pcheck1", "pcheck2", "pcheck3"] as const).map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-dm text-[0.82rem] text-[#C8BFB0]">{t(key)}</span>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={() => handleWhatsApp("Hola Coast Parfum! 👋 Quiero coordinar un retiro en Concón. ¿Cuándo tienen disponibilidad?")}
              whileHover={{ scale: 1.02, borderColor: "#E8C96A", color: "#E8C96A" }}
              whileTap={{ scale: 0.98 }}
              className="w-full border border-[#C9A84C] text-[#C9A84C] font-dm font-bold text-[0.75rem] tracking-[0.22em] uppercase py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              {t("cta2")}
            </motion.button>
          </motion.div>
        </div>

        {/* Note banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl px-6 py-4 flex items-start gap-3"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="font-dm text-[0.8rem] text-[#C8BFB0] leading-relaxed">
            {t("note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
