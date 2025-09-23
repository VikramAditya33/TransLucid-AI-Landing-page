import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundSilk from "@/components/BackgroundSilk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Translucid AI — Translate. Explain. Understand.",
  description:
    "A Chrome Extension that translates any text into English and explains it for clarity.",
  metadataBase: new URL("https://translucid.ai"),
  openGraph: {
    title: "Translucid AI — Translate. Explain. Understand.",
    description:
      "A Chrome Extension that translates any text into English and explains it for clarity.",
    url: "https://translucid.ai",
    siteName: "Translucid AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Translucid AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BackgroundSilk />
        {children}
      </body>
    </html>
  );
}
