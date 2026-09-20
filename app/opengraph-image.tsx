import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, North Highlands, CA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Open Graph image built from FFCC's brand copper and the church name.
// Swap to a real photo once the church supplies one large enough.
export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public/brand/ffcc-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          background: "#7a441b",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={markSrc} width={120} height={120} alt="" />
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#f2e0cf" }}>
            Welcome to
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, width: 150, height: 8, background: "#cd853f" }} />
        <div style={{ display: "flex", marginTop: 30, fontSize: 34, color: "#f2e0cf" }}>
          Sundays at {site.sundayWorship.time} · {site.address.street}, {site.address.city}, CA
        </div>
      </div>
    ),
    size,
  );
}
