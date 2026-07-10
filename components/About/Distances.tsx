"use client";

import { useEffect, useState } from "react";
import { getDistancesData } from "../../lib/LocationDistance";
import GoogleMaps from "./GoogleMaps";
import { useLocale } from "next-intl";

function Distances() {
  const localeActive = useLocale();
  const DistancesData = getDistancesData(localeActive);
  const totalLocations = DistancesData.locations.length;
  const [showMap, setShowMap] = useState<boolean>(false);

  const handleMapClose = () => {
    setShowMap(false);
  };

  useEffect(() => {
    document.body.style.overflow = showMap ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMap]);

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <h2 className="font-bold text-xl text-dark_blue_black">
            {DistancesData.locations[0].title}
          </h2>
          <div className="flex justify-end">
            <button className="btn-2" onClick={() => setShowMap(true)}>
              {DistancesData.locations[0].button}
            </button>
          </div>
        </div>
        {/* Google Maps */}
        {showMap && <GoogleMaps onClose={handleMapClose} />}
        <div className="flex flex-wrap">
          {DistancesData.locations.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full sm:w-1/2 p-3 pt-5 ${
                index === totalLocations - 1 || index === totalLocations - 2
                  ? ""
                  : "sm:border-b sm:border-inherit"
              } mobile_border`}
            >
              <span className="font-medium">{item.place}</span>
              <span className="text-sm	font-bold">{item.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Distances;
