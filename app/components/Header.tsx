import Link from "next/link";
import Image from "next/image";

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#2B1B12",
  fontWeight: 600,
  fontSize: "0.95rem",
  padding: "8px 10px",
  borderRadius: 10,
};

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,246,233,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(43,27,18,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#2B1B12",
            fontWeight: 800,
            letterSpacing: "-0.2px",
          }}
        >
          <Image
            src="/petscream-logo.jpg"
            alt="Petscream"
            width={36}
            height={36}
            style={{ borderRadius: 12 }}
            priority
          />
          <span style={{ fontSize: "1.2rem" }}>Petscream</span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Link href="/about" style={linkStyle}>
            Our story
          </Link>
          <Link href="/whats-in-it" style={linkStyle}>
            What’s in it
          </Link>
          <Link href="/faqs" style={linkStyle}>
            FAQs
          </Link>
          <Link href="/contact" style={linkStyle}>
            Chat with us
          </Link>

          <a
            href="https://www.instagram.com/petscreamnyc/"
            target="_blank"
            rel="noreferrer"
            style={{
              ...linkStyle,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(43,27,18,0.18)",
              background: "#FFF",
              boxShadow: "0 10px 24px rgba(43,27,18,0.10)",
              padding: "9px 12px",
              marginLeft: 6,
            }}
          >
            <span style={{ fontSize: "1rem" }}>◌</span>
            Share the joy
          </a>
        </nav>
      </div>
    </header>
  );
}
