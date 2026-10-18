export const siteConfig = {
  name: "Dmitry",
  brandName: { ru: "Дмитрий", en: "Dmitry" },
  role: "Independent web designer & developer",
  description:
    "Modern websites and landing pages for service businesses. Thoughtful structure, considered design, and responsive development.",
  url: process.env.SITE_URL ?? "http://localhost:3000",
  email: "dimavahterov2006@mail.ru",
  phone: {
    display: { ru: "8 (980) 198-02-18", en: "+7 (980) 198-02-18" },
    href: "+79801980218",
  },
  socialLinks: {
    linkedin: "",
    behance: "",
  },
  languages: ["ru", "en"] as const,
  defaultLanguage: "ru" as const,
};

export type Locale = (typeof siteConfig.languages)[number];

export function isLocale(value: string): value is Locale {
  return siteConfig.languages.some((locale) => locale === value);
}
