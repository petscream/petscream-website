import Image from "next/image";

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
      <Image
        src="/logo.png"
        alt="Petscream"
        width={320}
        height={320}
        priority
        style={{
          background: "transparent",
          borderRadius: 0,
          boxShadow: "none",
        }}
      />

      <p style={{ fontSize: "1.1rem", marginTop: "18px" }}>
        Extra joy. On purpose.
      </p>

      <div style={{ marginTop: "18px", fontSize: "0.95rem", opacity: 0.7 }}>
        Coming soon
      </div>

      <a
        href="https://www.instagram.com/petscreamnyc/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "22px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          color: "#2B1B12",
          opacity: 0.9,
        }}
      >
        Instagram
      </a>
    </main>
  );
}
