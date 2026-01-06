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
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Image
          src="/logo.png"
          alt="Petscream logo"
          width={64}
          height={64}
          priority
          style={{ display: "block" }}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#2B1B12",
            lineHeight: 1,
          }}
        >
          Petscream
        </span>
      </div>

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
