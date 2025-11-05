"use client";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import Gallery from "./Gallery";
import { MdPhotoCamera } from "react-icons/md";
import { PropertyGalleryLib } from "@/lib/property_gallery";
import { useLocale } from "next-intl";
import { getTitleData } from "@/lib/title";

export type AppContextType = {
  openIndexPropertyGallery: boolean;
  setOpenIndexPropertyGallery: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openIndexPropertyGallery: false,
  setOpenIndexPropertyGallery: (_value: boolean) => {},
});

export const usePropertyGalleryContext = () => useContext(AppContext);
function ShowcaseGallery() {
  const [openIndexPropertyGallery, setOpenIndexPropertyGallery] =
    useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleImageClick = (index: number) => {
    setOpenIndexPropertyGallery(true);
    setActiveIndex(index);
  };

  const localeActive = useLocale();
  const TitleData = getTitleData(localeActive);

  return (
    <section>
      <div className="container py-10">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase tracking-widest">
            Villa Bergi
          </h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-dark_blue_black">
            Villa Bergi
          </h1>
        </div>
        <AppContext.Provider
          value={{ openIndexPropertyGallery, setOpenIndexPropertyGallery }}
        >
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:h-96 ">
            {PropertyGalleryLib.images.length > 0 && (
              <div className=" rounded-md sm:w-1/2 w-full">
                <Image
                  src={PropertyGalleryLib.images[0].src}
                  alt={PropertyGalleryLib.images[0].alt}
                  placeholder="blur"
                  className="cursor-pointer object-cover rounded-md block w-full h-full hover:opacity-90"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            )}
            <div className="grid grid-cols-2 sm:w-1/2 w-full gap-3">
              {PropertyGalleryLib.images.slice(1, 5).map((image, index) => (
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

          {openIndexPropertyGallery && (
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

export default ShowcaseGallery;
