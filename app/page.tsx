import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFF6E9",
        color: "#2B1B12",
        textAlign: "center",
        padding: "24px",
        userSelect: "none",
      }}
    >
      {/* MAIN LOGO */}
      <Image
        src="/petscream-logo.jpg"
        alt="Petscream"
        width={320}
        height={320}
        priority
