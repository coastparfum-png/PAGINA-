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

  // Circle path animation
  const circleVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Internal paths animation
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, delay: 0.3, ease: "easeOut" },
    },
  };

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
      <motion.svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 120 120"
        fill="none"
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      >
        {/* Outer Circle */}
        <motion.circle
          cx="60"
          cy="60"
          r="56"
          stroke={color}
          strokeWidth="1.5"
          fill="transparent"
          variants={circleVariants}
        />

        {/* Monogram C (left) */}
        <motion.path
          d="M 65 38 C 45 38 32 50 32 60 C 32 70 45 82 65 82"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
        />

        {/* Monogram P (right overlap) */}
        <motion.path
          d="M 45 38 L 45 85"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
        />
        <motion.path
          d="M 45 38 C 75 38 82 48 82 56 C 82 64 75 70 45 70"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
        />

        {/* Small Waves (bottom inside) */}
        <motion.path
          d="M 35 90 Q 45 84 55 90 T 75 90 T 85 90"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants}
          strokeOpacity={0.8}
        />
        <motion.path
          d="M 40 96 Q 50 90 60 96 T 80 96"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants}
          strokeOpacity={0.5}
        />
      </motion.svg>

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
