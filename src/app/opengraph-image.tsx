import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${SITE.name} — luxury lashes, brows and makeup in West Hampstead`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a1610",
          color: "#fffaf0",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", letterSpacing: 8, fontSize: 18, color: "#e8d5a3" }}>
          WEST HAMPSTEAD · LONDON
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontFamily: "Georgia, serif", lineHeight: 0.95 }}>
            Ella’s Beauty
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#e8d5a3", maxWidth: 760 }}>
            Lashes, brows, makeup and skin — composed for you.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#c4a056" }}>
          ELLAS-BEAUTY.CO.UK
        </div>
      </div>
    ),
    size,
  );
}
