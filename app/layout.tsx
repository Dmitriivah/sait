import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Dmitry — Web design & development", template: "%s — Dmitry" },
  description: siteConfig.description,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = location.pathname.split('/')[1] === 'en' ? 'en' : 'ru';` }} /></head><body>{children}</body></html>;
}
