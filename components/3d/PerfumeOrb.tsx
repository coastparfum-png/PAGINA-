"use client";

import { motion } from "framer-motion";

// A beautiful CSS-based gold orb — no WebGL needed, no white box risk
export default function PerfumeOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute pointer-events-none hidden lg:flex items-center justify-center"
      style={{
        top: 0,
        bottom: 0,
        left: "52%",
        right: 0,
      }}
    >
      {/* Outer glow ring */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Middle ring */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.25, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-[280px] h-[280px] rounded-full border"
        style={{ borderColor: "rgba(201,168,76,0.2)" }}
      />

      {/* Main gold sphere */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          scale: [1, 1.02, 1],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-[200px] h-[200px] rounded-full"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, #F0DFA0 0%, #E8C96A 18%, #C9A84C 45%, #8B6914 75%, #3d2a00 100%)
          `,
          boxShadow: `
            0 0 60px rgba(201,168,76,0.5),
            0 0 120px rgba(201,168,76,0.25),
            inset -20px -20px 40px rgba(0,0,0,0.4),
            inset 10px 10px 30px rgba(255,255,255,0.15)
          `,
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute top-[12%] left-[18%] w-[35%] h-[28%] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 100%)",
            filter: "blur(6px)",
            transform: "rotate(-30deg)",
          }}
        />
        {/* Secondary highlight */}
        <div
          className="absolute top-[55%] left-[60%] w-[15%] h-[12%] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 100%)",
            filter: "blur(4px)",
          }}
        />
      </motion.div>

      {/* Orbiting point light simulation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute w-[240px] h-[240px]"
        style={{ transformOrigin: "center" }}
      >
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#E8C96A",
            boxShadow: "0 0 20px 8px rgba(232,201,106,0.7)",
          }}
        />
      </motion.div>

      {/* Small decorative stars around the orb */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
          className="absolute text-[#C9A84C] text-xs font-bold"
          style={{
            transform: `rotate(${deg}deg) translateY(-130px) rotate(-${deg}deg)`,
          }}
        >
          ✦
        </motion.div>
      ))}
    </motion.div>
  );
}
