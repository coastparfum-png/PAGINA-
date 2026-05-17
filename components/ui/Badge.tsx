"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "female" | "male" | "unisex" | "gold" | "limited" | "featured";
  className?: string;
}

const variants = {
  female:   "bg-rose-950/80 text-rose-300 border border-rose-800/50",
  male:     "bg-blue-950/80 text-blue-300 border border-blue-800/50",
  unisex:   "bg-indigo-950/80 text-indigo-300 border border-indigo-800/50",
  gold:     "bg-[rgba(201,168,76,0.15)] text-[#E8C96A] border border-[rgba(201,168,76,0.4)]",
  limited:  "bg-[rgba(201,168,76,0.2)] text-[#F0DFA0] border border-[#C9A84C]",
  featured: "bg-[rgba(201,168,76,0.1)] text-[#C9A84C] border border-[rgba(201,168,76,0.3)]",
};

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-2.5 py-1 rounded-full
        font-dm font-bold text-[0.62rem] tracking-wider uppercase
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
