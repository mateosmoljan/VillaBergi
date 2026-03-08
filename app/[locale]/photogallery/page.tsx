import ShowcaseGallery from "@/components/Gallery/ShowcaseGallery";
import ShowcaseGallery2 from "@/components/Gallery/ShowcaseGallery2";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { useTranslations } from "next-intl";
import { buildMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return buildMetadata(locale, "photogallery", "/photogallery");
}

function Photogallery() {
  const t = useTranslations("Titles");
  return (
    <section className="pt-16 md:pt-14 text-secondary">
      <NavPath />
      <div>
        <h1 className="mt-12 font-ExtraBold text-center text-4xl text-primary tracking-wider">{t("Photogallery")}</h1>
        <ShowcaseGallery />
        <ShowcaseGallery2 />
        <div className="mb-24">
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Photogallery;
