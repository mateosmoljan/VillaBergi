import HowToReserve from "@/components/HowToReserve/HowToReserve";
import NavPath from "@/components/NavPath/NavPath";
import PaymentConditions from "@/components/PaymentConditions/PaymentConditions";
import PriceTable from "@/components/PriceTable/PriceTable";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";
import { getPaymentConditionsData } from "@/lib/paymentConditions";
import { getPricelistData } from "@/lib/pricelist";
import { getTitleData } from "@/lib/title";
import { useLocale, useTranslations } from "next-intl";
import { buildMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return buildMetadata(locale, "pricelist", "/pricelist");
}

function Pricelist() {
  const localeActive = useLocale();
  const TitleData = getTitleData(localeActive);
  const PricelistData = getPricelistData(localeActive);
  const PaymentConditionsData = getPaymentConditionsData(localeActive);
  const t = useTranslations("How_Reserve");

  return (
    <section className="pt-16 md:pt-14 text-secondary">
      <NavPath />
      <div>
        <div className="mt-12 pb-28 container">
          <h1 className="font-ExtraBold text-center text-4xl text-primary mb-12 tracking-wider">{TitleData.data[0].title4}</h1>
          <PriceTable />
          <p className="text-secondary text-sm mt-4">{PricelistData.data[0].subtitle}</p>
        </div>
        <div className="py-10 ">
          <div className="container">
            <h2 className="accent-primary font-semibold uppercase mb-2 tracking-widest">{PaymentConditionsData.data[0].subtitle}</h2>
            <h2 className="font-bold text-3xl text-primary mb-4">{PaymentConditionsData.data[0].title}</h2>
            <PaymentConditions />
          </div>
        </div>
        <div className="py-10 ">
          <div className="container">
            <h2 className="accent-primary font-semibold uppercase mb-2 tracking-widest">{t("subtitle")}</h2>
            <h2 className="block font-bold text-3xl text-primary mb-10 ">{t("title")}</h2>
            <HowToReserve />
          </div>
        </div>
        <SendMessage />
      </div>
      <div className="mb-24">
        <TouristGuide />
      </div>
    </section>
  );
}

export default Pricelist;
