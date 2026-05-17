"use client";

import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Gem, Truck, HeartHandshake } from "lucide-react";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

const values = [
  {
    icon: <ShieldCheck className="w-[28px] h-[28px] text-[#C9A84C]" strokeWidth={1.5} />,
    titleKey: "Autenticidad Garantizada",
    textKey: "Todos nuestros perfumes son 100% originales, importados directamente de distribuidores autorizados.",
  },
  {
    icon: <Gem className="w-[28px] h-[28px] text-[#C9A84C]" strokeWidth={1.5} />,
    titleKey: "Curaduría Premium",
    textKey: "Seleccionamos solo las mejores fragancias de casas como Calvin Klein, Armani, D&G y Moschino.",
  },
  {
    icon: <Truck className="w-[28px] h-[28px] text-[#C9A84C]" strokeWidth={1.5} />,
    titleKey: "Envío a Toda la V Región",
    textKey: "Llegamos a toda la V Región: Valparaíso, Viña del Mar, Concón, Quilpué, Reñaca y más.",
  },
  {
    icon: <HeartHandshake className="w-[28px] h-[28px] text-[#C9A84C]" strokeWidth={1.5} />,
    titleKey: "Asesoría Personalizada",
    textKey: "Te ayudamos a encontrar la fragancia perfecta para ti o para regalar. Escríbenos sin compromiso.",
  },
];

export function About() {
  const t = useTranslations("about");
  useScrollAnimations();

  return (
    <section id="nosotros" className="section-padding relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* BG waves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M0 400 Q180 300 360 400 Q540 500 720 400 Q900 300 1080 400 Q1260 500 1440 400 L1440 800 L0 800 Z" fill="#C9A84C" />
      </svg>

      <div className="container-coast relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Text Column */}
          <div data-animate="fade-up">
            <p className="font-mono-dm text-[0.68rem] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">
              NUESTRA HISTORIA
            </p>

            <h2 className="mb-6 leading-tight">
              <span className="font-playfair text-[2.6rem] text-[#F5F0E8] block">
                Desde Concón,
              </span>
              <span className="font-cormorant italic text-[3rem] text-gradient-gold block">
                para la V Región
              </span>
            </h2>

            <p className="font-dm text-[0.9rem] text-[#9A9288] leading-relaxed mb-4">
              Somos Coast Parfum, tu perfumería de confianza nacida en Concón. Creemos que las mejores fragancias del mundo no deberían ser un lujo inalcanzable en Chile.
            </p>
            <p className="font-dm text-[0.9rem] text-[#9A9288] leading-relaxed mb-10">
              Cada perfume en nuestra colección es 100% original, seleccionado entre las mejores casas de diseñador europeas y las más exclusivas perfumerías árabes. Te los llevamos a domicilio en toda la V Región de Valparaíso.
            </p>

            {/* Metrics */}
            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <span className="font-playfair font-bold text-[3rem] text-gradient-gold">
                  <span data-counter="100">0</span>%
                </span>
                <p className="font-dm text-[0.78rem] text-[#9A9288] mt-1 tracking-wider">
                  Originales Garantizados
                </p>
              </div>
              <div className="w-px bg-[rgba(201,168,76,0.2)]" />
              <div className="text-center">
                <span className="font-playfair font-bold text-[3rem] text-gradient-gold">
                  <span data-counter="100">0</span>+
                </span>
                <p className="font-dm text-[0.78rem] text-[#9A9288] mt-1 tracking-wider">
                  Marcas de Lujo
                </p>
              </div>
              <div className="w-px bg-[rgba(201,168,76,0.2)]" />
              <div className="text-center">
                <span className="font-playfair font-bold text-[3rem] text-gradient-gold">V</span>
                <p className="font-dm text-[0.78rem] text-[#9A9288] mt-1 tracking-wider">
                  Región Valparaíso
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open(buildWhatsAppLink(), "_blank")}
              className="border border-[#C9A84C] text-[#C9A84C] bg-transparent font-dm font-medium text-[0.8rem] tracking-[0.1em] px-[32px] py-[14px] hover:bg-[rgba(201,168,76,0.08)] hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-300 cursor-pointer"
            >
              ESCRÍBENOS POR WHATSAPP →
            </button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon, titleKey, textKey }, i) => (
              <div
                key={titleKey}
                data-animate="fade-up"
                className="glass-card rounded-[12px] p-6 transition-all duration-300 hover:border-[rgba(201,168,76,0.6)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)] hover:-translate-y-1"
              >
                <div className="mb-4">{icon}</div>
                <h4 className="font-dm font-semibold text-[0.85rem] text-[#F5F0E8] mb-2">
                  {titleKey}
                </h4>
                <p className="font-dm text-[0.78rem] text-[#9A9288] leading-relaxed">
                  {textKey}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
