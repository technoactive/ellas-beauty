import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Ella’s Beauty",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F0",
    theme_color: "#C4A056",
    lang: "en-GB",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
