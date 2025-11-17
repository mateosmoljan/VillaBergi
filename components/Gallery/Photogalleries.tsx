"use client";
import { createContext, useContext, useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import { Link } from "@/navigation";
import { PropertyGalleryLib } from "@/lib/property_gallery";
import PhotogalleriesImages from "./PhotogalleriesImages";
import Gallery from "./Gallery";
import { getPhotogalleriesData } from "@/lib/photogalleries";
import { useLocale } from "next-intl";

export type AppContextType = {
  openIndex: boolean;
  setOpenIndex: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openIndex: false,
  setOpenIndex: (_value: boolean) => {},
});

export const useGlobalContext = () => useContext(AppContext);
function Photogalleries() {
  const [openIndex, setOpenIndex] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const localeActive = useLocale();
  const PhotogalleriesData = getPhotogalleriesData(localeActive);

  const handleImageClick = (index: number) => {
    setOpenIndex(!openIndex);
    setActiveIndex(index);
  };

  return (
    <section className="Photo">
      <div className="container py-10">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="accent-primary font-semibold uppercase tracking-widest">
            {PhotogalleriesData.data[0].subtitle}
          </h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-primary">
            {PhotogalleriesData.data[0].title}
          </h1>
        </div>
        <AppContext.Provider value={{ openIndex, setOpenIndex }}>
          <PhotogalleriesImages handleImageClick={handleImageClick} />
          <div className="pt-5 flex justify-end">
            <Link href="/photogallery" className="btn-2 flex gap-2">
              <TfiGallery />
              <span>{PhotogalleriesData.data[0].button}</span>
            </Link>
          </div>
          {openIndex && (
            <Gallery
              library={PropertyGalleryLib.images}
              initIndex={activeIndex}
            />
          )}
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default Photogalleries;
