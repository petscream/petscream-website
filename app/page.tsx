import Image from "next/image";
import Link from "next/link";
import WaitlistButton from "./components/WaitlistButton";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF6E9",
        color: "#2B1B12",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 16px",
      }}
    >
      {/* LOGO */}
      <Image
        src="/petscream-logo.jpg"
        alt="Petscream logo"
        width={240}
        height={240}
        priority
        style={{
          display: "block",
          background: "transparent",
          borderRadius: "50%",
          boxShadow: "0 18px 45px rgba(43,27,18,0.18)",
        }}
      />

      {/* SLOGAN */}
      <h1
        style={{
          marginTop: "22px",
          fontSize: "1.15rem",
          fontWeight: 600,
        }}
      >
        Extra joy. On purpose.
      </h1>

      <p
        style={{
          marginTop: "6px",
          fontSize: "0.95rem",
          opacity: 0.85,
        }}
      >
        Simple choices. Clean ingredients. No unnecessary extras.
      </p>

      {/* WAITLIST */}
      <div style={{ marginTop: "22px" }}>
        <WaitlistButton />
      </div>

      {/* CTA BUTTONS */}
      <div
        style={{
          marginTop: "26px",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/about">
          <button
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(43,27,18,0.15)",
              background: "#FFF",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Read our story
          </button>
        </Link>

        <Link href="/whats-in-it">
          <button
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(43,27,18,0.15)",
              background: "#FFF",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            What’s in it
          </button>
        </Link>
      </div>
    </main>
  );
}
