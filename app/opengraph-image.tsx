import { ImageResponse } from "next/og";

export const alt =
  "UniFeeWise — LPUNEST 2027 Fee Calculator, Free CBT Mock Test & Previous Year Papers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(ellipse at 80% 0%, rgba(234, 88, 12, 0.25) 0%, transparent 60%), radial-gradient(ellipse at 20% 100%, rgba(5, 150, 105, 0.2) 0%, transparent 60%)",
          padding: "70px 80px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top Header: Brand & Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 900,
                fontSize: 28,
                boxShadow: "0 10px 25px rgba(234, 88, 12, 0.4)",
              }}
            >
              UF
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                }}
              >
                Uni<span style={{ color: "#ea580c" }}>Fee</span>Wise
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#94a3b8",
                  letterSpacing: "0.5px",
                }}
              >
                2027 ADMISSION EDITION
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 9999,
              border: "1px solid rgba(234, 88, 12, 0.4)",
              backgroundColor: "rgba(234, 88, 12, 0.12)",
              color: "#fb923c",
              fontSize: 16,
              fontWeight: 800,
            }}
          >
            Zero Forced Gate • Free Access
          </div>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 1000,
          }}
        >
          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
              color: "#ffffff",
            }}
          >
            LPUNEST 2027 Fee Calculator, Free CBT Mock Test &amp; Solved Papers
          </h1>
          <p
            style={{
              fontSize: 22,
              color: "#cbd5e1",
              lineHeight: 1.4,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Estimate exact 4-year tuition, predict your Category 1 scholarship, and practice 100-question computer-based mock exams with authentic derivations.
          </p>
        </div>

        {/* Bottom Banner: Coupon Code */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 28px",
            borderRadius: 20,
            border: "1px solid rgba(16, 185, 129, 0.3)",
            backgroundColor: "rgba(6, 78, 59, 0.3)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#34d399",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Verified 20% Form Discount
            </span>
            <span
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              Boys: Rs. 800 (Save Rs. 200) • Girls: Rs. 400 (Save Rs. 100)
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 24px",
              borderRadius: 14,
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
            }}
          >
            <span style={{ fontSize: 14, color: "#94a3b8", fontWeight: 700 }}>
              COUPON:
            </span>
            <span
              style={{
                fontSize: 26,
                fontWeight: 900,
                color: "#f97316",
                letterSpacing: "2px",
                fontFamily: "monospace",
              }}
            >
              LPUMZW722
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
