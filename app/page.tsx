import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/petscreamnyc/";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF6E9",
        color: "#2B1B12",
        fontFamily:
          'ui-rounded, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/petscream-logo.jpg"
            alt="Petscream logo"
            width={56}
            height={56}
            style={{
              borderRadius: 14,
              boxShadow: "0 10px 22px rgba(43,27,18,0.12)",
            }}
          />
          <strong style={{ fontSize: 18 }}>Petscream</strong>
        </div>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            fontWeight: 900,
            fontSize: 13,
            padding: "10px 14px",
            borderRadius: 999,
            background: "#FFFFFF",
            border: "1px solid rgba(43,27,18,0.12)",
          }}
        >
          Share the joy 🐾
        </a>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "40px 18px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 900, opacity: 0.7 }}>Beyond Basics</p>

          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              margin: "16px 0",
            }}
          >
            Not essential.
            <br />
            Intentional.
          </h1>

          <p style={{ fontSize: 20, marginBottom: 24 }}>
            Extra joy. On purpose.
          </p>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              textDecoration: "none",
              fontWeight: 900,
              padding: "14px 22px",
              borderRadius: 16,
              background: "#F4A63A",
              color: "#2B1B12",
              boxShadow: "0 14px 26px rgba(244,166,58,0.35)",
            }}
          >
            Bring the joy ✨
          </a>
        </div>

        <Image
          src="/petscream-logo.jpg"
          alt="Petscream logo"
          width={520}
          height={520}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 24,
            boxShadow: "0 20px 45px rgba(43,27,18,0.15)",
          }}
        />
      </section>
    </main>
  );
}
