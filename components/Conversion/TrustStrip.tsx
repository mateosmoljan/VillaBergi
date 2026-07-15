import { useTranslations } from "next-intl";
import { MdCheckCircle, MdDirectionsCar, MdPayments } from "react-icons/md";

export default function TrustStrip() {
  const t = useTranslations("Conversion");
  const items = [
    { label: t("directBooking"), Icon: MdCheckCircle },
    { label: t("bookingTerms"), Icon: MdPayments },
    { label: t("parking"), Icon: MdDirectionsCar },
  ];

  return (
    <section aria-label={t("directBooking")} className="border-y border-white/10 bg-[#082349]">
      <div className="container grid gap-3 py-4 sm:grid-cols-3">
        {items.map(({ label, Icon }) => (
          <div key={label} className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-white">
            <Icon className="shrink-0 text-xl text-[#22b7f4]" aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
