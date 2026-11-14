import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

const pageTitle = "Python & C++ Desktop Developer | Youssef Kobaisy";
const pageDescription =
  "Youssef Kobaisy (Youssef Abdelhady), يوسف عبد الهادي، Python & C++ desktop developer in Egypt building practical software and bilingual applications.";
const siteUrl = "https://youssef-kobaisy.work";
const portraitUrl = `${siteUrl}/images/youssef-portrait.jpg`;
const socialImageUrl = `${siteUrl}/og-image.png`;
const logoUrl = `${siteUrl}/icon-512.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "google-site-verification", content: "hL5HJhoQ8C4mTRGr9Xso14BHr_vHRKkOhwh5yJLyL1w" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:image", content: socialImageUrl },
      { property: "og:image:secure_url", content: socialImageUrl },
      { property: "og:image:alt", content: "Youssef Abdelhady, Python and C++ desktop developer" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: siteUrl },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: socialImageUrl },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "alternate", hrefLang: "en", href: siteUrl },
      { rel: "alternate", hrefLang: "ar", href: siteUrl },
      { rel: "alternate", hrefLang: "x-default", href: siteUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              name: "Youssef Kobaisy",
              alternateName: ["Youssef Abdelhady", "يوسف عبد الهادي", "يوسف قبيصي"],
              description: pageDescription,
              url: siteUrl,
              inLanguage: ["en", "ar"],
              keywords: [
                "Python developer Egypt",
                "C++ desktop developer",
                "Qt developer",
                "Arduino serial communication",
                "invoice reconciliation",
                "مبرمج بايثون مصر",
                "مطور تطبيقات سطح مكتب",
                "يوسف عبد الهادي مبرمج",
              ],
            },
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "Youssef Kobaisy",
              alternateName: ["Youssef Abdelhady", "يوسف عبد الهادي", "يوسف قبيصي"],
              url: siteUrl,
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
                width: 512,
                height: 512,
              },
              image: logoUrl,
              sameAs: [
                "https://github.com/Youssef-kobaisy",
                "https://www.linkedin.com/in/youssef-abdalhady-57111b38b",
                "https://youtube.com/@tech.at.moment",
                "https://www.instagram.com/youssef.kobaisy",
                "https://www.facebook.com/profile.php?id=61596196576308",
              ],
            },
            {
              "@type": "ProfilePage",
              "@id": `${siteUrl}/#profile`,
              name: pageTitle,
              url: siteUrl,
              isPartOf: { "@id": `${siteUrl}/#website` },
              mainEntity: { "@id": `${siteUrl}/#person` },
              primaryImageOfPage: { "@id": `${siteUrl}/#portrait` },
              inLanguage: ["en", "ar"],
            },
            {
              "@type": "Person",
              "@id": `${siteUrl}/#person`,
              name: "Youssef Abdelhady",
              alternateName: ["Youssef Kobaisy", "يوسف عبد الهادي", "يوسف قبيصي"],
              jobTitle: "Python & C++ Desktop Developer",
              description: pageDescription,
              url: siteUrl,
              image: { "@id": `${siteUrl}/#portrait` },
              mainEntityOfPage: { "@id": `${siteUrl}/#profile` },
              worksFor: { "@id": `${siteUrl}/#organization` },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Elsewedy International Applied Technology School",
                address: { "@type": "PostalAddress", addressCountry: "EG" },
              },
              affiliation: {
                "@type": "EducationalOrganization",
                name: "Elsewedy International Applied Technology School",
              },
              knowsAbout: ["Python", "C++", "Qt", "Tkinter", "Arduino", "Serial communication", "Data processing", "Modular OOP", "UI/UX", "Software testing"],
              sameAs: [
                "https://github.com/Youssef-kobaisy",
                "https://www.linkedin.com/in/youssef-abdalhady-57111b38b",
                "https://youtube.com/@tech.at.moment",
                "https://www.instagram.com/youssef.kobaisy",
                "https://www.facebook.com/profile.php?id=61596196576308",
              ],
            },
            {
              "@type": "ImageObject",
              "@id": `${siteUrl}/#portrait`,
              url: portraitUrl,
              contentUrl: portraitUrl,
              width: 1080,
              height: 1685,
              caption: "Portrait of Youssef Kobaisy",
              inLanguage: ["en", "ar"],
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${siteUrl}/#invoice-reconciliation`,
              name: "Invoice Reconciliation",
              alternateName: "مطابقة الفواتير الضريبية",
              description: "A bilingual desktop application comparing Egyptian Tax Authority records with a company ledger and producing a clear report.",
              applicationCategory: "BusinessApplication",
              author: { "@id": `${siteUrl}/#person` },
              inLanguage: ["en", "ar"],
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${siteUrl}/#breadcrumbs`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              ],
            },
            {
              "@type": "VideoObject",
              name: "Featured technical short by Youssef Abdelhady",
              description: "A technical short from Youssef Abdelhady's YouTube channel.",
              thumbnailUrl: "https://i.ytimg.com/vi/EjrtAx8dMII/hqdefault.jpg",
              embedUrl: "https://www.youtube.com/embed/EjrtAx8dMII",
              contentUrl: "https://youtube.com/shorts/EjrtAx8dMII",
              publisher: { "@id": `${siteUrl}/#person` },
            },
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
