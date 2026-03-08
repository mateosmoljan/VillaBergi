"use client";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { FaMap } from "react-icons/fa";
import GoogleMaps from "../About/GoogleMaps";
import { TouristImageData } from "@/lib/TouristImageData";
import GuideGallery from "./GuideGallery";
import Gallery from "./Gallery";
import { getEnvironsData } from "@/lib/environs";
import { useLocale } from "next-intl";

export type AppContextType = {
  openFourGalleryContext: boolean;
  setFourGalleryContext: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openFourGalleryContext: false,
  setFourGalleryContext: (_value: boolean) => {},
});

export const useFourGalleryContext = () => useContext(AppContext);

type Props = {
  mapButton: boolean;
  range?:
    | {
        start: number;
        end: number;
      }
    | undefined;
};

function FourGallery({ mapButton, range }: Props) {
  const [openFourGalleryContext, setFourGalleryContext] =
    useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showMap, setShowMap] = useState(false);
  const handleImageClick = (index: number) => {
    setFourGalleryContext(true);
    setActiveIndex(index);
  };

  const handleMapClose = () => {
    setShowMap(false);
  };
  const localeActive = useLocale();
  const EnvironsData = getEnvironsData(localeActive);

  return (
    <section>
      <div className=" py-10">
        <AppContext.Provider
          value={{
            openFourGalleryContext,
            setFourGalleryContext,
          }}
        >
          <div className="w-full flex flex-col ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {TouristImageData.slice(range?.start, range?.end).map(
                (image, index) => (
                  <div
                    key={index}
                    className="w-full h-full rounded-md flex relative"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      placeholder="blur"
                      className="relative cursor-pointer object-cover h-full rounded-md block w-full hover:opacity-90 aspect-video md:aspect-square"
                      onClick={() =>
                        handleImageClick(index + (range?.start || 0))
                      }
                    />
                  </div>
                )
              )}
            </div>
            {mapButton && (
              <div className="flex justify-end">
                <button
                  onClick={() => setShowMap(true)}
                  className=" btn-2 gap-2 mt-4"
                >
                  <FaMap />
                  <span>{EnvironsData.data?.[0]?.button ?? "View map"}</span>
                </button>
                {showMap && <GoogleMaps onClose={handleMapClose} />}
              </div>
            )}
          </div>

          {openFourGalleryContext && (
            <Gallery library={TouristImageData} initIndex={activeIndex} />
          )}
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default FourGallery;
