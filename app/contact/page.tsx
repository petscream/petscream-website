export const metadata = {
  title: "Chat with us | Petscream",
  description: "Questions, collabs, or just want to say hi? Reach out to Petscream.",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "46px 20px" }}>
      <h1 style={{ fontSize: "2.2rem", margin: 0, letterSpacing: "-0.02em" }}>
        Chat with us
      </h1>

      <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.7 }}>
        Want to ask something, collaborate, or just share your pet’s favorite
        treat moment? We’d love to hear from you.
      </p>

      <div
        style={{
          marginTop: 18,
          background: "#FFFFFF",
          border: "1px solid rgba(43,27,18,0.12)",
          borderRadius: 18,
          padding: 16,
          boxShadow: "0 16px 35px rgba(43,27,18,0.08)",
          display: "grid",
          gap: 10,
        }}
      >
        <a
          href="mailto:info@petscream.com"
          style={{ textDecoration: "none", color: "#2B1B12", fontWeight: 800 }}
        >
          Email: info@petscream.com
        </a>

        <a
          href="https://www.instagram.com/petscreamnyc/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#2B1B12", fontWeight: 800 }}
        >
          Instagram: @petscreamnyc
        </a>
      </div>
    </main>
  );
}
