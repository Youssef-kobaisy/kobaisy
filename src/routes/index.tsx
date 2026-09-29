import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Youssef Abdelhady — Software Developer" },
      { name: "description", content: "Portfolio of Youssef Abdelhady Qubaisy, a software developer building desktop systems, connected hardware, and thoughtful digital products." },
      { property: "og:title", content: "Youssef Abdelhady — Software Developer" },
      { property: "og:description", content: "Software, systems, and product experiences built with clarity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
