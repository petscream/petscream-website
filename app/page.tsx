import Image from "next/image";
import WaitlistButton from "./components/WaitlistButton";

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
      {/* LOGO */}
      <div
        style={{
          background: "#FFF",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 20px 50px rgba(43,27,18,0.15)",
        }}
      >
        <Image
          src="/petscream-logo.png"
          alt="Petscream logo"
          width={220}
          height={220}
          priority
        />
      </div>

      {/* SLOGAN */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.1rem",
          fontWeight: 500,
          opacity: 0.9,
        }}
      >
        Extra joy. On purpose.
      </p>

      {/* WAITLIST BUTONU */}
      <div style={{ marginTop: "18px" }}>
        <WaitlistButton />
      </div>
    </main>
  );
}
