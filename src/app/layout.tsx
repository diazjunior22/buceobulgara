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
  title: "Buceo Hurgada | Tu Aventura de Buceo en Español en el Mar Rojo",
  description: "Descubre el buceo en Egipto con Buceo Hurgada. Especialistas en español. Bautismos de buceo, cursos PADI/SSI y excursiones de snorkel en el Mar Rojo.",
  keywords: ["Buceo en Hurghada", "Buceo en Egipto", "Buceo en español", "Cursos PADI Egipto", "Cursos SSI Hurghada", "Bautismo de buceo Egipto", "Snorkel Hurghada", "Mar Rojo"],
  authors: [{ name: "Buceo Hurgada" }],
  openGraph: {
    title: "Buceo Hurgada | Buceo en Español en Egipto",
    description: "Explora las maravillas del Mar Rojo con nuestro centro de buceo en Hurghada, Egipto. Disfruta de bautismos, cursos PADI/SSI, y excursiones diarias.",
    url: "https://buceohurgada.com",
    siteName: "Buceo Hurgada",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Buceo en Hurghada - Mar Rojo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Buceo Hurgada | Buceo en Español en Egipto",
    description: "Descubre el buceo en Egipto con especialistas en español. Cursos PADI/SSI y snorkel en el Mar Rojo.",
    images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://buceohurgada.com",
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
  // Schema.org JSON-LD para SEO Avanzado
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction", "SportsActivityLocation"],
    "name": "Buceo Hurgada",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    "description": "Centro de buceo en español en Hurghada, Egipto. Bautismos, cursos PADI y SSI, snorkel y buceo en el Mar Rojo.",
    "url": "https://buceohurgada.com",
    "telephone": "+201507083062",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hurghada",
      "addressRegion": "Red Sea Governorate",
      "addressCountry": "EG"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-inter text-text-dark bg-bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
