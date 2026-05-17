import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coast Parfum | Perfumes Originales V Región Valparaíso Chile",
  description: "Perfumes diseñador y árabes 100% originales en la V Región de Valparaíso, Chile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
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
              areaServed: "V Región de Valparaíso, Chile",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
