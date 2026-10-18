import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/config/site";

export function localizedMetadata(
  locale: Locale,
  route: string,
  title: string,
  description: string,
  options: { noIndex?: boolean } = {},
): Metadata {
  const canonical = `/${locale}${route}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: `${siteConfig.url}/ru${route}`,
        en: `${siteConfig.url}/en${route}`,
        "x-default": `${siteConfig.url}/ru${route}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    ...(options.noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
