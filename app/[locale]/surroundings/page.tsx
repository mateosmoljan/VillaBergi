// FIXED Environs.jsx for Next.js + next-intl
import FourGallery from "@/components/Gallery/FourGallery";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { getEnvironsData } from "@/lib/environs";
import { getLocationsData } from "@/lib/LocationToVisit";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import SurroundingsSection from "@/components/SurroundingsSection/index";

export default function Environs() {
  const localeActive = useLocale();
  const t = useTranslations("Environs");

  const LocationsData = getLocationsData(localeActive);
  const EnvironsData = getEnvironsData(localeActive);

  return (
    <section className="pt-16 md:pt-14 text-secondary">
      <NavPath />

      <div className="container">
        {/* MAIN TITLE */}
        <h1 className="mt-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-primary tracking-wider">
          {EnvironsData.data[0].title}
        </h1>

        {/* FIRST GALLERY */}
        <FourGallery range={{ start: 0, end: 4 }} mapButton={true} />

        {/* DESCRIPTION */}
        <div className="flex flex-col mt-8 gap-4">
          <p>
            <Image
              src="/assets/images/sun.png"
              alt="Grb Istre"
              width={150}
              height={150}
              className="aspect-square float-left"
            />
            {EnvironsData.data[0].des}
          </p>

          {/* ROVINJ, BALE SECTION */}
          {/* <div className="mt-8">
            <h1 className="mt-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-primary tracking-wider mb-6">
              if rovinj then {t("rovinj_title")}, if bale then {t("bale_title")}
            </h1>

            <div className="grid gap-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-medium">⭐ {item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div> */}
          <SurroundingsSection />
        </div>

        {/* SECOND GALLERY */}
        <FourGallery range={{ start: 4, end: 8 }} mapButton={false} />

        {/* SECOND TEXT SECTION */}
        <div>
          <h2 className="font-titleBold text-xl mb-4">
            {EnvironsData.data[0].title2}
          </h2>
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

          {/* THIRD GALLERY */}
          <FourGallery range={{ start: 8, end: 12 }} mapButton={false} />

          {/* CONTACT FORM */}
          <div className="mb-24">
            <SendMessage />
          </div>
        </div>
      </div>
    </section>
  );
}
