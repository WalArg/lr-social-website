import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LR Social Media & Content — Agencia de Marketing Digital",
    template: "%s | LR Social Content",
  },
  description:
    "Agencia de marketing digital en Argentina. Social Media Management, Contenido, Estrategia Digital, Copywriting y Community Manager. Hacemos crecer tu marca en redes sociales.",
  keywords: [
    "agencia de marketing digital",
    "social media manager",
    "community manager",
    "contenido para redes sociales",
    "estrategia digital",
    "copywriting",
    "reels",
    "instagram",
    "argentina",
    "LR Social Content",
  ],
  authors: [{ name: "LR Social Media & Content" }],
  creator: "LR Social Media & Content",
  metadataBase: new URL("https://lrsocialcontent.com"),
  openGraph: {
    title: "LR Social Media & Content — Agencia de Marketing Digital",
    description:
      "Transformamos tu presencia digital con estrategia, contenido y resultados reales.",
    url: "https://lrsocialcontent.com",
    siteName: "LR Social Content",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LR Social Media & Content",
    description:
      "Agencia de marketing digital. Social Media, Contenido y Estrategia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#050507" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
