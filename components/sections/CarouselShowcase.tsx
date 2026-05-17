"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    url: "/inicio/carusel/slide1.png",
    title: "Colección Exclusiva",
    subtitle: "Fragancias de Diseñador & Perfumería Árabe",
  },
  {
    id: 2,
    url: "/inicio/carusel/slide2.png",
    title: "Esencia & Sofisticación",
    subtitle: "Encuentra tu sello olfativo personal",
  },
  {
    id: 3,
    url: "/inicio/carusel/slide3.png",
    title: "Envío Premium a Domicilio",
    subtitle: "Entregas exclusivas en toda la V Región",
  },
];

export function CarouselShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <section 
      id="destacados" 
      className="relative w-full overflow-hidden bg-[#080808] border-y border-[rgba(201,168,76,0.1)] py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-coast">
        {/* Header */}
        <div className="text-center mb-10" data-animate="fade-up">
          <p className="font-mono-dm text-[0.68rem] tracking-[0.45em] text-[#C9A84C] uppercase mb-3">
            GALERÍA DE FRAGANCIAS
          </p>
          <h2 className="font-playfair text-[2.2rem] text-[#F5F0E8] leading-tight mb-2">
            Nuestros Destacados
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto opacity-60" />
        </div>

        {/* Slider Container */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden border border-[rgba(201,168,76,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Slides */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex flex-col justify-end p-8 md:p-16"
            >
              {/* Background Image with fallback */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url('${slides[currentIndex].url}')`,
                  backgroundPosition: "center",
                }}
              />
              
              {/* Gold/Black overlay for luxurious depth and legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent opacity-90" />
              
              {/* Slide Content */}
              <div className="relative z-10 max-w-xl">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-mono-dm text-[0.65rem] tracking-[0.35em] text-[#C9A84C] uppercase mb-3 block"
                >
                  Coast Parfum Experience
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-playfair text-[1.8rem] md:text-[2.6rem] text-[#F5F0E8] leading-tight mb-3 font-bold"
                >
                  {slides[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-cormorant italic text-lg md:text-xl text-[#C8BFB0]"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[rgba(201,168,76,0.3)] bg-[#080808]/80 text-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#080808] hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[rgba(201,168,76,0.3)] bg-[#080808]/80 text-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#080808] hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Indicators & Autoplay Progress Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? "w-6 bg-[#C9A84C]" : "w-1.5 bg-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.6)]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Tiny bottom progress bar line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[rgba(201,168,76,0.1)] z-20">
            <motion.div
              key={currentIndex}
              initial={{ scaleX: 0 }}
              animate={isHovered ? { scaleX: 0 } : { scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-[#C9A84C] origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
