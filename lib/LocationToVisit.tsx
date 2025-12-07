import React from "react";

type LocationToVisitData = {
  placeToVisit: React.ReactElement;
  des?: string;
};

type DataObject = {
  locations: LocationToVisitData[];
  // You can add more arrays or properties if needed
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

export const LocationToVisit: LocationToVisitData[] = [
  {
    placeToVisit: (
      <a
        href="https://www.aquacolors.eu"
        target="_blank"
        className="text-yellow"
      >
        www.aquacolors.eu
      </a>
    ),
  },
  {
    placeToVisit: (
      <a
        href="https://www.np-brijuni.hr/"
        target="_blank"
        className="text-yellow"
      >
        www.np-brijuni.hr
      </a>
    ),
  },
  {
    placeToVisit: (
      <a
        href="https://www.pulainfo.hr/"
        target="_blank"
        className="text-yellow"
      >
        www.pulainfo.hr
      </a>
    ),
  },
  {
    placeToVisit: (
      <a href="https://aquarium.hr/" target="_blank" className="text-yellow">
        aquarium.hr
      </a>
    ),
  },
  {
    placeToVisit: (
      <a
        href="https://www.istralandia.hr/"
        target="_blank"
        className="text-yellow"
      >
        www.istralandia.hr
      </a>
    ),
  },
];

const replaceDes = (data: LocationToVisitData[], des: string[]) => {
  return data.map((location, index) => ({
    ...location,
    des: des[index],
  }));
};

// Define the data object
export const LocationsDataEn: DataObject = {
  locations: replaceDes(LocationToVisit, enData.About.locations.des),
};

// You can also define a separate object for German translations if needed
export const LocationsDataDE: DataObject = {
  locations: replaceDes(LocationToVisit, deData.About.locations.des),
};

export const LocationsDataHR: DataObject = {
  locations: replaceDes(LocationToVisit, hrData.About.locations.des),
};

export const LocationsDataIT: DataObject = {
  locations: replaceDes(LocationToVisit, itData.About.locations.des),
};

export const getLocationsData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return LocationsDataEn;
    case "de":
      return LocationsDataDE;
    case "hr":
      return LocationsDataHR;
    case "it":
      return LocationsDataIT;
    default:
      // Return default language if specified language is not found
      return LocationsDataEn;
  }
};
