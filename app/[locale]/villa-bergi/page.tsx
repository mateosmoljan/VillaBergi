"use client";
import IFrameMaps from "@/components/About/iFrameMaps";
import AvailabilityCalendar from "@/components/AvailabilityCalendar/AvailabilityCalendar";
import BookYourStayCard from "@/components/BookYourStayCard/BookYourStayCard";
import FeaturesComponent from "@/components/Features/features";
import NavPath from "@/components/NavPath/NavPath";
import PaymentConditions from "@/components/PaymentConditions/PaymentConditions";
import PriceTable from "@/components/PriceTable/PriceTable";
import PropertyGallery from "@/components/PropertyGallery/PropertyGallery";
import { getCategorizationData } from "@/lib/categorization";
import { getFeaturesData } from "@/lib/features";
import { getFeaturesTitleData } from "@/lib/features_titles";
import { getPaymentConditionsData } from "@/lib/paymentConditions";
import { getPricelistData } from "@/lib/pricelist";
import { getTitleData } from "@/lib/title";
import { getVilla_DescriptionData } from "@/lib/Villa_Description";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

function VillaPanorama() {
  const [showFeatures, setShowFeatures] = useState<boolean>(false);
  const localeActive = useLocale();
  const TitleData = getTitleData(localeActive);
  const CategorizationData = getCategorizationData(localeActive);
  const Villa_DescriptionData = getVilla_DescriptionData(localeActive);
  const FeaturesData = getFeaturesData(localeActive);
  const FeaturesTitleData = getFeaturesTitleData(localeActive);
  const PricelistData = getPricelistData(localeActive);
  const PaymentConditionsData = getPaymentConditionsData(localeActive);

  function handleClose() {
    setShowFeatures(false);
  }

  useEffect(() => {
    if (showFeatures) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure the overflow is reset when the component unmounts
    };
  }, [showFeatures]);

  return (
    <section className="pt-16 md:pt-14 text-secondary">
      <NavPath />
      <div className="container">
        <h1 className="text-primary my-12 text-center flex justify-center text-3xl sm:text-4xl font-ExtraBold  tracking-wider">
          {TitleData.data[0].title}
        </h1>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 mx-auto">
            <PropertyGallery />
            <div className="flex flex-col gap-4">
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary font-Bold">
                {CategorizationData.data.map((item, index) => (
                  <button
                    key={index}
                    className=" py-2 rounded-md border-[1px] custom_border flex items-center lg:flex-row justify-center gap-2"
                  >
                    <span className=" tracking-widest uppercase text-xs xl:text-sm ">
                      {item.title}:
                    </span>
                    <span className="font-Bold text-xs xl:text-sm uppercase tracking-widest">
                      {item.value}
                    </span>
                  </button>
                ))}
              </div>
              <hr />
            </div>
            <div className="py-10">
              <h2 className="font-bold text-2xl text-primary mb-4">{}</h2>
              <p>
                <Markdown>{Villa_DescriptionData.data[0].des}</Markdown>
              </p>
              {/* <p>
                <br />
                <h2 className="text-md font-ExtraBold">
                  <Markdown>{Villa_DescriptionData.data[0].subtitle}</Markdown>
                </h2>
                <Markdown>{Villa_DescriptionData.data[0].des2}</Markdown>
                <br />
                <br />
                <h2 className="font-ExtraBold text-md">
                  <Markdown>{Villa_DescriptionData.data[0].subtitle2}</Markdown>
                </h2>
                <Markdown>{Villa_DescriptionData.data[0].des3}</Markdown>
              </p> */}
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-primary">
                {FeaturesTitleData.data[0].title}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {FeaturesData.data.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 items-center ${
                      index != 4 && index != 5
                        ? "border-b-[1px] border-[#e5e7eb]"
                        : ""
                    }`}
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
              </ul>
              <button
                className="btn-2 mt-3"
                onClick={() => setShowFeatures(true)}
              >
                {FeaturesTitleData.data[0].button}
              </button>
              {showFeatures && <FeaturesComponent handleClose={handleClose} />}
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-primary mb-4">
                {PricelistData.data[0].title}
              </h2>
              <PriceTable />
              <p className=" text-sm mt-4">{PricelistData.data[0].subtitle}</p>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-primary mb-4">
                {PaymentConditionsData.data[0].title}
              </h2>
              <PaymentConditions />
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-primary mb-4">
                {TitleData.data[0].title2}
              </h2>
              <div className="h-[400px] rounded-md overflow-hidden lg:mb-[40px]">
                <IFrameMaps />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="mx-auto !sticky top-14 lg:ml-2.5 w-full mb-[40px] lg:mb-auto">
              <BookYourStayCard />
            </div>
          </div>
        </div>
        {/* <div className="container py-10 mb-24">
          <h2 className="block text-center font-bold text-2xl text-primary mb-6">
            {TitleData.data[0].title3}
          </h2>
          <AvailabilityCalendar />
        </div> */}
      </div>
    </section>
  );
}

export default VillaPanorama;
