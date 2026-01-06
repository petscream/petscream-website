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
        background: "rgba(255, 246, 233, 0.78)",
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
        <button
          onClick={() => scrollToId("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#2B1B12",
          }}
        >
          <img
            src="/petscream-logo-transparent.png"
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

        <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {[
            ["About", "about"],
            ["FAQs", "faqs"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
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
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {label}
            </button>
          ))}

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
              background: "rgba(255,255,255,0.55)",
            }}
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
