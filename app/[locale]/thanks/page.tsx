import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { copy } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? localizedMetadata("en", "/thanks", "Thank you", "Your project enquiry has been received.", { noIndex: true }) : localizedMetadata("ru", "/thanks", "Спасибо", "Ваш запрос по проекту получен.", { noIndex: true });
}

export default async function ThanksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale].thanks;
  return <section className="confirmation-section section-space"><div className="container confirmation-inner"><span className="confirmation-icon"><Check size={27} /></span><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}</h1><p>{t.intro}</p><Link className="text-link" href={`/${locale}`}><ArrowLeft size={15} />{locale === "ru" ? "На главную" : "Back to home"}</Link></div></section>;
}
