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
      title: "Villa Bergi | Holiday Villa in Žminj, Istria",
      description: "Villa Bergi is a holiday villa in Žminj, Istria with a private pool, jacuzzi, garden, barbecue area, free parking and Wi‑Fi. Pets are not allowed.",
    },
    villa: {
      title: "Villa Bergi — 7 Bedroom Villa in Žminj with Pool & Jacuzzi",
      description: "Explore Villa Bergi: 7 bedrooms, pool, jacuzzi, sauna, fitness, games room. Perfect for groups up to 16 in central Istria.",
    },
    pricelist: {
      title: "Villa Bergi Prices — Holiday Villa Rental in Žminj",
      description: "View seasonal prices and booking conditions for Villa Bergi in Žminj, Istria. Direct booking, no agency fees.",
    },
    photogallery: {
      title: "Villa Bergi Photos — Holiday Villa in Žminj, Istria",
      description: "Browse photos of Villa Bergi: pool, jacuzzi, bedrooms, outdoor areas and surroundings in Žminj.",
    },
    surroundings: {
      title: "Things to Do Near Žminj — Around Villa Bergi",
      description: "Discover beaches, historic towns, water parks and experiences near Villa Bergi in central Istria.",
    },
    contact: {
      title: "Book Villa Bergi — Holiday Villa in Žminj, Istria",
      description: "Send a booking inquiry for Villa Bergi in Žminj. Direct contact, fast response, no commission.",
    },
  },
  de: {
    home: { title: "Villa Bergi in Istrien | Luxus-Ferienvilla", description: "Übernachten Sie in der Villa Bergi in Žminj, Istrien. Luxuriöse Unterkunft mit Pool, Wellnessbereich und hochwertiger Ausstattung." },
    villa: { title: "Villa Bergi Details | Ausstattung, Galerie & Buchung", description: "Entdecken Sie Ausstattung, Fotos, Preise und Buchungsbedingungen der Villa Bergi in Zentralistrien." },
    pricelist: { title: "Villa Bergi Preisliste & Buchungsbedingungen", description: "Sehen Sie saisonale Preise, Zahlungsbedingungen und den Reservierungsprozess der Villa Bergi." },
    photogallery: { title: "Villa Bergi Fotogalerie", description: "Durchstöbern Sie hochwertige Fotos der Villa Bergi, des Pools, der Zimmer und der Außenbereiche." },
    surroundings: { title: "Žminj & Istrien Guide | Rund um Villa Bergi", description: "Entdecken Sie Sehenswürdigkeiten, Strände und Erlebnisse in der Umgebung der Villa Bergi." },
    contact: { title: "Kontakt Villa Bergi | Buchungsanfrage senden", description: "Kontaktieren Sie Villa Bergi direkt für Buchungsanfragen und Verfügbarkeit in Istrien, Kroatien." },
  },
  hr: {
    home: { title: "Villa Bergi u Istri | Luksuzna kuća za odmor", description: "Odsjednite u Villi Bergi u Žminju. Luksuzan smještaj s bazenom, wellnessom i vrhunskim sadržajima." },
    villa: { title: "Villa Bergi detalji | Sadržaji, galerija i rezervacija", description: "Istražite sadržaje, fotografije, cijene i uvjete rezervacije Ville Bergi u središnjoj Istri." },
    pricelist: { title: "Villa Bergi cjenik i uvjeti rezervacije", description: "Pogledajte sezonske cijene, uvjete plaćanja i proces rezervacije za Villu Bergi." },
    photogallery: { title: "Villa Bergi foto galerija", description: "Pregledajte kvalitetne fotografije Ville Bergi, bazena, soba i okućnice u Istri." },
    surroundings: { title: "Žminj i Istra vodič | Oko Ville Bergi", description: "Otkrijte atrakcije, plaže i iskustva u okolici Ville Bergi u Istri." },
    contact: { title: "Kontakt Villa Bergi | Pošaljite upit", description: "Kontaktirajte Villu Bergi za upite o rezervaciji, dostupnosti i detaljima boravka." },
  },
  it: {
    home: { title: "Villa Bergi in Istria | Villa di lusso", description: "Soggiorna a Villa Bergi a Žminj, Istria. Alloggio di lusso con piscina, wellness e servizi premium." },
    villa: { title: "Dettagli Villa Bergi | Servizi, galleria e prenotazione", description: "Scopri servizi, foto, prezzi e condizioni di prenotazione di Villa Bergi nell'Istria centrale." },
    pricelist: { title: "Listino prezzi Villa Bergi e condizioni", description: "Consulta i prezzi stagionali, le condizioni di pagamento e il processo di prenotazione." },
    photogallery: { title: "Galleria fotografica Villa Bergi", description: "Sfoglia foto di alta qualità di Villa Bergi, piscina, camere e spazi esterni." },
    surroundings: { title: "Guida Žminj e Istria | Intorno a Villa Bergi", description: "Scopri attrazioni, spiagge e attività nei dintorni di Villa Bergi in Istria." },
    contact: { title: "Contatta Villa Bergi | Invia richiesta", description: "Contatta direttamente Villa Bergi per richieste di prenotazione e disponibilità in Istria." },
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

export function getLodgingJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteName,
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}${defaultOgImage}`,
    description: seoDictionary[locale].home.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Žminj",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
    sameAs: ["https://villabergi.com"],
  };
}
