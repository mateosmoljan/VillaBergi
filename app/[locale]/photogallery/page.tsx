import ShowcaseGallery from "@/components/Gallery/ShowcaseGallery";
import ShowcaseGallery2 from "@/components/Gallery/ShowcaseGallery2";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { useTranslations } from "next-intl";

function Photogallery() {
  const t = useTranslations("Titles");
  return (
    <section className="pt-16 md:pt-14 text-secondary">
      <NavPath />
      <div className="">
        <h2 className="mt-12 font-ExtraBold text-center text-4xl text-primary tracking-wider">
          {t("Photogallery")}
        </h2>
        <div>
          <div>
            <ShowcaseGallery />
          </div>
        </div>
        <div>
          <ShowcaseGallery2 />
        </div>
        <div className="mb-24">
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Photogallery;
