"use client";

import { useTranslations } from "next-intl";
import { Truck, MapPin, Info } from "lucide-react";

export function Shipping() {
  const t = useTranslations("shipping");

  const handleWhatsApp = (message: string) => {
    const link = `https://wa.me/56964788533?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return (
    <section id="envios" className="section-padding bg-[#080808]">
      <div className="container-coast">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <p className="font-mono-dm text-[0.68rem] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">
            LOGÍSTICA
          </p>
          <h2 className="font-playfair text-[2.4rem] text-[#F5F0E8] leading-tight mb-4">
            Envíos y Retiro
          </h2>
          <p className="font-dm text-[0.9rem] text-[#9A9288] max-w-lg mx-auto">
            Exclusivamente para la V Región de Valparaíso
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[1.5rem] mb-10">
          {/* Delivery Card */}
          <div
            data-animate="fade-up"
            className="glass-card rounded-[16px] p-8 transition-all duration-300 hover:border-[rgba(201,168,76,0.5)] flex flex-col"
          >
            <div className="mb-6">
              <Truck className="w-[36px] h-[36px] text-[#C9A84C]" strokeWidth={1.5} />
            </div>

            <h3 className="font-playfair font-bold text-[1.4rem] text-[#F5F0E8] mb-4">
              Envío a Domicilio
            </h3>
            <p className="font-dm text-[0.85rem] text-[#9A9288] leading-relaxed mb-6">
              Despachamos a toda la V Región de Valparaíso. El costo se coordina por WhatsApp según tu ubicación exacta.
            </p>

            <ul className="space-y-3 mb-8 grow">
              {["Valparaíso y Viña del Mar", "Concón y Reñaca", "Quilpué y Villa Alemana", "Olmué, Casablanca, Quillota", "Toda la región (consultar)"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#C9A84C] text-[0.7rem]">✦</span>
                  <span className="font-dm text-[0.82rem] text-[#C8BFB0]">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleWhatsApp("Hola Coast Parfum! 👋 Quiero cotizar el envío a mi domicilio.")}
              className="w-full bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.75rem] tracking-[0.22em] uppercase py-[15px] rounded border-none hover:bg-[#E8C96A] hover:scale-[1.02] transition-all cursor-pointer"
            >
              COTIZAR MI ENVÍO
            </button>
          </div>

          {/* Pickup Card */}
          <div
            data-animate="fade-up"
            className="glass-card rounded-[16px] p-8 transition-all duration-300 hover:border-[rgba(201,168,76,0.5)] flex flex-col"
          >
            <div className="mb-6 relative flex items-center justify-between">
              <MapPin className="w-[36px] h-[36px] text-[#C9A84C] animate-pulse" strokeWidth={1.5} />
              <span className="bg-[#102a1d] text-[#4ade80] border border-[#22c55e] font-mono-dm font-semibold text-[0.62rem] tracking-wider px-[8px] py-[3px] rounded-full">
                SIN COSTO
              </span>
            </div>

            <h3 className="font-playfair font-bold text-[1.4rem] text-[#F5F0E8] mb-4">
              Retiro en Concón
            </h3>

            <p className="font-dm text-[0.85rem] text-[#9A9288] leading-relaxed mb-6">
              Retira sin costo en Concón. Coordinamos el horario más cómodo para ti directamente por WhatsApp.
            </p>

            <ul className="space-y-3 mb-8 grow">
              {["Sin cargo adicional", "Horario a convenir", "Confirmar con anticipación"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#C9A84C] text-[0.7rem]">✦</span>
                  <span className="font-dm text-[0.82rem] text-[#C8BFB0]">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleWhatsApp("Hola Coast Parfum! 👋 Quiero coordinar un retiro en Concón.")}
              className="w-full border border-[#C9A84C] bg-transparent text-[#C9A84C] font-dm font-bold text-[0.75rem] tracking-[0.22em] uppercase py-[15px] rounded hover:bg-[rgba(201,168,76,0.08)] hover:shadow-[0_0_15px_rgba(201,168,76,0.2)] transition-all cursor-pointer"
            >
              COORDINAR RETIRO
            </button>
          </div>

          {/* Showcase Image Card */}
          <div
            data-animate="fade-up"
            className="relative rounded-[16px] overflow-hidden border border-[rgba(201,168,76,0.15)] transition-all duration-300 hover:border-[rgba(201,168,76,0.5)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] h-[400px] md:h-auto min-h-[350px] flex flex-col justify-end p-8 group md:col-span-2 lg:col-span-1"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('/luxury_delivery_package.png')` }}
            />
            {/* Dark/Gold gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85" />
            
            <div className="relative z-10">
              <span className="font-mono-dm text-[0.62rem] tracking-[0.3em] text-[#C9A84C] uppercase mb-2 block">
                Coast Parfum Experience
              </span>
              <h4 className="font-playfair text-[1.3rem] text-[#F5F0E8] leading-tight mb-2">
                Empaque de Lujo
              </h4>
              <p className="font-dm text-[0.78rem] text-[#9A9288] leading-relaxed">
                Cada perfume se entrega en nuestro empaque premium exclusivo, diseñado para preservar la sofisticación de tus fragancias de diseñador.
              </p>
            </div>
          </div>
        </div>

        {/* Note banner */}
        <div
          data-animate="fade-up"
          className="rounded-[10px] px-6 py-5 flex items-start sm:items-center gap-4 mx-auto max-w-4xl"
          style={{
            background: "#0F0A00",
            border: "1px solid #3d2a00",
          }}
        >
          <Info className="w-[20px] h-[20px] text-[#C9A84C] shrink-0 mt-1 sm:mt-0" strokeWidth={2} />
          <p className="font-dm text-[0.82rem] text-[#C9A84C] leading-relaxed">
            <span className="font-bold">⚠️ Atención:</span> Por el momento solo realizamos envíos dentro de la V Región de Valparaíso.
          </p>
        </div>
      </div>
    </section>
  );
}
