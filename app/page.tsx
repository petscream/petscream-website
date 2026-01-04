export default function Home() {
  const BRAND = {
    bg: "#FFF6E9",       // krem
    ink: "#2B1B12",      // koyu kahve
    orange: "#F4A63A",   // petscream turuncu
    teal: "#2FB7B5",     // arka halkalar vibe
    panel: "#FFFFFF",    // kart beyazı
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
      {/* Top bar */}
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
          {/* Logo */}
          <img
            src="/app/petscream-logo.jpg"
            alt="Petscream logo"
            style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              objectFit: "cover",
              boxShadow: "0 10px 22px rgba(43,27,18,0.12)",
              border: "2px solid rgba(43,27,18,0.08)",
              background: BRAND.panel,
            }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: 0.2,
              }}
            >
              Petscream
            </div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              Treats that feel like a smile 🐾
            </div>
          </div>
        </div>

        <a
          href="https://www.instagram.com/"
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
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 24,
          alignItems: "center",
        }}
      >
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
              margin: "16px 0 8px",
              fontSize: 54,
              lineHeight: 1.02,
              letterSpacing: -0.6,
              fontWeight: 950,
              textTransform: "none",
            }}
          >
            Not essential.
            <br />
            Intentional.
          </h1>

          <p style={{ margin: "10px 0 0", fontSize: 18, lineHeight: 1.5, opacity: 0.9 }}>
            Extra. On purpose.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#share"
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
              href="https://www.instagram.com/"
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
          </div>

          <p style={{ marginTop: 14, fontSize: 13, opacity: 0.78, lineHeight: 1.45 }}>
            Drop a pic, a tiny review, or a “my pet approved” message. We might feature you 💛
          </p>
        </div>

        {/* Right card */}
        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(43,27,18,0.10)",
            borderRadius: 22,
            padding: 18,
            boxShadow: "0 20px 45px rgba(43,27,18,0.10)",
          }}
        >
          <div
            style={{
              borderRadius: 18,
              padding: 16,
              background:
                "radial-gradient(240px 180px at 20% 20%, rgba(47,183,181,0.22), transparent 60%)," +
                "radial-gradient(260px 200px at 80% 10%, rgba(244,166,58,0.22), transparent 60%)," +
                "rgba(255,255,255,0.85)",
              border: "1px solid rgba(43,27,18,0.08)",
            }}
          >
            <div style={{ fontWeight: 950, fontSize: 16 }}>Quick vibe check 🍦</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85, lineHeight: 1.45 }}>
              Cute treats. Happy pets. Clean ingredients.
              <br />
              Small batches, big smiles.
            </div>

            <div
              style={{
                marginTop: 14,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div
                style={{
                  borderRadius: 14,
                  padding: 12,
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(43,27,18,0.08)",
                }}
              >
                <div style={{ fontWeight: 950, fontSize: 13 }}>Pets first</div>
                <div style={{ fontSize: 12, opacity: 0.82, marginTop: 6 }}>
                  Made for dogs, cats, and all the cuties in between.
                </div>
              </div>

              <div
                style={{
                  borderRadius: 14,
                  padding: 12,
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(43,27,18,0.08)",
                }}
              >
                <div style={{ fontWeight: 950, fontSize: 13 }}>Joy energy</div>
                <div style={{ fontSize: 12, opacity: 0.82, marginTop: 6 }}>
                  Simple, sweet, and a little extra.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor section for next steps */}
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
