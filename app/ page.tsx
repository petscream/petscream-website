import Image from "next/image";
import Link from "next/link";
import WaitlistButton from "./components/WaitlistButton";

export const metadata = {
  title: "Petscream | Extra joy. On purpose.",
  description:
    "Simple choices. Clean ingredients. No unnecessary extras. Join the waitlist to be the first to know when Petscream launches.",
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "38px 20px 60px",
        textAlign: "center",
        background: "#FFF6E9",
        color: "#2B1B12",
      }}
    >
      <div
        style={{
          width: "min(560px, 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 22px 55px rgba(43,27,18,0.14)",
            border: "1px solid rgba(43,27,18,0.12)",
          }}
        >
          <Image
            src="/petscream-logo.jpg"
            alt="Petscream – clean, mindful treats for dogs"
            width={260}
            height={260}
            priority
          />
        </div>

        <h1
          style={{
            margin: "10px 0 0",
            fontSize: "1.15rem",
            fontWeight: 800,
            opacity: 0.95,
          }}
        >
          Extra joy. On purpose.
        </h1>

        <p style={{ margin: "0", opacity: 0.8, lineHeight: 1.5 }}>
          Simple choices. Clean ingredients. No unnecessary extras.
        </p>

        <div style={{ marginTop: 6 }}>
          <WaitlistButton />
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/about"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(43,27,18,0.18)",
              background: "#FFFFFF",
              textDecoration: "none",
              color: "#2B1B12",
              fontWeight: 800,
              boxShadow: "0 14px 30px rgba(43,27,18,0.08)",
            }}
          >
            Read our story
          </Link>

          <Link
            href="/whats-in-it"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(43,27,18,0.18)",
              background: "#FFFFFF",
              textDecoration: "none",
              color: "#2B1B12",
              fontWeight: 800,
              boxShadow: "0 14px 30px rgba(43,27,18,0.08)",
            }}
          >
            What’s in it
          </Link>
        </div>
      </div>
    </main>
  );
}
