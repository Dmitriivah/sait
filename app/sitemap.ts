import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = ["", "/services", "/portfolio", "/about", "/contact", "/privacy-policy", "/thanks"];
const projects = ["northline", "atelier-form", "clearspace"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ["ru", "en"].flatMap((locale) =>
    [...routes, ...projects.map((project) => `/projects/${project}`)].map((route) => ({
      url: `${siteConfig.url}/${locale}${route}`,
      alternates: { languages: { ru: `${siteConfig.url}/ru${route}`, en: `${siteConfig.url}/en${route}` } },
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.7 : 0.8,
    })),
  ).filter((entry) => !entry.url.endsWith("/thanks"));
}
