import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocaleDocument } from "@/components/layout/LocaleDocument";
import { siteConfig, isLocale, type Locale } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  return {
    title: {
      default: locale === "ru" ? "Дмитрий — веб-дизайн и разработка" : "Dmitry — Web design & development",
      template: locale === "ru" ? "%s — Дмитрий" : "%s — Dmitry",
    },
    alternates: {
      languages: { ru: "/ru", en: "/en", "x-default": "/ru" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  return (
    <div id="top">
      <LocaleDocument locale={locale} />
      <a className="skip-link" href="#main-content">{locale === "ru" ? "Перейти к содержанию" : "Skip to content"}</a>
      <Header locale={locale} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
