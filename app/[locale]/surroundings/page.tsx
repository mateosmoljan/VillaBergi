import FourGallery from "@/components/Gallery/FourGallery";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { getEnvironsData } from "@/lib/environs";
import { getLocationsData } from "@/lib/LocationToVisit";
import { useLocale } from "next-intl";
import Image from "next/image";
import SurroundingsSection from "@/components/SurroundingsSection/index";
import { buildMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return buildMetadata(locale, "surroundings", "/surroundings");
}

export default function Environs() {
  const localeActive = useLocale();
  const LocationsData = getLocationsData(localeActive);
  const EnvironsData = getEnvironsData(localeActive);

  return (
    <section className="pt-16 md:pt-14 text-secondary">
      <NavPath />
      <div className="container">
        <h1 className="mt-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-primary tracking-wider">{EnvironsData.data[0].title}</h1>
        <FourGallery range={{ start: 0, end: 4 }} mapButton={true} />
        <div className="flex flex-col mt-8 gap-4">
          <p>
            <Image src="/assets/images/sun.png" alt="Grb Istre" width={150} height={150} className="aspect-square float-left" />
            {EnvironsData.data[0].des}
          </p>
          <SurroundingsSection />
        </div>
        <FourGallery range={{ start: 4, end: 8 }} mapButton={false} />
        <div>
          <h2 className="font-titleBold text-xl mb-4">{EnvironsData.data[0].title2}</h2>
          <p>{EnvironsData.data[0].des2}</p>
          <div>
            <h3 className="font-semibold">{EnvironsData.data[0].subtitle}</h3>
            <ul className="list-disc p-3 pl-8">
              {LocationsData.locations.map((item, index) => (
                <li key={index}>
                  <strong>{item.placeToVisit}</strong> {item.des}
                </li>
              ))}
            </ul>
          </div>
          <FourGallery range={{ start: 8, end: 12 }} mapButton={false} />
          <div className="mb-24">
            <SendMessage />
          </div>
        </div>
      </div>
    </section>
  );
}
