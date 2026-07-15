"use client";
import { useSwiper } from "swiper/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const SwiperNavButtonsAcommodation = () => {
  const swiper = useSwiper();

  return (
    <div
      className={` hover:opacity-100 opacity-100 sm:opacity-0 flex shadow-a absolute z-10 top-0 items-center justify-between w-full h-full`}
    >
      <button
        onClick={() => swiper.slidePrev()}
        aria-label="Previous villa image"
        className={` h-full rounded-t-md block`}
      >
        <MdOutlineKeyboardArrowLeft className={` text-6xl text-white  `} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        aria-label="Next villa image"
        className={` h-full rounded-t-md block `}
      >
        <MdOutlineKeyboardArrowRight className={`text-6xl text-white`} />
      </button>
    </div>
  );
};
