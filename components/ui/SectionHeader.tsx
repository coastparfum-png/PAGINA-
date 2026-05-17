"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  showWaves?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  showWaves = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-dm text-[0.7rem] tracking-[0.4em] text-[#C9A84C] uppercase mb-4"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-playfair text-4xl md:text-5xl leading-tight"
      >
        {title}
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-cormorant italic text-lg text-[#C8BFB0] mt-4"
        >
          {subtitle}
        </motion.p>
      )}

      {showWaves && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`mt-6 ${centered ? "flex justify-center" : ""}`}
        >
          <svg width="180" height="16" viewBox="0 0 180 16" fill="none">
            <path
              d="M0 8 Q22 0 45 8 Q67 16 90 8 Q112 0 135 8 Q157 16 180 8"
              stroke="#C9A84C"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.6"
            />
            <circle cx="90" cy="8" r="3" fill="#C9A84C" fillOpacity="0.8" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
