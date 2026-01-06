import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/petscreamnyc/";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "transparent",
      }}
    >
      <a
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Image
          src="/logo.png"
          alt="Petscream"
          width={48}
          height={48}
          priority
          style={{
            borderRadius: "12px",
            boxShadow: "0 8px 18px rgba(0,0,0,0.10)",
          }}
        />
        <span style={{ fontWeight: 700, fontSize: "18px" }}>Petscream</span>
      </a>

      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          color: "#2B1B12",
          opacity: 0.9,
        }}
      >
        Instagram
      </a>
    </header>
  );
}
