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
        userSelect: "none",
      }}
    >
      {/* MAIN LOGO */}
      <Image
        src="/petscream-logo.jpg"
        alt="Petscream"
        width={320}
        height={320}
        priority
        style={{
          borderRadius: "24px",
          marginBottom: "24px",
        }}
      />

      {/* TAGLINE */}
      <p
        style={{
          fontSize: "18px",
          margin: 0,
        }}
      >
        Extra joy. On purpose.
      </p>

      {/* COMING SOON */}
      <div
        style={{
          marginTop: "28px",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        Coming soon
      </div>
    </main>
  );
}
