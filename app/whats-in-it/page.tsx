export const metadata = {
  title: "What’s in it | Petscream",
  description:
    "Clean, simple ingredients. No unnecessary extras. A calmer approach to treats.",
};

const cards = [
  {
    title: "Clean, simple ingredients",
    text: "We keep recipes straightforward and intentional, with ingredients you can recognize.",
  },
  {
    title: "No unnecessary additives",
    text: "No fillers for the sake of it. If it doesn’t need to be there, we leave it out.",
  },
  {
    title: "Made in small, mindful portions",
    text: "Petscream is meant to be a treat, a small moment of joy you can feel good about.",
  },
  {
    title: "A calmer approach",
    text: "No exaggerated claims. Just thoughtful choices made with care and respect.",
  },
];

export default function WhatsInItPage() {
  return (
    <main style={{ maxWidth: 1050, margin: "0 auto", padding: "46px 20px" }}>
      <h1 style={{ fontSize: "2.2rem", margin: 0, letterSpacing: "-0.02em" }}>
        What’s in it
      </h1>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
        Simple choices. Clean ingredients. No unnecessary extras.
      </p>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {cards.map((c) => (
          <div
            key={c.title}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(43,27,18,0.12)",
              borderRadius: 18,
              padding: 16,
              boxShadow: "0 16px 35px rgba(43,27,18,0.08)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "1.05rem" }}>
              {c.title}
            </div>
            <div style={{ marginTop: 8, opacity: 0.9, lineHeight: 1.7 }}>
              {c.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 26, opacity: 0.85, lineHeight: 1.7 }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: 8 }}>A quick note</h2>
        <p style={{ margin: 0 }}>
          Every pet is different. Treats are best enjoyed in balanced portions
          and with attention to your pet’s individual needs and sensitivities.
        </p>
      </div>
    </main>
  );
}
