import NavPath from "@/components/NavPath/NavPath";
import { buildMetadata, isLocale } from "@/lib/seo";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return buildMetadata(locale, "privacy", "/privacy");
}

export default function PrivacyPage() {
  const t = useTranslations("Privacy");
  const sections = [
    [t("controllerTitle"), t("controller")],
    [t("dataTitle"), t("data")],
    [t("purposeTitle"), t("purpose")],
    [t("processorsTitle"), t("processors")],
    [t("retentionTitle"), t("retention")],
    [t("rightsTitle"), t("rights")],
  ];

  return (
    <main className="pt-16 text-secondary md:pt-14">
      <NavPath />
      <article className="container max-w-4xl py-12">
        <h1 className="text-3xl font-ExtraBold text-primary md:text-4xl">{t("title")}</h1>
        <p className="mt-4 leading-7 text-gray-200">{t("intro")}</p>
        <div className="mt-10 space-y-8">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-2 leading-7 text-gray-200">{body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm text-gray-400">{t("updated")}</p>
      </article>
    </main>
  );
}
