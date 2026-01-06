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
      <img
        src="/logo.png?v=3"
        alt="Petscream logo"
        width={260}
        height={260}
        style={{
          display: "block",
          borderRadius: "24px",
        }}
      />

      <p style={{ fontSize: "1.1rem", marginTop: "18px" }}>
        Extra joy. On purpose.
      </p>

      <div style={{ marginTop: "16px", fontSize: "0.95rem", opacity: 0.7 }}>
        Coming soon
      </div>
    </main>
  );
}
