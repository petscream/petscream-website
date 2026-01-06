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
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Image
  src="/logo.png"          // şeffaf png kullan
  alt="Petscream logo"
  width={64}
  height={64}
  priority
  style={{ borderRadius: "12px" }}
/>

        />
        <strong style={{ fontSize: "20px" }}>Petscream</strong>
      </div>

      {/* INSTAGRAM */}
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "#2B1B12",
          fontSize: "14px",
        }}
      >
        Instagram
      </a>
    </header>
  );
}
