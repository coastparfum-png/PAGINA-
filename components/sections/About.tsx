"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-playfair font-bold text-4xl text-gradient-gold">
      {count}{suffix}
    </span>
  );
}

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titleKey: "value1title",
    textKey: "value1text",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    titleKey: "value2title",
    textKey: "value2text",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    titleKey: "value3title",
    textKey: "value3text",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    titleKey: "value4title",
    textKey: "value4text",
  },
];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="nosotros" className="section-padding relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* BG waves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M0 400 Q180 300 360 400 Q540 500 720 400 Q900 300 1080 400 Q1260 500 1440 400 L1440 800 L0 800 Z" fill="#C9A84C" />
      </svg>

      <div className="container-coast relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono-dm text-[0.68rem] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">
              {t("eyebrow")}
            </p>

            <h2 className="mb-6 leading-tight">
              <span className="font-playfair text-4xl md:text-5xl text-[#F5F0E8] block">
                {t("title1")}
              </span>
              <span className="font-cormorant italic text-5xl md:text-6xl text-gradient-gold block">
                {t("title2")}
              </span>
            </h2>

            <p className="font-dm text-[0.9rem] text-[#C8BFB0] leading-relaxed mb-4">
              {t("p1")}
            </p>
            <p className="font-dm text-[0.9rem] text-[#C8BFB0] leading-relaxed mb-10">
              {t("p2")}
            </p>

            {/* Metrics */}
            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <AnimatedCounter target={100} suffix="%" />
                <p className="font-dm text-[0.72rem] text-[#C8BFB0] mt-1 tracking-wider">
                  {t("metric1label")}
                </p>
              </div>
              <div className="w-px bg-[rgba(201,168,76,0.2)]" />
              <div className="text-center">
                <span className="font-playfair font-bold text-4xl text-gradient-gold">6+</span>
                <p className="font-dm text-[0.72rem] text-[#C8BFB0] mt-1 tracking-wider">
                  {t("metric2label")}
                </p>
              </div>
              <div className="w-px bg-[rgba(201,168,76,0.2)]" />
              <div className="text-center">
                <span className="font-playfair font-bold text-3xl text-gradient-gold">V</span>
                <p className="font-dm text-[0.72rem] text-[#C8BFB0] mt-1 tracking-wider">
                  {t("metric3label")}
                </p>
              </div>
            </div>

            <motion.button
              onClick={() => window.open(buildWhatsAppLink(), "_blank")}
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(201,168,76,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="border border-[#C9A84C] text-[#C9A84C] font-dm font-medium text-[0.8rem] tracking-wider px-8 py-3.5 hover:bg-[rgba(201,168,76,0.08)] transition-all duration-200 cursor-pointer"
            >
              {t("cta")}
            </motion.button>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map(({ icon, titleKey, textKey }, i) => (
              <motion.div
                key={titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{
                  borderColor: "rgba(201,168,76,0.6)",
                  boxShadow: "0 8px 30px rgba(201,168,76,0.1)",
                }}
                className="glass-card rounded-2xl p-5 transition-all duration-300"
              >
                <div className="mb-3">{icon}</div>
                <h4 className="font-dm font-bold text-[0.85rem] text-[#F5F0E8] mb-1.5">
                  {t(titleKey)}
                </h4>
                <p className="font-dm text-[0.72rem] text-[#C8BFB0] leading-relaxed">
                  {t(textKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
