import { buildMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return buildMetadata(locale, "villa", "/villa-bergi");
}

export default function VillaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
