import About from "@/components/About/About";
import Acommodation from "@/components/Accommodations/Accommodation";
import HeadSwiper from "@/components/HeadSwiper/HeadSwiper";
import Photogalleries from "@/components/Gallery/Photogalleries";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";
import React from "react";
import NavPath from "@/components/NavPath/NavPath";
import { buildMetadata, getLodgingJsonLd, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return buildMetadata(locale, "home", "");
}

function Home({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const jsonLd = getLodgingJsonLd(locale);

  return (
    <div>
      <HeadSwiper />
      <main className="primary-bg">
        <h1 className="sr-only">Villa Bergi</h1>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <NavPath homePage={true} />
        <About />
        <Acommodation />
        <Photogalleries />
        <TouristGuide />
        <div className="mb-24">
          <SendMessage />
        </div>
      </main>
    </div>
  );
}

export default Home;
