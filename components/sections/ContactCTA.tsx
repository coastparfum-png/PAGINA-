"use client";

import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";

export function ContactCTA() {
  const t = useTranslations("contact");

  // Generate CSS box-shadow for simple particles
  const generateParticles = (count: number) => {
    let value = "";
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      const opacity = Math.random() * 0.5 + 0.1;
      value += `${x}px ${y}px rgba(201,168,76,${opacity})${i === count - 1 ? "" : ", "}`;
    }
    return value;
  };

  // We use static values to avoid hydration mismatch
  const particlesSmall = "200px 100px rgba(201,168,76,0.3), 500px 300px rgba(201,168,76,0.5), 800px 600px rgba(201,168,76,0.2), 1200px 200px rgba(201,168,76,0.4), 1600px 800px rgba(201,168,76,0.1), 300px 900px rgba(201,168,76,0.6)";
  const particlesMedium = "400px 200px rgba(201,168,76,0.4), 700px 500px rgba(201,168,76,0.2), 1000px 800px rgba(201,168,76,0.5), 1400px 400px rgba(201,168,76,0.3), 1800px 900px rgba(201,168,76,0.1)";

  return (
    <section
      id="contacto"
      className="relative section-padding overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: "radial-gradient(circle at center, #1a0d00 0%, #080808 100%)",
      }}
    >
      {/* CSS Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div
          className="absolute w-[2px] h-[2px] bg-transparent rounded-full"
          style={{ boxShadow: particlesSmall }}
        />
        <div
          className="absolute w-[4px] h-[4px] bg-transparent rounded-full"
          style={{ boxShadow: particlesMedium }}
        />
      </div>

      <div className="container-coast relative z-10 flex flex-col items-center max-w-3xl">
        <div data-animate="fade-up" className="mb-10">
          <Logo size="xl" showText={false} animated={true} />
        </div>

        <h2 data-animate="fade-up" className="leading-[1.1] mb-6">
          <span className="font-playfair text-[2.8rem] text-[#F5F0E8] block">
            ¿Listo para encontrar
          </span>
          <span className="font-cormorant italic text-[3.2rem] text-gradient-gold block">
            tu fragancia perfecta?
          </span>
        </h2>

        <p data-animate="fade-up" className="font-dm text-[0.95rem] text-[#9A9288] leading-relaxed mb-12 max-w-lg">
          Escríbenos y te ayudamos a encontrar el perfume ideal. Atención personalizada, respuesta rápida.
        </p>

        <button
          data-animate="fade-up"
          onClick={() => window.open(buildWhatsAppLink(), "_blank")}
          className="relative bg-[#25D366] text-white font-dm font-bold text-[1rem] tracking-[0.15em] uppercase px-[56px] py-[18px] rounded hover:brightness-110 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_0_0_0_rgba(37,211,102,0)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] group flex items-center justify-center gap-3 mx-auto mb-16"
        >
          <span className="absolute inset-0 rounded border border-[#25D366] animate-pulse-ring pointer-events-none" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
          </svg>
          ESCRIBIR A WHATSAPP
        </button>

        <div data-animate="fade-up" className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-center">
          <div className="flex flex-col gap-2 font-dm text-[0.82rem] text-[#9A9288]">
            <a href="mailto:coastparfum@gmail.com" className="hover:text-[#C9A84C] transition-colors">📧 coastparfum@gmail.com</a>
            <a href="https://instagram.com/coast.parfum" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors">📸 @coast.parfum</a>
            <span>📍 Concón, V Región de Valparaíso</span>
          </div>

          <div className="w-px h-16 bg-[rgba(201,168,76,0.15)] hidden sm:block" />
          <div className="h-px w-full bg-[rgba(201,168,76,0.15)] sm:hidden my-2" />

          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-mono-dm text-[0.72rem] text-[#C9A84C] uppercase tracking-widest mb-1">Horario</span>
            <span className="font-dm text-[0.85rem] text-[#F5F0E8]">Lunes a Sábado</span>
            <span className="font-dm text-[0.85rem] text-[#9A9288]">9:00 – 21:00 hrs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
