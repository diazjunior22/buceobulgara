import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buceohurgada.com"),
  title: "Buceo en Hurghada en Español | Cursos PADI, SSI y Bautismos - Buceo Hurgada",
  description: "Centro de buceo en español en Hurghada, Egipto. Bautismos de buceo en el Mar Rojo, cursos PADI y SSI, inmersiones diarias en arrecifes y snorkel. Instructores certificados y recogida en hotel.",
  keywords: [
    "Buceo en Hurghada",
    "Buceo en Hurghada en español",
    "Buceo en Egipto",
    "Buceo Mar Rojo",
    "Cursos PADI Hurghada",
    "Cursos SSI Egipto",
    "Bautismo de buceo Hurghada",
    "Bautismo de buceo Mar Rojo",
    "Snorkel Hurghada",
    "Excursiones de buceo en Hurghada",
    "Buceo Hurgada opiniones",
    "Open Water Hurghada español"
  ],
  authors: [{ name: "Buceo Hurgada", url: "https://www.buceohurgada.com" }],
  creator: "Buceo Hurgada",
  publisher: "Buceo Hurgada",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Buceo en Hurghada en Español | Cursos PADI, SSI y Bautismos",
    description: "Centro de buceo en español en Hurghada, Egipto. Bautismos en el Mar Rojo, cursos certificados PADI/SSI, inmersiones diarias en arrecifes y excursiones de snorkel.",
    url: "https://www.buceohurgada.com",
    siteName: "Buceo Hurgada",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Buceo en Hurghada en español - Arrecifes del Mar Rojo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Buceo en Hurghada en Español | Buceo Hurgada",
    description: "Descubre el Mar Rojo con instructores de habla hispana en Hurghada, Egipto. Cursos PADI/SSI, bautismos y buceo diario.",
    images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://www.buceohurgada.com",
    languages: {
      "es-ES": "https://www.buceohurgada.com",
      "es": "https://www.buceohurgada.com",
      "x-default": "https://www.buceohurgada.com",
    },
  },
  verification: {
    google: "nsQxypJpvkI9tDLP-gI4uNuRp6uXQdsnhZEYl1UPq_A",
  },
};

export const viewport: Viewport = {
  themeColor: "#2874FC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD estructurado en grafo (LocalBusiness + FAQPage + BreadcrumbList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "SportsActivityLocation", "TouristAttraction"],
        "@id": "https://www.buceohurgada.com/#business",
        "name": "Buceo Hurgada",
        "alternateName": "Buceo Hurghada - Centro de Buceo en Español",
        "url": "https://www.buceohurgada.com",
        "logo": "https://www.buceohurgada.com/logo.png",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
        "description": "Centro de buceo en español en Hurghada, Egipto. Bautismos de buceo, cursos PADI y SSI certificados, inmersiones diarias en los mejores arrecifes del Mar Rojo y excursiones de snorkel.",
        "telephone": "+201507083062",
        "priceRange": "€€",
        "currenciesAccepted": "EUR, USD, EGP",
        "paymentAccepted": "Cash, Credit Card, Revolut, Bizum",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hurghada",
          "addressRegion": "Red Sea Governorate",
          "addressCountry": "EG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.2579,
          "longitude": 33.8116
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "68",
          "reviewCount": "68"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.buceohurgada.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Necesito experiencia previa para bucear en Hurghada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, ofrecemos programas como el Bautismo de Buceo diseñados específicamente para principiantes sin experiencia previa. Estarás acompañado por un instructor en español en todo momento."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo hacer un bautismo de buceo en el Mar Rojo sin certificado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, el bautismo no requiere ninguna certificación previa. Se realiza con una sesión teórica y dos inmersiones personalizadas acompañadas por un instructor certificado."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye el precio de las excursiones de buceo en Hurghada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestros precios incluyen equipo de buceo completo, instrucción en español, recogida y traslado desde tu hotel en Hurghada, almuerzo buffet recién preparado y bebidas a bordo durante todo el día."
            }
          },
          {
            "@type": "Question",
            "name": "¿Los instructores de Buceo Hurgada hablan español?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "¡Por supuesto! Todo nuestro equipo habla español e inglés con total fluidez para garantizar tu seguridad, comodidad y máxima comprensión en cada inmersión."
            }
          },
          {
            "@type": "Question",
            "name": "¿Hay servicio de transporte desde los hoteles de Hurghada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, ofrecemos recogida y regreso gratuito en todos los hoteles de Hurghada ciudad. Para zonas cercanas como Makadi Bay, Sahl Hasheesh o El Gouna, se aplica un pequeño suplemento."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué cursos de buceo certifican en Hurghada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Impartimos cursos oficiales PADI y SSI con validez internacional: desde Open Water Diver (OWD) y Advanced Open Water hasta cursos de rescate y especialidades de buceo profundo y flotabilidad."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.buceohurgada.com/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.buceohurgada.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Experiencias de Buceo",
            "item": "https://www.buceohurgada.com/#experiencias"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cursos PADI y SSI",
            "item": "https://www.buceohurgada.com/#cursos"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Preguntas Frecuentes",
            "item": "https://www.buceohurgada.com/#faq"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contacto y Reservas",
            "item": "https://www.buceohurgada.com/#contacto"
          }
        ]
      }
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning className={`${poppins.variable} ${inter.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-inter text-text-dark bg-bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
