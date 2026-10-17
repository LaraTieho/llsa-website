import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Providers } from "@/components/providers"
import { Navbar, Footer } from "@/components/layout"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

// TODO: [LLSA CONTENT] — confirm production domain; update if different (e.g. llsa.org.ls vs www.llsa.org.ls)
const BASE_URL = "https://www.llsa.org.ls"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Geomatics Institute of Lesotho",
    template: "%s | GIL",
  },
  description:
    "The professional body for licensed land surveyors and geomatics practitioners in the Kingdom of Lesotho. Membership, CPD, legislation, and surveying standards.",
  keywords: [
    "land surveying Lesotho",
    "cadastral survey",
    "GIL",
    "Geomatics Institute of Lesotho",
    "land administration authority",
    "professional surveyor Maseru",
    "geomatics Lesotho",
    "land survey act 1980",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LS",
    url: BASE_URL,
    siteName: "Geomatics Institute of Lesotho",
    title: "Geomatics Institute of Lesotho",
    description:
      "The professional body for licensed land surveyors and geomatics practitioners in the Kingdom of Lesotho.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Geomatics Institute of Lesotho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geomatics Institute of Lesotho",
    description:
      "The professional body for licensed land surveyors and geomatics practitioners in the Kingdom of Lesotho.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
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
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Geomatics Institute of Lesotho",
  alternateName: ["GIL", "formerly Lesotho Land Surveyors Association (LLSA)"],
  url: BASE_URL,
  logo: `${BASE_URL}/gil-logo.png`,
  description:
    "The professional body for licensed land surveyors and geomatics practitioners in the Kingdom of Lesotho.",
  address: {
    // TODO: [LLSA CONTENT] — add streetAddress, postalCode fields once confirmed
    "@type": "PostalAddress",
    addressLocality: "Maseru",
    addressCountry: "LS",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "member services",
    email: "secretary@llsa.org.ls", // TODO: [LLSA CONTENT] — replace with actual LLSA secretary email address
    areaServed: "LS",
    availableLanguage: ["English", "Sesotho"],
  },
  sameAs: [], // TODO: [LLSA CONTENT] — add actual social media profile URLs (LinkedIn, Facebook, X/Twitter)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          {/* Skip-to-content — WCAG 2.4.1 */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="min-h-[calc(100vh-80px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
