"use client";

import { getTouristGuideData } from "@/lib/TouristImageData";
import Image from "next/image";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function TouristSwiper() {
  const localeActive = useLocale();
  const data = getTouristGuideData(localeActive);

  return (
    <div className="tourist-guide max-w-full relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        loop
        autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
      >
        {data.data.slice(0, 6).map((image, index) => (
          <SwiperSlide key={index}>
            <div className="xl:h-80 h-96 relative">
              <Link href="/surroundings" className="flex items-center justify-center relative h-full">
                <Image src={image.src} alt={image.alt} placeholder="blur" className="object-cover h-full w-full rounded-md" sizes="(max-width: 768px) 100vw, 25vw" />
              </Link>
              <div className="absolute text-left p-4 bottom-0 z-10 flex flex-col gap-2">
                <h2 className="text-white font-bold text-xl drop-shadow-xl">{image.image_title}</h2>
                <p className="text-white drop-shadow-xl">{image.image_des}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TouristSwiper;
