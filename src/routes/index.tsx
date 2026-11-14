import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

const pageTitle = "Youssef Abdelhady | Python & C++ Developer Portfolio";
const pageDescription =
  "Meet Youssef Abdelhady, a Python and C++ desktop developer creating practical applications, bilingual interfaces, technical content, and connected systems.";

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
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
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
              "@id": "/#person",
              name: "Youssef Abdelhady Qubaisy",
              jobTitle: "Python & C++ Desktop Developer",
              description: pageDescription,
              url: "/",
              image: "/images/youssef-portrait.jpg",
              email: "youssef.abdalhady.dev@gmail.com",
              knowsAbout: ["Python", "C++", "Tkinter", "Qt", "Desktop software", "Data processing", "UI/UX", "Arduino integration"],
              sameAs: [
                "https://www.linkedin.com/in/youssef-abdalhady-57111b38b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                "https://youtube.com/@tech.at.moment?si=cwTYUnw5WRDh9qDl",
                "https://www.instagram.com/youssef.kobaisy?srtk=MTZreTg4c2hvcWlheQ==",
                "https://www.facebook.com/profile.php?id=61596196576308",
              ],
            },
            {
              "@type": "WebSite",
              name: "Youssef Abdelhady",
              description: pageDescription,
              url: "/",
              inLanguage: ["en", "ar"],
              about: { "@id": "/#person" },
            },
            {
              "@type": "VideoObject",
              name: "Featured technical short by Youssef Abdelhady",
              description: "A technical short from Youssef Abdelhady's YouTube channel.",
              thumbnailUrl: "https://i.ytimg.com/vi/EjrtAx8dMII/hqdefault.jpg",
              embedUrl: "https://www.youtube.com/embed/EjrtAx8dMII",
              contentUrl: "https://youtube.com/shorts/EjrtAx8dMII?si=kp9miex8buGcOC2L",
            },
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
