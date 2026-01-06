import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/petscreamnyc/";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        background: "rgba(255, 246, 233, 0.85)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(43, 27, 18, 0.10)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Left: Logo only */}
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Image
          src="/icon.png"
          alt="Petscream logo"
          width={56}
          height={56}
          priority
          style={{
            display: "block",
            borderRadius: "8px",
          }}
        />
      </a>

      {/* Right: Instagram */}
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "#2B1B12",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Instagram
      </a>
    </header>
  );
}
