import Image from "next/image";
import Link from "next/link";

const BRAND = {
  bg: "#FFF6E9",
  ink: "#2B1B12",
  line: "rgba(43,27,18,0.12)",
  panel: "#FFFFFF",
};

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: BRAND.bg,
        borderBottom: `1px solid ${BRAND.line}`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Left: Logo + Brand */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: BRAND.ink,
          }}
          aria-label="Go to home"
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: BRAND.panel,
              boxShadow: "0 10px 25px rgba(43,27,18,0.12)",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src="/petscream-logo.jpg"
              alt="Petscream – clean, mindful treats for dogs"
              width={36}
              height={36}
              priority
            />
          </div>

          <span
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Petscream
          </span>
        </Link>

        {/* Right: Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/about"
            style={{
              textDecoration: "none",
              color: BRAND.ink,
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            Our story
          </Link>

          <Link
            href="/whats-in-it"
            style={{
              textDecoration: "none",
              color: BRAND.ink,
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            What’s in it
          </Link>

          <Link
            href="/faqs"
            style={{
              textDecoration: "none",
              color: BRAND.ink,
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              color: BRAND.ink,
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            Chat with us
          </Link>

          <a
            href="https://www.instagram.com/petscreamnyc/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 12,
              background: BRAND.panel,
              border: `1px solid ${BRAND.line}`,
              boxShadow: "0 10px 25px rgba(43,27,18,0.10)",
              textDecoration: "none",
              color: BRAND.ink,
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: 16 }} aria-hidden>
              ⎋
            </span>
            Share the joy
          </a>
        </nav>
      </div>
    </header>
  );
}
