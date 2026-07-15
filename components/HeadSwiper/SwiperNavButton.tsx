import { useSwiper } from "swiper/react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        aria-label="Previous hero image"
        className="h-screen w-1/5 flex justify-center items-center absolute z-10 top-0 left-0"
      >
        <div>
          <MdOutlineArrowBackIosNew className="relative rounded-full p-1 bg-black/70 hover:bg-black text-4xl z-10 text-grey2  h-full" />
        </div>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        aria-label="Next hero image"
        className="h-screen w-1/5 flex justify-center items-center absolute z-10 top-0 right-0"
      >
        <div className="">
          <MdOutlineArrowForwardIos className="relative rounded-full p-1 bg-black/70 hover:bg-black text-4xl z-10 text-grey2 " />
        </div>
      </button>
    </>
  );
};
