import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { copy } from "@/lib/content";
import { isLocale, siteConfig, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? localizedMetadata("en", "/contact", "Contact & project enquiry", "Tell me about your website project and we can discuss scope, functionality, and next steps.") : localizedMetadata("ru", "/contact", "Обсудить проект", "Расскажите о сайте, который нужен вашему бизнесу, и мы обсудим подходящий формат работы.");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  return (
    <>
      <section className="page-hero section-space contact-hero"><div className="container page-hero-inner"><span className="eyebrow">{t.contact.eyebrow}</span><h1>{t.contact.title}</h1><p>{t.contact.intro}</p><a className="text-link" href="#project-form">{locale === "ru" ? "К форме проекта" : "Go to project form"}<ArrowDown size={15} /></a></div></section>
      <section className="contact-section section-space"><div className="container contact-grid">
        <aside className="contact-sidebar"><span className="section-kicker">01 / {t.contact.form}</span><h2>{locale === "ru" ? "Без лишнего. Только важное." : "No pressure. Just the essentials."}</h2><p>{locale === "ru" ? "Достаточно рассказать, чем занимается ваша компания и какую задачу должен решать сайт." : "A little context about your business and what the website needs to do is enough to get started."}</p><div className="contact-direct"><span className="eyebrow">{locale === "ru" ? "Или напрямую" : "Or contact me directly"}</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={`tel:${siteConfig.phone.href}`}>{siteConfig.phone.display[locale]}</a></div>{!process.env.FORMSPREE_FORM_ID && <p className="contact-privacy-note">{t.contact.notConfigured}</p>}</aside>
        <div className="contact-form-wrap"><h2>{t.contact.form}</h2><ContactForm locale={locale} /></div>
      </div></section>
    </>
  );
}
