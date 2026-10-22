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
    "Buceo Hurghada",
    "Buceo Hurgada",
    "Buceo en Egipto",
    "Buceo Egipto",
    "Buceo Mar Rojo",
    "Buceo en el Mar Rojo",
    "Centro de buceo Hurghada",
    "Cursos PADI Hurghada",
    "Cursos SSI Egipto",
    "Bautismo de buceo Hurghada",
    "Bautismo de buceo en Egipto",
    "Bautismo de buceo Mar Rojo",
    "Snorkel Hurghada",
    "Excursiones de buceo en Hurghada",
    "Buceo Hurgada opiniones",
    "Open Water Hurghada español",
    "Diving Hurghada spanish"
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
        "alternateName": ["Buceo Hurghada", "Centro de Buceo en Español Hurghada", "Buceo en Egipto en Español"],
        "url": "https://www.buceohurgada.com",
        "logo": "https://www.buceohurgada.com/logo.png",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
        "description": "Centro de buceo líder en español en Hurghada, Egipto. Especialistas en bautismos de buceo para principiantes, buceo diario guiado en el Mar Rojo y cursos certificados PADI y SSI con instructores hispanohablantes.",
        "telephone": "+201507083062",
        "email": "reservas@buceohurgada.com",
        "priceRange": "€€",
        "currenciesAccepted": "EUR, USD, EGP",
        "paymentAccepted": "Cash, Credit Card, Revolut, Bizum",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hurghada Marina, Red Sea",
          "addressLocality": "Hurghada",
          "addressRegion": "Red Sea Governorate",
          "postalCode": "84511",
          "addressCountry": "EG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.2579,
          "longitude": 33.8116
        },
        "hasMap": "https://maps.google.com/?q=Hurghada+Marina+Red+Sea+Egypt",
        "areaServed": [
          { "@type": "City", "name": "Hurghada", "sameAs": "https://es.wikipedia.org/wiki/Hurghada" },
          { "@type": "AdministrativeArea", "name": "Mar Rojo", "sameAs": "https://es.wikipedia.org/wiki/Mar_Rojo" },
          { "@type": "Country", "name": "Egipto", "sameAs": "https://es.wikipedia.org/wiki/Egipto" },
          { "@type": "City", "name": "El Gouna" },
          { "@type": "Place", "name": "Makadi Bay" },
          { "@type": "Place", "name": "Sahl Hasheesh" },
          { "@type": "Place", "name": "Soma Bay" }
        ],
        "knowsAbout": [
          "Buceo en Hurghada",
          "Buceo en Egipto",
          "Buceo en el Mar Rojo",
          "Bautismos de buceo",
          "Cursos PADI",
          "Cursos SSI",
          "Inmersiones en arrecifes y naufragios",
          "Snorkel en Hurghada",
          "Vida marina de Egipto"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html",
          "https://maps.google.com/?q=Hurghada,Egypt"
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
            "name": "¿Por qué elegir buceo en Hurghada (Egipto) con Buceo Hurgada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Somos el centro de referencia de buceo en español en Hurghada, Egipto. Ofrecemos grupos reducidos, instructores hispanohablantes certificados, traslados desde tu hotel, barco cómodo con comida incluida y la máxima seguridad en los mejores arrecifes del Mar Rojo."
            }
          },
          {
            "@type": "Question",
            "name": "¿Necesito experiencia previa para bucear en Hurghada o Egipto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, no necesitas ninguna experiencia previa. Nuestro programa de Bautismo de Buceo está diseñado específicamente para principiantes. Incluye explicación teórica en español y 2 inmersiones personalizadas de la mano de un instructor profesional."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la mejor época para bucear en Egipto y el Mar Rojo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En Hurghada se puede bucear durante todo el año. La visibilidad supera casi siempre los 30 metros y la temperatura del agua oscila entre 22°C en invierno y 29°C en verano, lo que convierte a Egipto en uno de los mejores destinos de buceo del planeta."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué vida marina se puede ver al bucear en Hurghada, Egipto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El Mar Rojo cuenta con más de 1.200 especies de peces y 200 corales. Es muy común observar delfines mulares, tortugas carey, peces payaso, rayas de puntos azules, morenas gigantes, peces loro y jardines de coral virgen."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye el precio de las excursiones de buceo en Hurghada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestros precios incluyen equipo de buceo completo revisado, instrucción en español, recogida y traslado desde tu hotel en Hurghada, comida buffet recién preparada a bordo y bebidas frías y calientes durante todo el día."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué cursos de buceo certifican en Hurghada (PADI y SSI)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Impartimos cursos oficiales PADI y SSI con validez internacional: Open Water Diver (OWD), Advanced Open Water, Rescue Diver y PADI Dive Master, todos con material de estudio y exámenes en español."
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
