"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocalizedNotFound() {
  const locale = usePathname().split("/")[1] === "en" ? "en" : "ru";
  return <section className="confirmation-section section-space"><div className="container confirmation-inner"><span className="eyebrow">404 / {locale === "ru" ? "Не найдено" : "Not found"}</span><h1>{locale === "ru" ? "Кажется, этой страницы здесь нет." : "This page doesn't seem to exist."}</h1><p>{locale === "ru" ? "Проверьте адрес или вернитесь на главную." : "Check the address or head back to the homepage."}</p><Link className="button button-accent" href={`/${locale}`}>{locale === "ru" ? "На главную" : "Back home"} ↗</Link></div></section>;
}
