"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Product } from "@/lib/products";
import { Badge } from "@/components/ui/Badge";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  t: {
    top: string;
    heart: string;
    base: string;
    notes: string;
    buy: string;
    genderFemale: string;
    genderMale: string;
    genderUnisex: string;
    limitedLabel: string;
    featuredLabel: string;
  };
  index: number;
}

function PerfumeBottleSVG({
  gender,
  accent,
}: {
  gender: "female" | "male" | "unisex";
  accent: string;
}) {
  if (gender === "female") {
    return (
      <svg width="80" height="130" viewBox="0 0 80 130" fill="none">
        <defs>
          <linearGradient id={`fg-${accent}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`fh-${accent}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.25" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Cap */}
        <rect x="28" y="0" width="24" height="14" rx="4" fill={accent} opacity="0.9" />
        <rect x="32" y="14" width="16" height="6" rx="2" fill={accent} opacity="0.7" />
        {/* Neck */}
        <rect x="33" y="20" width="14" height="12" rx="2" fill={accent} opacity="0.6" />
        {/* Body - curved */}
        <path
          d="M18 42 Q10 50 10 70 Q10 105 40 108 Q70 105 70 70 Q70 50 62 42 Z"
          fill={`url(#fg-${accent})`}
        />
        {/* Highlight */}
        <path
          d="M18 42 Q10 50 10 70 Q10 105 40 108 Q70 105 70 70 Q70 50 62 42 Z"
          fill={`url(#fh-${accent})`}
        />
        {/* Label */}
        <rect x="22" y="62" width="36" height="28" rx="3" fill="white" opacity="0.12" />
      </svg>
    );
  }

  if (gender === "male") {
    return (
      <svg width="75" height="130" viewBox="0 0 75 130" fill="none">
        <defs>
          <linearGradient id={`mg-${accent}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.85" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`mh-${accent}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Cap */}
        <rect x="24" y="0" width="27" height="12" rx="2" fill={accent} opacity="0.95" />
        <rect x="28" y="12" width="19" height="8" rx="1" fill={accent} opacity="0.75" />
        {/* Body - rectangular */}
        <rect x="12" y="20" width="51" height="88" rx="4" fill={`url(#mg-${accent})`} />
        <rect x="12" y="20" width="51" height="88" rx="4" fill={`url(#mh-${accent})`} />
        {/* Label */}
        <rect x="18" y="55" width="39" height="32" rx="3" fill="white" opacity="0.1" />
        {/* Ridges */}
        <rect x="12" y="96" width="51" height="8" rx="2" fill={accent} opacity="0.5" />
      </svg>
    );
  }

  // Unisex - square/modern
  return (
    <svg width="85" height="125" viewBox="0 0 85 125" fill="none">
      <defs>
        <linearGradient id={`ug-${accent}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`uh-${accent}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="60%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Cap - modern flat */}
      <rect x="26" y="0" width="33" height="10" rx="3" fill={accent} opacity="0.9" />
      <rect x="32" y="10" width="21" height="8" rx="1.5" fill={accent} opacity="0.7" />
      {/* Body - square with slight radius */}
      <rect x="8" y="18" width="69" height="92" rx="6" fill={`url(#ug-${accent})`} />
      <rect x="8" y="18" width="69" height="92" rx="6" fill={`url(#uh-${accent})`} />
      {/* Label */}
      <rect x="16" y="50" width="53" height="38" rx="4" fill="white" opacity="0.1" />
      {/* Bottom */}
      <rect x="8" y="102" width="69" height="8" rx="3" fill={accent} opacity="0.4" />
    </svg>
  );
}

export function ProductCard({ product, t, index }: ProductCardProps) {
  const [notesOpen, setNotesOpen] = useState(false);

  const genderLabel =
    product.gender === "female"
      ? t.genderFemale
      : product.gender === "male"
      ? t.genderMale
      : t.genderUnisex;

  const genderBadge =
    product.gender === "female"
      ? "female"
      : product.gender === "male"
      ? "male"
      : "unisex";

  const handleBuy = () => {
    const link = buildWhatsAppLink(
      product.name,
      product.size_ml,
      product.type,
      product.price
    );
    window.open(link, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="product-card glass-card rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Visual Zone */}
      <div
        className={`relative bg-gradient-to-br ${product.gradient} h-56 flex items-center justify-center overflow-hidden`}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 50% 80%, ${product.accent}40 0%, transparent 70%)`,
          }}
        />

        {/* Bottle */}
        <div className="bottle-float relative z-10 drop-shadow-2xl">
          <PerfumeBottleSVG gender={product.gender} accent={product.accent} />
        </div>

        {/* Gender badge top-right */}
        <div className="absolute top-3 right-3">
          <Badge variant={genderBadge}>{genderLabel}</Badge>
        </div>

        {/* Limited badge top-left */}
        {product.limited && (
          <div className="absolute top-3 left-3">
            <Badge variant="limited">✦ {t.limitedLabel}</Badge>
          </div>
        )}

        {/* Featured star */}
        {product.featured && !product.limited && (
          <div className="absolute top-3 left-3">
            <span className="text-[#C9A84C] text-sm opacity-80">✦</span>
          </div>
        )}
      </div>

      {/* Info Zone */}
      <div className="flex flex-col flex-1 p-5">
        <p className="font-cormorant italic text-[0.78rem] tracking-[0.15em] text-[#C9A84C] mb-1">
          {product.brand}
        </p>
        <h3 className="font-playfair font-bold text-[1.1rem] text-[#F5F0E8] leading-tight mb-2">
          {product.name}
        </h3>
        <p className="font-dm text-[0.78rem] text-[#C8BFB0] leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Olfactive Notes Accordion */}
        <div className="mb-4">
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className="flex items-center gap-2 text-[0.72rem] font-dm font-medium text-[#C9A84C] tracking-wider uppercase transition-opacity hover:opacity-80"
          >
            {t.notes}
            <motion.span
              animate={{ rotate: notesOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>
          <div className={`notes-content ${notesOpen ? "open" : ""}`}>
            <div className="mt-3 space-y-2">
              {[
                { label: t.top, value: product.top_notes },
                { label: t.heart, value: product.heart_notes },
                { label: t.base, value: product.base_notes },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2 items-start">
                  <span className="font-mono-dm text-[0.62rem] text-[#C9A84C] uppercase tracking-wider pt-0.5 whitespace-nowrap">
                    {label}
                  </span>
                  <span className="font-dm text-[0.72rem] text-[#C8BFB0] leading-relaxed">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price + Volume */}
        <div className="flex items-center justify-between mt-auto mb-4">
          <span className="font-playfair font-bold text-[1.35rem] text-[#E8C96A]">
            ${product.price.toLocaleString("es-CL")}
          </span>
          <span className="font-mono-dm text-[0.72rem] text-[#C8BFB0] border border-[rgba(201,168,76,0.25)] rounded-full px-3 py-1">
            {product.size_ml}ml · {product.type}
          </span>
        </div>

        {/* WhatsApp Button */}
        <motion.button
          onClick={handleBuy}
          whileHover={{ scale: 1.01, backgroundColor: "#E8C96A" }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.72rem] tracking-[0.22em] uppercase py-3.5 px-4 flex items-center justify-center gap-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
          </svg>
          {t.buy}
        </motion.button>
      </div>
    </motion.div>
  );
}
