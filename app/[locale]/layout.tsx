import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Coast Parfum | Perfumes Originales V Región Valparaíso Chile",
  description:
    "Perfumes diseñador y árabes 100% originales en la V Región de Valparaíso, Chile. Calvin Klein, Armani, D&G, Moschino y más. Envíos a Valparaíso, Viña del Mar, Concón, Quilpué. Compra por WhatsApp.",
  keywords: [
    "perfumes chile",
    "perfumes originales valparaiso",
    "coast parfum",
    "perfumes concon",
    "perfumes viña del mar",
    "perfumes diseñador chile",
    "perfumes arabes chile",
    "calvin klein chile",
    "armani perfume chile",
    "dolce gabbana chile",
    "perfumeria premium chile",
  ],
  openGraph: {
    type: "website",
    url: "https://www.coast.parfum.cl",
    title: "Coast Parfum | Perfumes Originales V Región",
    description:
      "Perfumes diseñador y árabes 100% originales. Envíos a toda la V Región de Valparaíso.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coast Parfum — Perfumes Originales",
      },
    ],
    siteName: "Coast Parfum",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coast Parfum | Perfumes Originales V Región",
    description: "Perfumes diseñador y árabes 100% originales en la V Región de Valparaíso.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.coast.parfum.cl",
    languages: {
      "es-CL": "https://www.coast.parfum.cl/es",
      "en-US": "https://www.coast.parfum.cl/en",
    },
  },
  authors: [{ name: "Coast Parfum" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.coast.parfum.cl",
  name: "Coast Parfum",
  description: "Perfumería premium de diseñador y árabes originales",
  url: "https://www.coast.parfum.cl",
  telephone: "+56964788533",
  email: "coastparfum@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Concón",
    addressRegion: "Valparaíso",
    addressCountry: "CL",
  },
  areaServed: [
    "Valparaíso",
    "Viña del Mar",
    "Concón",
    "Quilpué",
    "Villa Alemana",
    "Reñaca",
    "Olmué",
    "Casablanca",
    "Quillota",
  ],
  sameAs: [
    "https://www.instagram.com/coast.parfum",
    "https://wa.me/56964788533",
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-21:00",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </NextIntlClientProvider>
  );
}
