"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const trustItems = [
  {
    key: "original",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: "premium",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    key: "shipping",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    key: "attention",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    key: "secure",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section
      className="relative py-8 overflow-hidden"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Desktop: grid */}
      <div className="container-coast hidden md:block">
        <div className="flex items-center justify-center gap-0">
          {trustItems.map(({ key, icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 px-8 py-2"
            >
              {icon}
              <span className="font-dm text-[0.75rem] tracking-wider text-[#C8BFB0] whitespace-nowrap uppercase">
                {t(key)}
              </span>
              {i < trustItems.length - 1 && (
                <div className="ml-8 h-5 w-px bg-[rgba(201,168,76,0.3)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-marquee gap-0 w-max">
          {[...trustItems, ...trustItems].map(({ key, icon }, i) => (
            <div key={i} className="flex items-center gap-3 px-7 py-1">
              {icon}
              <span className="font-dm text-[0.72rem] tracking-wider text-[#C8BFB0] whitespace-nowrap uppercase">
                {t(key)}
              </span>
              <div className="ml-7 h-4 w-px bg-[rgba(201,168,76,0.3)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
