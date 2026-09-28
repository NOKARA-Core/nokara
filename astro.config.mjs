import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// Support custom domain or Vercel production domain dynamically
const siteUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://nokara.biz.id");

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [icon(), sitemap()],
  // optional:
  // If your site will be available at different URLs (e.g. both https://nokara.biz.id and https://www.nokara.biz.id),
  // you can configure alternate URLs for SEO purposes.
  // If you only plan to use one canonical URL, you can omit alternateUrls.
  // alternateUrls: {
  //   canonical: "https://nokara.biz.id",
  //   // If you also want to support www.nokara.biz.id as an alternate URL:
  //   // alternate: "https://www.nokara.biz.id",
  // },
  // If you want to redirect one canonical URL to another, use the redirects object.
  // For example, to redirect from www to non-www:
  // redirects: {
  //   "https://www.nokara.biz.id": "https://nokara.biz.id",
  // },
});