import type { Locale } from "@/config/site";

const translatedRoutes = new Set([
  "",
  "/services",
  "/portfolio",
  "/about",
  "/contact",
  "/thanks",
  "/privacy-policy",
  "/projects/northline",
  "/projects/atelier-form",
  "/projects/clearspace",
  "/projects/northline/demo",
  "/projects/atelier-form/demo",
  "/projects/clearspace/demo",
]);

export function languagePath(pathname: string, locale: Locale): string {
  const route = pathname.replace(/^\/(ru|en)(?=\/|$)/, "");
  return `/${locale}${translatedRoutes.has(route) ? route : ""}`;
}
