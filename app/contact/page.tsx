export default function ContactPage() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "56px 20px" }}>
      <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.5 }}>
        Chat with us
      </h1>

      <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.8, opacity: 0.92 }}>
        For now, the fastest way to reach us is Instagram.
      </p>

      <a
        href="https://www.instagram.com/petscreamnyc/"
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          color: "#2B1B12",
          padding: "12px 16px",
          borderRadius: 14,
          fontWeight: 800,
          border: "1px solid rgba(43,27,18,0.18)",
          background: "rgba(255,255,255,0.45)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
        }}
      >
        Message us on Instagram
      </a>
    </main>
  );
}
