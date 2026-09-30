import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Youssef Abdelhady — Desktop Software Developer" },
      { name: "description", content: "Portfolio of Youssef Abdelhady Qubaisy, a desktop software developer building Python applications, C++ systems, and connected hardware tools." },
      { property: "og:title", content: "Youssef Abdelhady — Desktop Software Developer" },
      { property: "og:description", content: "Desktop software, problem-solving, and connected systems built with Python and C++." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
