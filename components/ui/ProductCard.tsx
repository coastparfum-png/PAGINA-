"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  t: Record<string, string>;
  index: number;
}

export function ProductCard({ product, t, index }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const getGenderStyle = (gender: string) => {
    switch (gender) {
      case "female":
        return "bg-[#3d0a1a] text-[#f9a8c9] border-[#7f1d3f]";
      case "male":
        return "bg-[#0a0f2e] text-[#93c5fd] border-[#1e3a8a]";
      case "unisex":
        return "bg-[#0f0a2e] text-[#c4b5fd] border-[#4c1d95]";
      default:
        return "bg-gray-800 text-gray-300 border-gray-600";
    }
  };

  const getGenderLabel = (gender: string) => {
    switch (gender) {
      case "female":
        return t.genderFemale;
      case "male":
        return t.genderMale;
      case "unisex":
        return t.genderUnisex;
      default:
        return gender;
    }
  };

  return (
    <div
      data-animate="fade-up"
      className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:border-[var(--border-hover)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),_0_0_0_1px_rgba(201,168,76,0.15)] flex flex-col h-full"
    >
      {/* Image Zone */}
      <div 
        className="relative w-full h-[260px] overflow-hidden flex items-center justify-center shrink-0"
        style={{ background: product.gradient_class }}
      >
        {/* Badges */}
        {product.limited && (
          <div className="absolute top-4 left-4 z-20 bg-[#1a1000] text-[#C9A84C] border border-[#C9A84C] px-[6px] py-[2px] font-mono-dm text-[0.6rem] rounded">
            ✦ LTD EDITION
          </div>
        )}
        <div className={`absolute top-4 right-4 z-20 font-dm font-semibold text-[0.62rem] tracking-wider px-[9px] py-[3px] rounded-full border ${getGenderStyle(product.gender)}`}>
          {getGenderLabel(product.gender)}
        </div>

        {/* Product Image */}
        <div className="relative w-[280px] h-[260px] p-6 z-10 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={imgError ? product.imageFallback : product.imageUrl}
            alt={product.name}
            width={280}
            height={260}
            className="w-full h-full object-contain drop-shadow-2xl"
            onError={() => setImgError(true)}
          />
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10 pointer-events-none" />
      </div>

      {/* Info Zone */}
      <div className="p-[20px] flex flex-col grow">
        <div className="flex justify-between items-center">
          <span className="font-cormorant italic text-[0.8rem] text-[#C9A84C]">
            {product.brand}
          </span>
          <span className="font-mono-dm text-[0.68rem] text-[#888] bg-[#1a1a1a] px-[8px] py-[2px] rounded">
            {product.size_ml}ml · {product.fragrance_type}
          </span>
        </div>

        <h3 className="font-playfair font-bold text-[1.1rem] text-[#F5F0E8] mt-[6px] leading-[1.25]">
          {product.name}
        </h3>

        <p className="font-dm text-[0.78rem] text-[#9A9288] mt-[8px] line-clamp-2">
          {product.description}
        </p>

        {/* Notes Accordion */}
        <div className="mt-[12px]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="font-dm text-[0.72rem] text-[#C9A84C] hover:text-[#E8C96A] cursor-pointer flex items-center gap-1 transition-colors"
          >
            Ver notas olfativas {isOpen ? "▴" : "▾"}
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 pb-1 space-y-1.5 border-t border-[rgba(201,168,76,0.1)] mt-2">
                  <p className="font-dm text-[0.72rem] leading-tight">
                    <span className="text-[#C9A84C]">{t.top}:</span> <span className="text-[#9A9288]">{product.notes_top}</span>
                  </p>
                  <p className="font-dm text-[0.72rem] leading-tight">
                    <span className="text-[#C9A84C]">{t.heart}:</span> <span className="text-[#9A9288]">{product.notes_heart}</span>
                  </p>
                  <p className="font-dm text-[0.72rem] leading-tight">
                    <span className="text-[#C9A84C]">{t.base}:</span> <span className="text-[#9A9288]">{product.notes_base}</span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-auto pt-[14px] pb-[16px]">
          <p className="font-playfair font-bold text-[1.45rem] text-[#E8C96A]">
            ${product.price_clp.toLocaleString("es-CL")}
          </p>
        </div>
      </div>

      {/* Full-width CTA */}
      <button
        onClick={() => window.open(buildWhatsAppLink(product.name, product.size_ml, product.fragrance_type, product.price_clp), "_blank")}
        className="w-full bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.72rem] tracking-[0.22em] uppercase px-[16px] py-[13px] rounded-b-[10px] flex justify-center items-center gap-2 hover:bg-[#E8C96A] hover:scale-[1.005] active:scale-[0.998] transition-all cursor-pointer shrink-0 m-0 border-none"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
        </svg>
        CONSULTAR POR WHATSAPP
      </button>
    </div>
  );
}
