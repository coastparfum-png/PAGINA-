"use client";

import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const t = useTranslations("footer");

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-[rgba(201,168,76,0.15)] pt-16 pb-8">
      <div className="container-coast">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Logo size="lg" showText={true} />
            <div className="flex flex-col gap-2">
              <p className="font-dm text-[0.85rem] text-[#9A9288] leading-relaxed">
                Perfumes diseñador y árabes originales
              </p>
              <p className="font-mono-dm text-[0.7rem] text-[#C9A84C] uppercase tracking-widest mt-1">
                Concón, V Región de Valparaíso
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://instagram.com/coast.parfum" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#050505] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <button 
                onClick={() => window.open(buildWhatsAppLink(), "_blank")}
                className="w-9 h-9 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#050505] transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Col 2: Collection */}
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-[1.1rem] text-[#F5F0E8] uppercase tracking-wider">
              Colección
            </h4>
            <ul className="flex flex-col gap-4">
              {["CK One Shock", "Stronger With You", "Toy 2 Bubble Gum", "Light Blue", "Yes I Am", "Odyssey Mandarin Sky"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleScrollTo("#productos")}
                    className="font-dm text-[0.85rem] text-[#9A9288] hover:text-[#C9A84C] transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-[1.1rem] text-[#F5F0E8] uppercase tracking-wider">
              Información
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <button onClick={() => handleScrollTo("#nosotros")} className="font-dm text-[0.85rem] text-[#9A9288] hover:text-[#C9A84C] transition-colors cursor-pointer">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#envios")} className="font-dm text-[0.85rem] text-[#9A9288] hover:text-[#C9A84C] transition-colors cursor-pointer">
                  Envíos V Región
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#nosotros")} className="font-dm text-[0.85rem] text-[#9A9288] hover:text-[#C9A84C] transition-colors cursor-pointer">
                  Garantía de Originalidad
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-[1.1rem] text-[#F5F0E8] uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4 font-dm text-[0.85rem] text-[#9A9288]">
              <li>+56 9 6478 8533</li>
              <li>coastparfum@gmail.com</li>
              <li>@coast.parfum</li>
              <li>Concón, V Región</li>
            </ul>
            <button 
              onClick={() => window.open(buildWhatsAppLink(), "_blank")}
              className="mt-2 text-left font-dm font-bold text-[0.75rem] text-[#C9A84C] uppercase tracking-[0.2em] hover:text-[#E8C96A] transition-colors cursor-pointer flex items-center gap-2"
            >
              ESCRÍBENOS <span className="text-lg leading-none">→</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(201,168,76,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-dm text-[0.75rem] text-[#9A9288]">
            © {new Date().getFullYear()} Coast Parfum. Todos los derechos reservados.
          </p>
          
          <p className="font-cormorant italic text-[1.1rem] text-[#C9A84C]">
            Descubre tu esencia. Vívimos el perfume.
          </p>
          
          <div className="flex items-center gap-4 text-[#9A9288] font-dm font-semibold text-[0.7rem] uppercase tracking-widest">
            <span>Webpay</span>
            <span>Visa</span>
            <span>Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
