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
      {/* Left: Logo + Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Image
          src="/petscream-logo.jpg"
          al
