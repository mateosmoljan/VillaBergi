import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";

import { buildMetadata, isLocale } from "@/lib/seo";
import { MobileBookingBar } from "@/components/Conversion/BookingActions";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import deMessages from "@/messages/de.json";
import hrMessages from "@/messages/hr.json";
import itMessages from "@/messages/it.json";
import { AnalyticsConsent } from "@/components/Privacy/AnalyticsConsent";

const messagesByLocale = {
  en: enMessages,
  de: deMessages,
  hr: hrMessages,
  it: itMessages,
};

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
  const activeLocale = isLocale(locale) ? locale : "en";

  const messages = messagesByLocale[activeLocale];
  const clientMessages = {
    Contact: messages.Contact,
    Conversion: messages.Conversion,
    Pricing: messages.Pricing,
    Privacy: messages.Privacy,
    Send_Message: messages.Send_Message,
  };

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus pb-16 lg:pb-0`}>
        <NextIntlClientProvider locale={activeLocale} messages={clientMessages}>
          <Navbar />
          {children}
          <Footer />
          <MobileBookingBar />
          <AnalyticsConsent measurementId={measurementId} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
