"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Gem, Truck, MessageCircle, Lock } from "lucide-react";

const trustItems = [
  { key: "100% Originales", icon: <ShieldCheck size={18} className="text-[#C9A84C]" strokeWidth={2} /> },
  { key: "Selección Premium", icon: <Gem size={18} className="text-[#C9A84C]" strokeWidth={2} /> },
  { key: "Envíos V Región", icon: <Truck size={18} className="text-[#C9A84C]" strokeWidth={2} /> },
  { key: "Atención WhatsApp", icon: <MessageCircle size={18} className="text-[#C9A84C]" strokeWidth={2} /> },
  { key: "Compra Segura", icon: <Lock size={18} className="text-[#C9A84C]" strokeWidth={2} /> },
];

export function TrustBar() {
  const t = useTranslations("trust"); // Keeping translation context if needed, though prompt gave literal strings

  return (
    <section
      className="relative py-[20px] overflow-hidden"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Desktop: grid */}
      <div className="container-coast hidden md:block">
        <div className="flex items-center justify-center gap-0">
          {trustItems.map(({ key, icon }, i) => (
            <div
              key={key}
              data-animate="fade-up"
              className="flex items-center gap-[12px] px-8"
            >
              {icon}
              <span className="font-dm text-[0.75rem] tracking-wider text-[#C8BFB0] whitespace-nowrap uppercase">
                {key}
              </span>
              {i < trustItems.length - 1 && (
                <div className="ml-8 h-[16px] w-px bg-[rgba(201,168,76,0.25)]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-marquee gap-0 w-max">
          {[...trustItems, ...trustItems].map(({ key, icon }, i) => (
            <div key={i} className="flex items-center gap-[12px] px-7 py-1">
              {icon}
              <span className="font-dm text-[0.75rem] tracking-wider text-[#C8BFB0] whitespace-nowrap uppercase">
                {key}
              </span>
              <div className="ml-7 h-[16px] w-px bg-[rgba(201,168,76,0.25)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
