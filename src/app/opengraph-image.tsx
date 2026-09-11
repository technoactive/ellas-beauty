import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${SITE.name} — luxury lashes, brows and makeup in West Hampstead`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fbf7f0",
          color: "#1a1610",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            height: 6,
            width: "100%",
            borderRadius: 999,
            background:
              "linear-gradient(90deg,#8c6a24,#e8d5a3,#c4a056,#f3e2b8,#8c6a24)",
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 520,
            }}
          >
            <div
              style={{
                display: "flex",
                letterSpacing: 8,
                fontSize: 18,
                color: "#8c6a24",
              }}
            >
              WEST HAMPSTEAD · LONDON
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 60,
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                color: "#1a1610",
              }}
            >
              Embrace your beauty.
            </div>
            <div
              style={{
                marginTop: 22,
                fontSize: 26,
                lineHeight: 1.4,
                color: "#6b5f4e",
              }}
            >
              Award-winning lashes, brows, skin and makeup — in the salon or
              mobile across London.
            </div>
          </div>
          <img
            src={logoSrc}
            alt=""
            width={500}
            height={247}
            style={{ width: 500, height: 247 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            color: "#8c6a24",
          }}
        >
          <span>ELLAS-BEAUTY.CO.UK</span>
          <span>BOOK ON FRESHA</span>
        </div>
      </div>
    ),
    size,
  );
}
