import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 80px)",
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
      <Image
        src="/logo.png"
        alt="Petscream logo"
        width={260}
        height={260}
        priority
        style={{
          borderRadius: "28px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
        }}
      />

      <p style={{ fontSize: "1.1rem", marginTop: "18px" }}>
        Extra joy. On purpose.
      </p>

      <div style={{ marginTop: "18px", fontSize: "0.95rem", opacity: 0.7 }}>
        Coming soon
      </div>
    </main>
  );
}
