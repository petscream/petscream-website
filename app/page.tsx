import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/petscreamnyc/";
const EMAIL = "mailto:info@petscream.com";
const PHONE = "tel:7189732552";

export default function Home() {
  const BRAND = {
    bg: "#FFF6E9",
    ink: "#2B1B12",
    orange: "#F4A63A",
    panel: "#FFFFFF",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `radial-gradient(1200px 600px at 70% 10%, rgba(47,183,181,0.18), transparent 60%),
                     radial-gradient(900px 500px at 20% 20%, rgba(244,166,58,0.16), transparent 55%),
                     ${BRAND.bg}`,
        color: BRAND.ink,
        fontFamily:
          'ui-rounded, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "22px 18px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/app/petscream-logo.jpg"
            alt="Petscream logo"
            width={54}
            height={54}
            priority
            style={{
              borderRadius: 14,
              objectFit: "cover",
              boxShadow: "0 10px 22px rgba(43,27,18,0.12)",
              border: "2px solid rgba(43,27,18,0.08)",
              background: BRAND.panel,
            }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 0.2 }}>
              Petscream
            </div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              Treats that feel like a smile 🐾
            </div>
          </div>
        </div>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: BRAND.ink,
            fontWeight: 800,
            fontSize: 13,
            padding: "10px 12px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(43,27,18,0.10)",
            boxShadow: "0 8px 18px rgba(43,27,18,0.08)",
          }}
          title="Open Instagram"
        >
          Feedback 💬
        </a>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "34px 18px 64px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(43,27,18,0.10)",
              boxShadow: "0 10px 22px rgba(43,27,18,0.08)",
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: BRAND.orange,
                boxShadow: "0 0 0 3px rgba(244,166,58,0.18)",
              }}
            />
            Beyond basics
          </div>

          <h1
            style={{
              margin: "16px 0 10px",
              fontSize: 54,
              lineHeight: 1.02,
              letterSpacing: -0.6,
              fontWeight: 950,
            }}
          >
            Not essential.
            <br />
            Intentional.
          </h1>

          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, opacity: 0.9 }}>
            Extra. On purpose.
          </p>

          <p style={{ margin: "14px 0 0", fontSize: 14, opacity: 0.82, lineHeight: 1.5 }}>
            Our signature blend is goat milk + yogurt + peanut butter + fruit.
            Simple ingredients, thoughtfully picked, made for happy tails and purrs.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: BRAND.ink,
                fontWeight: 900,
                padding: "13px 18px",
                borderRadius: 16,
                background: BRAND.orange,
                boxShadow: "0 14px 26px rgba(244,166,58,0.30)",
                border: "1px solid rgba(43,27,18,0.10)",
              }}
            >
              Bring the joy ✨
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: BRAND.ink,
                fontWeight: 900,
                padding: "13px 18px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.85)",
                boxShadow: "0 14px 26px rgba(43,27,18,0.10)",
                border: "1px solid rgba(43,27,18,0.12)",
              }}
            >
              Share the joy with your pet 🐾
            </a>

            <a
              href={EMAIL}
              style={{
                textDecoration: "none",
                color: BRAND.ink,
                fontWeight: 900,
                padding: "13px 18px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(43,27,18,0.12)",
              }}
            >
              Email us
            </a>

            <a
              href={PHONE}
              style={{
                textDecoration: "none",
                color: BRAND.ink,
                fontWeight: 900,
                padding: "13px 18px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(43,27,18,0.12)",
              }}
            >
              Call 718-973-2552
            </a>
          </div>

          <p style={{ marginTop: 14, fontSize: 13, opacity: 0.78, lineHeight: 1.45 }}>
            Drop a pic, a tiny review, or a “my pet approved” message. We might feature you 💛
          </p>
        </div>

        {/* Right logo */}
        <div
          style={{
            display: "grid",
            placeItems: "center",
            padding: 10,
          }}
        >
          <Image
            src="/app/petscream-logo.jpg"
            alt="Petscream logo"
            width={520}
            height={520}
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: 22,
              boxShadow: "0 20px 45px rgba(43,27,18,0.12)",
              border: "1px solid rgba(43,27,18,0.10)",
              background: "rgba(255,255,255,0.55)",
            }}
          />
        </div>
      </section>

      {/* Next section placeholder */}
      <section
        id="share"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 18px 80px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.70)",
            border: "1px solid rgba(43,27,18,0.10)",
            borderRadius: 22,
            padding: 18,
            boxShadow: "0 18px 40px rgba(43,27,18,0.10)",
          }}
        >
          <div style={{ fontWeight: 950, fontSize: 18 }}>
            Got a cute moment? Share it 🐾📸
          </div>
          <div style={{ marginTop: 8, opacity: 0.86, lineHeight: 1.5 }}>
            Post a photo with your pet and tag us, or send a quick note like “approved!”
            <br />
            We love seeing happy pets.
          </div>
        </div>
      </section>
    </main>
  );
}
