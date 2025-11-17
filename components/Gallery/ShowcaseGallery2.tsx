"use client";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { TouristImageData } from "@/lib/TouristImageData";
import Gallery from "./Gallery";
import { useLocale } from "next-intl";
import { getTitleData } from "@/lib/title";

export type AppContextType = {
  openIndexShowcaseGallery2Context: boolean;
  setOpenIndexShowcaseGallery2Context: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openIndexShowcaseGallery2Context: false,
  setOpenIndexShowcaseGallery2Context: (_value: boolean) => {},
});

export const useShowcaseGallery2Context = () => useContext(AppContext);
function ShowcaseGallery2() {
  const [
    openIndexShowcaseGallery2Context,
    setOpenIndexShowcaseGallery2Context,
  ] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleImageClick = (index: number) => {
    setOpenIndexShowcaseGallery2Context(true);
    setActiveIndex(index);
  };
  const localeActive = useLocale();
  const TitleData = getTitleData(localeActive);

  return (
    <section>
      <div className="container py-10">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="accent-primary font-semibold uppercase tracking-widest">
            {TitleData.data[0].subtitle2}
          </h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-primary">
            {TitleData.data[0].title5}
          </h1>
        </div>
        <AppContext.Provider
          value={{
            openIndexShowcaseGallery2Context,
            setOpenIndexShowcaseGallery2Context,
          }}
        >
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:h-96 ">
            {TouristImageData.length > 0 && (
              <div className=" rounded-md sm:w-1/2 w-full">
                <Image
                  src={TouristImageData[0].src}
                  alt={TouristImageData[0].alt}
                  placeholder="blur"
                  className="cursor-pointer object-cover rounded-md block w-full h-full hover:opacity-90"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            )}
            <div className="grid grid-cols-2 sm:w-1/2 w-full gap-3">
              {TouristImageData.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full rounded-md flex relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    placeholder="blur"
                    className="relative cursor-pointer object-cover h-full rounded-md block w-full hover:opacity-90"
                    onClick={() => handleImageClick(index + 1)}
                  />
                  {index === 3 && (
                    <div className="absolute inline-block md:bottom-4 md:right-4 bottom-2 right-2 ">
                      <button
                        onClick={() => handleImageClick(0)}
                        className=" flex items-center p-2 sm:px-4 sm:py-2 rounded-md uppercase tracking-widest pxflex gap-2 !bg-grey2 !text-dark_blue_black font-Bold text-xs xl:text-sm"
                      >
                        <MdPhotoCamera />
                        <span>{TitleData.data[0].button}</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {openIndexShowcaseGallery2Context && (
            <Gallery library={TouristImageData} initIndex={activeIndex} />
          )}
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default ShowcaseGallery2;
