import type { MetadataRoute } from "next";
import { locales } from "@/lib/seo";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://villabergi.com";
const paths = ["", "/villa-bergi", "/pricelist", "/photogallery", "/surroundings", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    }))
  );
}
