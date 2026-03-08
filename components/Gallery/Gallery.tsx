"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import FullscreenButton from "../About/FullscreenButton";
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "./Photogalleries";
import { usePropertyGalleryContext } from "./ShowcaseGallery";
import { useShowcaseGallery2Context } from "./ShowcaseGallery2";
import { useGalleryContext } from "../PropertyGallery/PropertyGallery";
import { useFourGalleryContext } from "./FourGallery";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

type Props = {
  initIndex: number;
  library: { src: StaticImageData; alt: string }[];
};

function Gallery({ initIndex, library }: Props) {
  const { setFourGalleryContext } = useFourGalleryContext();
  const { setOpenIndex } = useGlobalContext();
  const { setOpenIndexPropertyGallery } = usePropertyGalleryContext();
  const { setOpenIndexShowcaseGallery2Context } = useShowcaseGallery2Context();
  const { setOpenGalleryContext } = useGalleryContext();
  const [currentSlide, setCurrentSlide] = useState(initIndex);

  function handleClose() {
    if (document.body) document.body.style.overflowY = "auto";
    setOpenIndexPropertyGallery(false);
    setOpenIndex(false);
    setOpenIndexShowcaseGallery2Context(false);
    setOpenGalleryContext(false);
    setFourGalleryContext(false);
    if (document.fullscreenElement) document.exitFullscreen();
  }

  useEffect(() => {
    if (document.body) document.body.style.overflowY = "hidden";
  }, []);

  return (
    <section className="fixed !inset-0 w-screen !h-screen bg-black z-[1000] overflow-y-hidden">
      <div className="flex justify-end mr-4 absolute w-full z-[100]">
        <div className="rounded-md bg-grey2 flex justify-end items-center gap-2 mt-6 m-4 landscape_custom_buttons">
          <button className="fullscreen-button"><FullscreenButton /></button>
          <button onClick={handleClose} className="text-white cursor-pointer p-2 close-button">
            <RxCross2 className="text-2xl text-dark_blue_black hover:scale-150 transition-scale duration-300" />
          </button>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="w-screen m-auto landscape:m-0">
          <div className="mx-auto z-50 flex justify-center mb-3 sm:mb-10">
            <div className="block text-white">{currentSlide + 1}/{library.length}</div>
          </div>

          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect="fade"
            loop
            initialSlide={initIndex}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {library.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="sm:container flex items-center justify-center relative image_gallery m-auto overflow-hidden">
                  <Image src={image.src} alt={image.alt} placeholder="blur" className="object-contain object-center h-[300px] sm:h-[750px] sm:min-h-[500px] sm:min-w-[700px] min-w-full m-auto" sizes="100vw" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
