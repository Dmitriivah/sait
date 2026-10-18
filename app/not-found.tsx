import Link from "next/link";

export default function NotFound() {
  return <main className="confirmation-section section-space"><div className="container confirmation-inner"><span className="eyebrow">404 / НЕ НАЙДЕНО</span><h1>Страница не найдена.</h1><Link className="button button-accent" href="/ru">На главную ↗</Link></div></main>;
}
