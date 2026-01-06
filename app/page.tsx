import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 280,
          height: 280,
          borderRadius: 28,
          overflow: "hidden",
          background: "rgba(255,255,255,0.35)",
          border: "1px solid rgba(43,27,18,0.10)",
          boxShadow: "0 22px 50px rgba(0,0,0,0.12)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Image
          src="/petscream-logo.jpg"
          alt="Petscream logo"
          width={520}
          height={520}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </div>

      <p
        style={{
          marginTop: 18,
          fontSize: 18,
          fontWeight: 650,
          opacity: 0.9,
        }}
      >
        <span
          style={{
            padding: "8px 12px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.35)",
            border: "1px solid rgba(43,27,18,0.10)",
          }}
        >
          Extra joy. On purpose.
        </span>
      </p>

      <div style={{ marginTop: 14, fontSize: 14, opacity: 0.7 }}>
        Coming soon
      </div>
    </main>
  );
}
