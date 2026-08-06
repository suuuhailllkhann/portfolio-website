import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, changeFrequency: "monthly", priority: 1 }, { url: `${siteConfig.url}/projects/healthcare-readmission-prediction`, changeFrequency: "monthly", priority: 0.8 }];
}
