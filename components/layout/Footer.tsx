"use client";

import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { products } from "@/lib/products";

const CoastLogoSmall = () => (
  <svg width="52" height="52" viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="55" stroke="#C9A84C" strokeWidth="2" fill="rgba(201,168,76,0.08)" />
    <circle cx="60" cy="60" r="46" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
    <path d="M30 82 Q40 76 50 82 Q60 88 70 82 Q80 76 90 82" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeOpacity="0.7" />
    <path d="M35 88 Q45 83 55 88 Q65 93 75 88 Q82 83 88 88" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeOpacity="0.4" />
    <path d="M55 38 Q36 38 32 60 Q32 82 55 82" stroke="#C9A84C" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M58 38 L58 78" stroke="#C9A84C" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M58 38 Q82 38 82 54 Q82 70 58 70" stroke="#C9A84C" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#050505] border-t border-[rgba(201,168,76,0.2)]">
      <div className="container-coast pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <CoastLogoSmall />
              <div>
                <p className="font-playfair font-bold text-[#C9A84C] text-base tracking-[0.2em]">
                  COAST
                </p>
                <p className="font-playfair font-bold text-[#C9A84C] text-base tracking-[0.2em] -mt-1">
                  PARFUM
                </p>
              </div>
            </div>
            <p className="font-dm text-[0.78rem] text-[#C8BFB0] mb-2">{t("tagline")}</p>
            <p className="font-dm text-[0.75rem] text-[#C8BFB0] flex items-center gap-1.5 mb-6">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t("location")}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/coast.parfum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.4)] flex items-center justify-center hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.1)] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <button
                onClick={() => window.open(buildWhatsAppLink(), "_blank")}
                className="w-9 h-9 rounded-full border border-[rgba(37,211,102,0.4)] flex items-center justify-center hover:border-[#25D366] hover:bg-[rgba(37,211,102,0.1)] transition-all duration-200 cursor-pointer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                </svg>
              </button>
            </div>
          </div>

          {/* Col 2 — Collection */}
          <div>
            <h4 className="font-mono-dm text-[0.68rem] tracking-[0.3em] text-[#C9A84C] uppercase mb-5">
              {t("collection")}
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#productos");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-dm text-[0.78rem] text-[#C8BFB0] hover:text-[#E8C96A] transition-colors cursor-pointer text-left"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Info */}
          <div>
            <h4 className="font-mono-dm text-[0.68rem] tracking-[0.3em] text-[#C9A84C] uppercase mb-5">
              {t("info")}
            </h4>
            <ul className="space-y-3">
              {Object.values(t.raw("infoLinks")).map((label, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      const targets = ["#nosotros", "#envios", "#nosotros", "#contacto", "#productos"];
                      document.querySelector(targets[i] || "#")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-dm text-[0.78rem] text-[#C8BFB0] hover:text-[#E8C96A] transition-colors cursor-pointer text-left"
                  >
                    {label as string}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-mono-dm text-[0.68rem] tracking-[0.3em] text-[#C9A84C] uppercase mb-5">
              {t("contact")}
            </h4>
            <ul className="space-y-3 mb-5">
              {[
                { icon: "phone", text: "+56 9 6478 8533" },
                { icon: "mail", text: "coastparfum@gmail.com" },
                { icon: "instagram", text: "@coast.parfum" },
                { icon: "map", text: "Concón, V Región" },
              ].map(({ icon, text }) => (
                <li key={icon} className="flex items-center gap-2.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                    {icon === "phone" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.93 19.79 19.79 0 0 1 1.61 1.31 2 2 0 0 1 3.6.06h3.12a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.16 6.16l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />}
                    {icon === "mail" && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>}
                    {icon === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
                    {icon === "map" && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>}
                  </svg>
                  <span className="font-dm text-[0.76rem] text-[#C8BFB0]">{text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => window.open(buildWhatsAppLink(), "_blank")}
              className="w-full bg-[#C9A84C] text-[#080808] font-dm font-bold text-[0.68rem] tracking-[0.2em] uppercase py-3 rounded-lg hover:bg-[#E8C96A] transition-colors cursor-pointer"
            >
              ESCRÍBENOS
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[rgba(201,168,76,0.15)] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-dm text-[0.7rem] text-[#C8BFB0]">{t("copyright")}</p>
            <p className="font-cormorant italic text-[0.85rem] text-[#C9A84C]">
              {t("slogan")}
            </p>
            {/* Payment logos */}
            <div className="flex items-center gap-3">
              {["Webpay", "Visa", "MC", "RedCompra"].map((brand) => (
                <span
                  key={brand}
                  className="font-mono-dm text-[0.55rem] tracking-wider text-[#C8BFB0] border border-[rgba(201,168,76,0.2)] px-2 py-1 rounded"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
