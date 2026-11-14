import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

const pageTitle = "Youssef Abdelhady | Python & C++ Desktop Developer";
const pageDescription =
  "Explore Youssef Abdelhady's portfolio of Python and C++ desktop applications, bilingual interfaces, invoice reconciliation, and practical software solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "google-site-verification", content: "hL5HJhoQ8C4mTRGr9Xso14BHr_vHRKkOhwh5yJLyL1w" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:image", content: "/images/youssef-portrait.jpg" },
      { property: "og:image:alt", content: "Portrait of Youssef Abdelhady Qubaisy" },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: "/images/youssef-portrait.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Youssef Abdelhady Qubaisy",
              jobTitle: "Python & C++ Desktop Developer",
              description: pageDescription,
              url: "/",
              image: "/images/youssef-portrait.jpg",
              email: "youssef.abdalhady.dev@gmail.com",
              sameAs: ["https://www.linkedin.com/in/youssef-abdalhady-571b01349/"],
            },
            {
              "@type": "WebSite",
              name: "Youssef Abdelhady",
              description: pageDescription,
              url: "/",
              inLanguage: ["en", "ar"],
            },
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
