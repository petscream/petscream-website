import Image from "next/image";
import Link from "next/link";
import WaitlistButton from "./components/WaitlistButton";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "36px 18px 56px",
      }}
    >
      <section
        style={{
          minHeight: "calc(100vh - 90px)",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "min(720px, 96vw)" }}>
          <div
            style={{
              background: "#FFF",
              borderRadius: 28,
              padding: 26,
              boxShadow: "0 26px 70px rgba(43,27,18,0.14)",
              border: "1px solid rgba(43,27,18,0.10)",
              display: "grid",
              justifyItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "#FFF",
                borderRadius: 22,
                padding: 22,
                boxShadow: "0 18px 50px rgba(43,27,18,0.12)",
                border: "1px solid rgba(43,27,18,0.10)",
              }}
            >
              <Image
                src="/petscream-logo.jpg"
                alt="Petscream logo"
                width={280}
                height={280}
                priority
                style={{ borderRadius: 18 }}
              />
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "1.15rem",
                fontWeight: 800,
              }}
            >
              Extra joy. On purpose.
            </p>

            <p
              style={{
                margin: 0,
                opacity: 0.85,
                fontSize: "1rem",
              }}
            >
              Simple choices. Clean ingredients. No unnecessary extras.
            </p>

            <div style={{ marginTop: 6 }}>
              <WaitlistButton />
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 6,
              }}
            >
              <Link
                href="/about"
                style={{
                  textDecoration: "none",
                  background: "#FFF",
                  border: "1px solid rgba(43,27,18,0.14)",
                  padding: "12px 16px",
                  borderRadius: 14,
                  fontWeight: 900,
                  color: "#2B1B12",
                  boxShadow: "0 12px 26px rgba(43,27,18,0.10)",
                }}
              >
                Read our story
              </Link>

              <Link
                href="/whats-in-it"
                style={{
                  textDecoration: "none",
                  background: "#FFF",
                  border: "1px solid rgba(43,27,18,0.14)",
                  padding: "12px 16px",
                  borderRadius: 14,
                  fontWeight: 900,
                  color: "#2B1B12",
                  boxShadow: "0 12px 26px rgba(43,27,18,0.10)",
                }}
              >
                What’s in it
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
