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
        userSelect: "none",
      }}
    >
      <h1 style={{ fontSize: "64px", margin: 0, fontWeight: 800 }}>
        Petscream{" "}
        <span aria-hidden="true" style={{ fontSize: "44px" }}>
          🐾🐾
        </span>
      </h1>

      <p style={{ fontSize: "18px", marginTop: "16px", marginBottom: "0" }}>
        Extra joy. On purpose.
      </p>

      <div style={{ marginTop: "28px", fontSize: "14px", opacity: 0.7 }}>
        Coming soon
      </div>
    </main>
  );
}
