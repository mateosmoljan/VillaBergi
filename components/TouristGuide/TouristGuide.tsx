import { getTouristGuideData } from "@/lib/TouristImageData";
import TouristSwiper from "./TouristSwiper";
import "./touristguide.css";
import { useLocale } from "next-intl";

function TouristGuide() {
  const localeActive = useLocale();
  const PhotogalleriesData = getTouristGuideData(localeActive);
  return (
    <>
      <section className="py-10 secondary-bg Tourist">
        <div className="container">
          <div className="w-6xl flex flex-col gap-3 pb-10">
            <h2 className="accent-primary font-semibold uppercase tracking-widest">
              {PhotogalleriesData.data[0].subtitle}
            </h2>
            <h1 className="font-bold text-4xl sm:text-3xl text-primary">
              {PhotogalleriesData.data[0].title}
            </h1>
          </div>
          <TouristSwiper />
        </div>
      </section>
    </>
  );
}

export default TouristGuide;
