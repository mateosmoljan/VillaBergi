import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { buildMetadata, isLocale } from "@/lib/seo";

const arbutus = Arbutus_Slab({ subsets: ["latin"], weight: ["400"], variable: "--font-arbutus" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "900"], variable: "--font-poppins" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161A1F",
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return {
    ...buildMetadata(locale, "home", ""),
    icons: { icon: "/assets/images/logo.png" },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      {measurementId ? <GoogleAnalytics gaId={measurementId} /> : null}
    </html>
  );
}
