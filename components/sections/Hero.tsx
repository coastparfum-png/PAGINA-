"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { products } from "@/lib/products";

export function Hero() {
  const t = useTranslations("hero");
  const [imgError, setImgError] = useState(false);
  
  // We'll use CK One Shock for the featured hero image as it has a nice shape
  const featuredProduct = products.find(p => p.slug === "ck-one-shock") || products[0];

  const handleExplore = () => {
    document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBuyNow = () => {
    window.open(buildWhatsAppLink(), "_blank");
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background with GSAP parallax hook target */}
      <div 
        id="hero-bg-parallax"
        className="absolute inset-0 z-0 h-[120%]"
        style={{
          background: "radial-gradient(ellipse at 30% 60%, #2D1B00 0%, #0A0500 40%, #080808 100%)",
          top: "-10%"
        }}
      >
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/20 to-[#080808]" />
      </div>

      <div className="container-coast relative z-10 w-full flex flex-col lg:flex-row items-center justify-between pt-24 pb-16 h-full">
        
        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col z-20">
          
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono-dm text-[0.65rem] tracking-[0.5em] text-[#C9A84C] uppercase mb-6"
          >
            V REGIÓN DE VALPARAÍSO · CHILE
          </motion.p>

          {/* Mask Reveal Title */}
          <h1 className="font-playfair font-black leading-[0.95] mb-5">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-gradient-gold pb-2"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                COAST
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-gradient-gold"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                PARFUM
              </motion.div>
            </div>
          </h1>

          {/* Animated Divider */}
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="h-px w-[100px] bg-[#C9A84C] origin-left opacity-70"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="#C9A84C">
                <polygon points="5,0 10,5 5,10 0,5" />
              </svg>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-cormorant italic text-xl md:text-2xl text-[#C8BFB0] mb-8"
          >
            Perfumes diseñador y árabes 100% originales
          </motion.p>

          {/* Mini Stats */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["100% Originales", "100+ Marcas", "V Región"].map((stat, i) => (
              <motion.span
                key={stat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                className="font-dm text-[0.72rem] text-[#C8BFB0] border border-[rgba(201,168,76,0.2)] rounded px-[14px] py-[5px] flex items-center gap-2"
              >
                <span className="text-[#C9A84C] text-[10px]">✦</span> {stat}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              onClick={handleExplore}
              className="bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.78rem] tracking-[0.25em] uppercase px-[36px] py-[15px] hover:bg-[#E8C96A] transition-colors cursor-pointer"
              style={{ boxShadow: "0 8px 30px rgba(201,168,76,0.15)" }}
            >
              VER COLECCIÓN
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              onClick={handleBuyNow}
              className="border border-[#C9A84C] text-[#C9A84C] bg-transparent font-dm font-bold text-[0.78rem] tracking-[0.25em] uppercase px-[36px] py-[15px] hover:bg-[rgba(201,168,76,0.08)] transition-all cursor-pointer shadow-[0_0_15px_rgba(201,168,76,0)] hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
            >
              COMPRAR POR WHATSAPP
            </motion.button>
          </div>
        </div>

        {/* Right Content - Floating Product Image */}
        <motion.div 
          className="w-full lg:w-[40%] h-[300px] lg:h-[600px] mt-12 lg:mt-0 relative flex justify-center lg:justify-end items-center z-10"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [-12, 0, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[80%] h-full max-h-[500px]"
            style={{ filter: "drop-shadow(0 0 40px rgba(201,168,76,0.2))" }}
          >
            <Image
              src={imgError ? featuredProduct.imageFallback : featuredProduct.imageUrl}
              alt={featuredProduct.name}
              fill
              className="object-contain object-center lg:object-right"
              priority
              onError={() => setImgError(true)}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-opacity duration-500"
      >
        <p className="font-mono-dm text-[0.6rem] tracking-[0.4em] text-[#C9A84C] opacity-70 uppercase">
          DESPLAZAR
        </p>
        <div className="w-px h-10 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-[#C9A84C]"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
