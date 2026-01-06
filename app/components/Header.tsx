"use client";

const INSTAGRAM = "https://www.instagram.com/petscreamnyc/";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 246, 233, 0.86)",
        borderBottom: "1px solid rgba(43, 27, 18, 0.10)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Left: Brand */}
        <button
          type="button"
          onClick={() => scrollToId("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#2B1B12",
            padding: 0,
          }}
          aria-label="Go to top"
        >
          <img
            src="/logo.png"
            alt="Petscream"
            style={{
              width: 42,
              height: 42,
              objectFit: "contain",
              filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.10))",
            }}
          />
          <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>Petscream</span>
        </button>

        {/* Right: Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            type="button"
            onClick={() => scrollToId("about")}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#2B1B12",
              fontWeight: 600,
              opacity: 0.85,
              padding: "8px 10px",
              borderRadius: 10,
            }}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToId("faqs")}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#2B1B12",
              fontWeight: 600,
              opacity: 0.85,
              padding: "8px 10px",
              borderRadius: 10,
            }}
          >
            FAQs
          </button>

          <button
            type="button"
            onClick={() => scrollToId("contact")}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#2B1B12",
              fontWeight: 600,
              opacity: 0.85,
              padding: "8px 10px",
              borderRadius: 10,
            }}
          >
            Contact
          </button>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#2B1B12",
              fontWeight: 700,
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid rgba(43, 27, 18, 0.15)",
              backgroundColor: "rgba(255,255,255,0.55)",
            }}
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
