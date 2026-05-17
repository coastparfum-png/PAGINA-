"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

type GenderFilter = "all" | "female" | "male" | "unisex";

export function Products() {
  const t = useTranslations("products");
  const [filter, setFilter] = useState<GenderFilter>("all");

  const filtered = products.filter(
    (p) => filter === "all" || p.gender === filter
  );

  const filters: { key: GenderFilter; label: string }[] = [
    { key: "all", label: "TODOS" },
    { key: "female", label: "PARA ELLA" },
    { key: "male", label: "PARA ÉL" },
    { key: "unisex", label: "UNISEX" },
  ];

  const cardTranslations = {
    top: t("top"),
    heart: t("heart"),
    base: t("base"),
    notes: t("notes"),
    buy: t("buy"),
    consult: t("consult"),
    genderFemale: t("genderFemale"),
    genderMale: t("genderMale"),
    genderUnisex: t("genderUnisex"),
    limitedLabel: t("limitedLabel"),
    featuredLabel: t("featuredLabel"),
  };

  return (
    <section id="productos" className="section-padding bg-[var(--bg)]">
      <div className="container-coast">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono-dm text-[0.68rem] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">
            NUESTRA COLECCIÓN
          </p>
          <h2 className="font-playfair text-[2.8rem] leading-tight mb-6">
            <span className="text-[#F5F0E8]">Fragancias que </span>
            <span className="font-cormorant italic text-gradient-gold">
              definen momentos
            </span>
          </h2>
          <svg className="mx-auto" width="60" height="20" viewBox="0 0 60 20" fill="none">
            <path d="M 0 10 Q 15 0 30 10 T 60 10" stroke="#C9A84C" strokeWidth="1" fill="none" strokeOpacity="0.6"/>
            <path d="M 10 16 Q 25 6 40 16 T 50 16" stroke="#C9A84C" strokeWidth="0.5" fill="none" strokeOpacity="0.4"/>
          </svg>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`font-dm text-[0.75rem] tracking-wider uppercase px-[24px] py-[10px] rounded-full border transition-all duration-250 cursor-pointer ${
                filter === key
                  ? "bg-[#C9A84C] text-[#080808] border-[#C9A84C] font-bold"
                  : "bg-transparent border-[rgba(201,168,76,0.35)] text-[#C8BFB0] hover:border-[rgba(201,168,76,0.65)] hover:text-[#E8C96A]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard
                  product={product}
                  t={cardTranslations}
                  index={i}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-cormorant italic text-xl text-[#C8BFB0]">
              No hay productos en esta categoría
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
