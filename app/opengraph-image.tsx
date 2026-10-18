import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#111311", color: "#f3f2eb", padding: "72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#d8f05c", fontSize: "22px", letterSpacing: "8px" }}>● DMITRY</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ fontSize: "68px", lineHeight: 1.05, maxWidth: "950px" }}>Websites built to reflect the quality of your business.</div>
        <div style={{ color: "#aaa99f", fontSize: "24px", letterSpacing: "2px" }}>INDEPENDENT WEB DESIGN & DEVELOPMENT</div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", color: "#d8f05c", fontSize: "22px" }}>DESIGN · DEVELOPMENT · DIGITAL</div>
    </div>,
    size,
  );
}
