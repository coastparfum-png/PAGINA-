"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    // Replace locale prefix in path
    const currentPath = pathname.replace(/^\/(es|en)/, "");
    router.push(`/${nextLocale}${currentPath || "/"}`);
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-1.5 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)] rounded-full px-3 py-1.5 cursor-pointer hover:border-[rgba(201,168,76,0.5)] transition-all duration-200"
      title={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="text-sm leading-none">{locale === "es" ? "🇨🇱" : "🇺🇸"}</span>
      <span className="font-mono-dm text-[0.62rem] tracking-wider text-[#C9A84C] font-medium">
        {locale.toUpperCase()}
      </span>
    </motion.button>
  );
}
