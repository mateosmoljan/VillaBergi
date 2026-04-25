import type { Metadata } from "next";

export const locales = ["en", "de", "hr", "it"] as const;
export type Locale = (typeof locales)[number];

const siteName = "Villa Bergi";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://villabergi.com";
const defaultOgImage = "/assets/images/i/28.jpg";

type SeoPage = "home" | "villa" | "pricelist" | "photogallery" | "surroundings" | "contact";

const seoDictionary: Record<Locale, Record<SeoPage, { title: string; description: string }>> = {
  en: {
    home: {
      title: "Villa Bergi | Holiday Villa in Žminj, Central Istria — Near Rovinj & Pula",
      description: "Holiday villa in Damijanići near Žminj, central Istria. Pool, jacuzzi, 5 bedrooms, sleeps 12. Near Rovinj, Pula and Pazin. Ideal for private celebrations, friend groups and young groups.",
    },
    villa: {
      title: "Villa Bergi — 5 Bedroom Villa in Žminj, Istria with Pool & Jacuzzi",
      description: "5 bedroom villa in Damijanići near Žminj, Istria with pool, jacuzzi and garden. Sleeps 12 and suits private celebrations, friend groups and young groups in central Istria.",
    },
    pricelist: {
      title: "Villa Bergi Prices — Villa Rental Prices in Žminj, Istria",
      description: "See villa rental prices in Žminj and Istria villa rates for Villa Bergi. Direct booking for celebrations, young groups and friend groups, no agency fees.",
    },
    photogallery: {
      title: "Villa Bergi Photos — Villa Photos in Žminj, Istria",
      description: "View Villa Bergi photos from Damijanići near Žminj, Istria: pool, jacuzzi, 5 bedrooms and outdoor spaces for celebrations, friend groups and young groups.",
    },
    surroundings: {
      title: "Things to Do Near Žminj — Central Istria Around Villa Bergi",
      description: "Explore Žminj, Svetvinčenat, Barban, Pazin, Kanfanar, Rovinj and Pula from this villa in Istria, ideal for celebrations, young groups and friend groups.",
    },
    contact: {
      title: "Book Villa Bergi — Villa in Žminj, Istria",
      description: "Book a villa in Žminj with direct contact. Villa rental Istria for celebrations, young groups and friend groups, near Rovinj, Pula and central Istria sights.",
    },
  },
  de: {
    home: {
      title: "Villa Bergi | Ferienvilla in Žminj, Zentralistrien — nahe Rovinj & Pula",
      description: "Ferienvilla in Damijanići bei Žminj, Zentralistrien. Pool, Jacuzzi, 5 Schlafzimmer, für 12 Gäste. Nahe Rovinj, Pula und Pazin. Ideal für Feiern, Freundesgruppen und junge Gruppen.",
    },
    villa: {
      title: "Villa Bergi — 5-Schlafzimmer-Villa in Žminj, Istrien mit Pool & Jacuzzi",
      description: "5-Schlafzimmer-Villa in Damijanići bei Žminj, Istrien mit Pool, Jacuzzi und Garten. Für 12 Gäste, ideal für Feiern, Freundesgruppen und junge Gruppen.",
    },
    pricelist: {
      title: "Villa Bergi Preise — Villa-Mietpreise in Žminj, Istrien",
      description: "Sehen Sie Villa-Mietpreise in Žminj und Istrien-Raten für Villa Bergi. Direkt buchen, ideal für Feiern, Freundesgruppen und junge Gruppen.",
    },
    photogallery: {
      title: "Villa Bergi Fotos — Villafotos aus Žminj, Istrien",
      description: "Entdecken Sie Villafotos aus Damijanići bei Žminj, Istrien: Pool, Jacuzzi, 5 Schlafzimmer und Außenbereiche für Feiern, Freundesgruppen und junge Gruppen.",
    },
    surroundings: {
      title: "Ausflüge nahe Žminj — Zentralistrien rund um Villa Bergi",
      description: "Entdecken Sie Žminj, Svetvinčenat, Barban, Pazin, Kanfanar, Rovinj und Pula rund um diese Villa in Istrien.",
    },
    contact: {
      title: "Villa Bergi buchen — Villa in Žminj, Istrien",
      description: "Buchen Sie eine Villa in Žminj direkt. Villa-Miete in Istrien für Feiern, Freundesgruppen und junge Gruppen, nahe Rovinj, Pula und Zentralistrien.",
    },
  },
  hr: {
    home: {
      title: "Villa Bergi | Vila za odmor u Žminju, središnja Istra — blizu Rovinja i Pule",
      description: "Vila za odmor u Damijanićima kraj Žminja, središnja Istra. Bazen, jacuzzi, 5 spavaćih soba, za 12 gostiju. Blizu Rovinja, Pule i Pazina. Idealno za proslave, društva prijatelja i mlade grupe.",
    },
    villa: {
      title: "Villa Bergi — Vila s 5 spavaćih soba u Žminju, Istra s bazenom i jacuzzijem",
      description: "Vila s 5 spavaćih soba u Damijanićima kraj Žminja, Istra s bazenom, jacuzzijem i vrtom. Za 12 gostiju, idealna za proslave, društva prijatelja i mlade grupe.",
    },
    pricelist: {
      title: "Villa Bergi Cjenik — Cijene najma vile u Žminju, Istra",
      description: "Pogledajte cijene najma vile u Žminju i cijene vila u Istri za Villu Bergi. Izravna rezervacija za proslave, društva prijatelja i mlade grupe.",
    },
    photogallery: {
      title: "Villa Bergi Fotografije — Fotografije vile u Žminju, Istra",
      description: "Pogledajte fotografije Ville Bergi u Damijanićima kraj Žminja, Istra: bazen, jacuzzi, 5 spavaćih soba i vanjske prostore za proslave, društva prijatelja i mlade grupe.",
    },
    surroundings: {
      title: "Što posjetiti blizu Žminja — Središnja Istra oko Ville Bergi",
      description: "Istražite Žminj, Svetvinčenat, Barban, Pazin, Kanfanar, Rovinj i Pulu oko ove vile u Istri za proslave, društva prijatelja i mlade grupe.",
    },
    contact: {
      title: "Rezerviraj Villa Bergi — Vila u Žminju, Istra",
      description: "Rezervirajte vilu u Žminju izravno. Najam vile u Istri za proslave, društva prijatelja i mlade grupe, blizu Rovinja, Pule i znamenitosti središnje Istre.",
    },
  },
  it: {
    home: {
      title: "Villa Bergi | Villa vacanze a Žminj, Istria centrale — vicino a Rovigno e Pola",
      description: "Villa vacanze a Damijanići vicino a Žminj, Istria centrale. Piscina, jacuzzi, 5 camere, 12 ospiti. Vicino a Rovigno, Pola e Pisino. Ideale per feste private, gruppi di amici e gruppi giovani.",
    },
    villa: {
      title: "Villa Bergi — Villa con 5 camere a Žminj, Istria con piscina e jacuzzi",
      description: "Villa con 5 camere a Damijanići vicino a Žminj, Istria con piscina, jacuzzi e giardino. Per 12 ospiti, ideale per feste private, gruppi di amici e gruppi giovani.",
    },
    pricelist: {
      title: "Villa Bergi Prezzi — Prezzi villa in affitto a Žminj, Istria",
      description: "Scopri i prezzi villa a Žminj e le tariffe delle ville in Istria per Villa Bergi. Prenotazione diretta per feste private, gruppi di amici e gruppi giovani.",
    },
    photogallery: {
      title: "Villa Bergi Foto — Foto villa a Žminj, Istria",
      description: "Guarda le foto di Villa Bergi a Damijanići vicino a Žminj, Istria: piscina, jacuzzi, 5 camere e spazi esterni per feste private, gruppi di amici e gruppi giovani.",
    },
    surroundings: {
      title: "Cosa fare vicino a Žminj — Istria centrale intorno a Villa Bergi",
      description: "Scopri Žminj, Sanvincenti, Barbana, Pisino, Canfanaro, Rovigno e Pola vicino a questa villa in Istria.",
    },
    contact: {
      title: "Prenota Villa Bergi — Villa a Žminj, Istria",
      description: "Prenota una villa a Žminj con contatto diretto. Villa in affitto in Istria per feste private, gruppi di amici e gruppi giovani, vicino a Rovigno e Pola.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function buildMetadata(locale: Locale, page: SeoPage, pathname: string): Metadata {
  const data = seoDictionary[locale][page];
  const canonical = `${baseUrl}/${locale}${pathname}`;

  return {
    metadataBase: new URL(baseUrl),
    title: data.title,
    description: data.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((loc) => [loc, `${baseUrl}/${loc}${pathname}`])),
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName,
      title: data.title,
      description: data.description,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [defaultOgImage],
    },
  };
}

export function getLodgingJsonLd(_locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: "Villa Bergi",
    description: "Holiday villa in Damijanići near Žminj, central Istria with 5 bedrooms, pool, jacuzzi and garden. Sleeps 12.",
    url: "https://villabergi.com",
    image: "https://villabergi.com/assets/images/optimized-hero/28.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Žminj",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.1292,
      longitude: 13.8986,
    },
    numberOfRooms: 5,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 12,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Jacuzzi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness Room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Barbecue", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bicycles", value: true },
    ],
    petsAllowed: false,
    smokingAllowed: false,
  };
}
