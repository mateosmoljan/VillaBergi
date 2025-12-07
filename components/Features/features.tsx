"use client";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Features, getFeaturesData } from "@/lib/features";
import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { getFeaturesTitleData } from "@/lib/features_titles";

type Props = {
  handleClose: () => void;
};

function FeaturesComponent({ handleClose }: Props) {
  const featuresRef = useRef<HTMLDivElement>(null);
  const localeActive = useLocale();
  const FeaturesData = getFeaturesData(localeActive);
  const FeaturesTitleData = getFeaturesTitleData(localeActive);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-black/50 w-screen h-screen inset-0 fixed z-50 flex items-center justify-center">
      <div
        ref={featuresRef}
        className="flex flex-col justify-center items-end bg-background rounded-md h-[90%] w-[90%] md:w-[780px]"
      >
        <div className="flex p-3">
          <button
            onClick={() => handleClose()}
            className="text-white cursor-pointer p-2 close-button"
          >
            <RxCross2
              className=" text-2xl text-primary hover:scale-150
                  transition-scale duration-300"
            />
          </button>
        </div>
        <div className="overflow-y-scroll h-[98%] w-full p-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-titleBold text-2xl text-primary mb-4">
              {FeaturesTitleData.data[0].title2}
            </h1>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title3}
              </h2>
              {FeaturesData.data.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} quality={100} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title4}
              </h2>
              {FeaturesData.data.slice(2, 10).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title5}
              </h2>
              <div
                className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
              >
                <div className="rounded-full p-2 bg-white">
                  <Image
                    src={FeaturesData.data[10].icon}
                    alt={FeaturesData.data[10].icon_alt}
                  />
                </div>
                <li className={`py-4 flex flex-col justify-center`}>
                  {FeaturesData.data[10].titles}
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title6}
              </h2>
              {FeaturesData.data.slice(11, 19).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title7}
              </h2>
              {FeaturesData.data.slice(19, 22).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title8}
              </h2>
              {FeaturesData.data.slice(22, 24).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title9}
              </h2>
              <div
                className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
              >
                <div className="rounded-full p-2 bg-white">
                  <Image
                    src={FeaturesData.data[24].icon}
                    alt={FeaturesData.data[24].icon_alt}
                  />
                </div>
                <li className={`py-4 flex flex-col justify-center`}>
                  {FeaturesData.data[24].titles}
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title10}
              </h2>
              {FeaturesData.data.slice(25, 36).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title11}
              </h2>
              <div
                className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
              >
                <div className="rounded-full p-2 bg-white">
                  <Image
                    src={FeaturesData.data[36].icon}
                    alt={FeaturesData.data[36].icon_alt}
                  />
                </div>
                <li className={`py-4 flex flex-col justify-center`}>
                  {FeaturesData.data[36].titles}

                  <span className="text-sm text-secondary">
                    {FeaturesData.data[36].des}
                  </span>
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title12}
              </h2>
              {FeaturesData.data.slice(37, 39).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title13}
              </h2>
              {FeaturesData.data.slice(39, 43).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-primary mb-3">
                {FeaturesTitleData.data[0].title14}
              </h2>
              {FeaturesData.data.slice(43, 45).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <div className="rounded-full p-2 bg-white">
                    <Image src={item.icon} alt={item.icon_alt} />
                  </div>
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.titles}

                    <span className="text-sm text-secondary">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesComponent;
