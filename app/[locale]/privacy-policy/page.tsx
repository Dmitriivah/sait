import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { copy } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? localizedMetadata("en", "/privacy-policy", "Privacy policy", "Information about how enquiry details are used on this website.") : localizedMetadata("ru", "/privacy-policy", "Политика конфиденциальности", "Информация об использовании данных, отправленных через форму сайта.");
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale].privacy;
  return <section className="page-hero section-space privacy-page"><div className="container page-hero-inner"><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}</h1><p>{t.intro}</p><div className="privacy-sections">{t.sections.map(([title, body], index) => <section key={title}><span className="section-kicker">0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div><p className="privacy-warning">{locale === "ru" ? "Не публикуйте этот шаблон без заполнения и проверки юридических сведений." : "Do not publish this template without completing and reviewing the legal details."}</p></div></section>;
}
