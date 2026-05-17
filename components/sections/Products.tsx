"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

type GenderFilter = "all" | "female" | "male" | "unisex";

export function Products() {
  const t = useTranslations("products");
  const [filter, setFilter] = useState<GenderFilter>("all");

  const filtered = products.filter(
    (p) => filter === "all" || p.gender === filter
  );

  const filters: { key: GenderFilter; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "female", label: t("filterFemale") },
    { key: "male", label: t("filterMale") },
    { key: "unisex", label: t("filterUnisex") },
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
    <section id="productos" className="section-padding bg-[#080808]">
      <div className="container-coast">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={
            <>
              <span className="text-[#F5F0E8]">{t("title1")} </span>
              <span className="font-cormorant italic text-gradient-gold">
                {t("title2")}
              </span>
            </>
          }
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => setFilter(key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`font-dm text-[0.75rem] tracking-wider uppercase px-6 py-2.5 rounded-full border transition-all duration-250 cursor-pointer ${
                filter === key
                  ? "bg-[#C9A84C] text-[#080808] border-[#C9A84C] font-bold"
                  : "border-[rgba(201,168,76,0.35)] text-[#C8BFB0] hover:border-[rgba(201,168,76,0.65)] hover:text-[#E8C96A]"
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProductCard
                  product={product}
                  t={cardTranslations}
                  index={i}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
