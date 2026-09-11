import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffdf8",
          borderRadius: "100%",
          border: "1px solid #C4A056",
          color: "#8c6a24",
          fontSize: 20,
          fontFamily: "Georgia, serif",
        }}
      >
        E
      </div>
    ),
    size,
  );
}
