const cardStyle: React.CSSProperties = {
  background: "#FFF",
  border: "1px solid rgba(43,27,18,0.12)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 16px 40px rgba(43,27,18,0.10)",
  minHeight: 140,
};

export default function WhatsInItPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "42px 18px 70px" }}>
      <h1 style={{ fontSize: "3rem", margin: "0 0 6px", letterSpacing: "-0.5px" }}>
        What’s in it
      </h1>
      <p style={{ margin: "0 0 22px", opacity: 0.85 }}>
        Simple choices. Clean ingredients. No unnecessary extras.
      </p>

      {/* Grid without styled-jsx (Server Component safe) */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ margin: "0 0 10px" }}>Clean, simple ingredients</h3>
          <p style={{ margin: 0, lineHeight: 1.75, opacity: 0.9 }}>
            We keep recipes straightforward and intentional, with ingredients you can recognize.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ margin: "0 0 10px" }}>No unnecessary additives</h3>
          <p style={{ margin: 0, lineHeight: 1.75, opacity: 0.9 }}>
            No fillers for the sake of it. If it doesn’t need to be there, we leave it out.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ margin: "0 0 10px" }}>Made in small, mindful portions</h3>
          <p style={{ margin: 0, lineHeight: 1.75, opacity: 0.9 }}>
            Petscream is meant to be a treat, a small moment of joy you can feel good about.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ margin: "0 0 10px" }}>A calmer approach</h3>
          <p style={{ margin: 0, lineHeight: 1.75, opacity: 0.9 }}>
            No exaggerated claims. Just thoughtful choices made with care and respect.
          </p>
        </div>
      </section>

      <h2 style={{ marginTop: 28, marginBottom: 8, fontSize: "1.9rem" }}>A quick note</h2>
      <p style={{ maxWidth: 820, lineHeight: 1.8, opacity: 0.92, margin: 0 }}>
        Every pet is different. Treats are best enjoyed in balanced portions and with attention to your pet’s individual needs and sensitivities.
      </p>
    </main>
  );
}
