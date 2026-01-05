export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFF6E9",
        color: "#2B1B12",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>
        Petscream 🐾
      </h1>

      <p style={{ fontSize: "1.25rem", maxWidth: "480px" }}>
        Extra joy. On purpose.
      </p>

      <div style={{ marginTop: "32px", fontSize: "0.95rem", opacity: 0.7 }}>
        Coming soon
      </div>
    </main>
  );
}
