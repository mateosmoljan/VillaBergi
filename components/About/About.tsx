import { getLocationsData } from "@/lib/LocationToVisit";
import { useLocale, useTranslations } from "next-intl";
import Markdown from "react-markdown";

function About() {
  const a = useTranslations("About");
  const t = useTranslations("Titles");
  const localeActive = useLocale();
  const LocationsData = getLocationsData(localeActive);

  return (
    <section className="pt-20 Visit" id="about">
      <div className="container">
        <h1 className="flex justify-center font-arbutus text-3xl sm:text-4xl font-bold text-dark_blue_black">
          {t("homepage_title")}
        </h1>
        <div className="pt-10">
          <Markdown>{a("des")}</Markdown>
          <br />
          {/* <h2 className="font-ExtraBold text-lg">
            <Markdown>{a("the_space.title")}</Markdown>
          </h2> */}
          {/* <Markdown>{a("the_space.des")}</Markdown> */}
          {/* <br />
          <Markdown>{a("the_space.des2")}</Markdown>
          <br /> */}
          <h2 className="font-ExtraBold text-lg">{a("guest_access.title")}</h2>
          <p>{a("guest_access.des")}</p>
        </div>
        <div className="pt-5">
          <h2 className="font-ExtraBold">{a("locations.title")}</h2>
          <ul className="list-disc	p-3 pl-8">
            {LocationsData.locations.map((item, index) => (
              <li key={index} className="mb-2 Visit">
                {item.placeToVisit} {item.des}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
