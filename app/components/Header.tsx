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
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Image src="/logo.png" alt="Petscream" width={44} height={44} priority />
        <strong style={{ fontSize: "18px" }}>Petscream</strong>
      </div>

      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit", fontSize: "14px", opacity: 0.9 }}
      >
        Instagram
      </a>
    </header>
  );
}
