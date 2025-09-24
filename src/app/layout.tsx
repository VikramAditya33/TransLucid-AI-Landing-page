import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, PT_Sans_Narrow, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundSilk from "@/components/BackgroundSilk";
import ClickSpark from "@/components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "TransLucid AI",
  description:
    "A Chrome Extension that translates any text into English and explains it for clarity.",
  metadataBase: new URL("https://translucidextension.vercel.app"),
  keywords: [
    "TransLucid AI",
    "AI translation",
    "translator",
    "context AI",
    "Chrome extension translator",
    "translate any language",
    "50+ languages",
    "context-aware translation",
    "AI explanations",
  ],
  alternates: {
    canonical: "https://translucidextension.vercel.app",
  },
  openGraph: {
    title: "TransLucid AI",
    description:
      "A Chrome Extension that translates any text into English and explains it for clarity.",
    url: "https://translucidextension.vercel.app",
    siteName: "TransLucid AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TransLucid AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ViXkrm",
    creator: "@ViXkrm",
    title: "TransLucid AI",
    description:
      "Translate to 50+ languages with AI explanations. Context‑aware, fast, and simple.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ptSansNarrow.variable} ${playfair.variable} antialiased`}>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TransLucid AI",
            url: "https://translucidextension.vercel.app",
            sameAs: [
              "https://x.com/ViXkrm",
              "https://github.com/VikramAditya33",
              "https://www.linkedin.com/in/vikram-aditya-verma-b80561367",
            ],
          })}
        </Script>
        <Script id="ld-software" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "TransLucid AI",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome",
            description:
              "Translate to 50+ languages with AI explanations and context‑aware answers.",
            url: "https://translucidextension.vercel.app",
          })}
        </Script>
        <BackgroundSilk />
        <ClickSpark sparkColor="#fff" sparkSize={12} sparkRadius={18} sparkCount={10} duration={500} easing="ease-out" extraScale={1.1}>
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
