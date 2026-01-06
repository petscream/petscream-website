export default function WhatsInItPage() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "56px 20px" }}>
      <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.5 }}>
        What&apos;s in it
      </h1>

      <p style={styles.lead}>
        Simple choices. Clean ingredients. No unnecessary extras.
      </p>

      <div style={styles.grid}>
        <Card
          title="Clean, simple ingredients"
          text="We keep recipes straightforward and intentional, with ingredients you can recognize."
        />
        <Card
          title="No unnecessary additives"
          text="No fillers for the sake of it. If it doesn’t need to be there, we leave it out."
        />
        <Card
          title="Made in small, mindful portions"
          text="Petscream is meant to be a treat, a small moment of joy you can feel good about."
        />
        <Card
          title="A calmer approach"
          text="No exaggerated claims. Just thoughtful choices made with care and respect."
        />
      </div>

      <section style={{ marginTop: 28 }}>
        <h2 style={styles.h2}>A quick note</h2>
        <p style={styles.p}>
          Every pet is different. Treats are best enjoyed in balanced portions and with attention to
          your pet’s individual needs and sensitivities.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={styles.h2}>Want the full ingredient list?</h2>
        <p style={styles.p}>
          We’ll share product specific details as each recipe launches. For now, feel free to reach
          out anytime.
        </p>
      </section>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.h3}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  lead: {
    marginTop: 14,
    fontSize: 18,
    lineHeight: 1.7,
    opacity: 0.92,
  },
  grid: {
    marginTop: 22,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
  },
  card: {
    border: "1px solid rgba(43,27,18,0.12)",
    background: "rgba(255,255,255,0.45)",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 10px 30px rgba(43,27,18,0.06)",
  },
  h3: {
    margin: 0,
    fontSize: "1.05rem",
    color: "#2B1B12",
  },
  cardText: {
    margin: "10px 0 0",
    lineHeight: 1.6,
    color: "rgba(43,27,18,0.85)",
    fontSize: "0.98rem",
  },
  h2: {
    fontSize: 22,
    margin: "0 0 10px",
    color: "#2B1B12",
    letterSpacing: -0.2,
  },
  p: {
    margin: 0,
    lineHeight: 1.7,
    opacity: 0.9,
    fontSize: 16,
  },
};
