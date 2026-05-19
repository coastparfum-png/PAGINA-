"use client";

import { motion, Variants } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gold" | "white" | "dark";
  showText?: boolean;
  animated?: boolean;
}

export function Logo({
  size = "md",
  variant = "gold",
  showText = true,
  animated = false,
}: LogoProps) {
  const dimensions = {
    sm: { svg: 32, textScale: "scale-75 origin-left" },
    md: { svg: 48, textScale: "scale-100" },
    lg: { svg: 80, textScale: "scale-125 origin-left" },
    xl: { svg: 120, textScale: "scale-150 origin-top" },
  };

  const colors = {
    gold: "#C9A84C",
    white: "#FFFFFF",
    dark: "#080808",
  };

  const color = colors[variant];
  const { svg: svgSize, textScale } = dimensions[size];

  // Text animation
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`flex ${
        size === "xl" ? "flex-col items-center gap-6" : "items-center gap-4"
      }`}
    >
      <motion.div
        initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-full flex items-center justify-center border border-[#C9A84C]/30 bg-neutral-900"
        style={{ width: svgSize, height: svgSize }}
      >
        <img
          src="/logo.jfif"
          alt="Coast Parfum"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {showText && (
        <motion.div
          className={`${textScale} transition-transform`}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          variants={textVariants}
        >
          <div
            className={`font-playfair font-bold text-[1.1rem] leading-none tracking-[0.4em] ${
              variant === "white" ? "text-white" : "text-[#C9A84C]"
            }`}
          >
            COAST
          </div>
          <div
            className={`w-full h-px my-1 ${
              variant === "white" ? "bg-white/30" : "bg-[#C9A84C]/40"
            }`}
          />
          <div
            className={`font-playfair font-medium text-[0.65rem] leading-none tracking-[0.3em] pl-1 ${
              variant === "white" ? "text-white/80" : "text-[#C9A84C]"
            }`}
          >
            PARFUM
          </div>
        </motion.div>
      )}
    </div>
  );
}
