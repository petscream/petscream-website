export default function WhatsInItPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      {/* Title */}
      <section style={{ textAlign: "center", marginBottom: "64px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
          What’s in it?
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Simple choices. Clean ingredients. Nothing your pet doesn’t need.
        </p>
      </section>

      {/* Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginBottom: "64px",
        }}
      >
        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>Clean, simple ingredients</h3>
          <p>
            We keep our recipes straightforward and intentional, using
            ingredients you can recognize and feel comfortable with.
            <br />
            <br />
            No hidden blends. No unnecessary complexity. Just real food,
            thoughtfully chosen.
          </p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>No unnecessary additives</h3>
          <p>
            If an ingredient doesn’t serve a clear purpose, it doesn’t belong
            here.
            <br />
            <br />
            No fillers. No artificial sweeteners. No shortcuts. Only what’s
            needed, and nothing more.
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>Made in small, mindful portions</h3>
          <p>
            Petscream is meant to be a treat, not a replacement.
            <br />
            <br />
            Small portions help keep moments joyful, balanced, and easy on
            sensitive tummies.
          </p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <h3>A calmer approach</h3>
          <p>
            We don’t believe in exaggerated claims or loud promises.
            <br />
            <br />
            Just thoughtful choices made with care, respect, and attention to
            how pets actually experience food.
          </p>
        </div>
      </section>

      {/* Quick note */}
      <section style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h3 style={{ marginBottom: "8px" }}>A quick note</h3>
        <p style={{ opacity: 0.8 }}>
          Every pet is different. Treats are best enjoyed in balanced portions
          and with attention to your pet’s individual needs and sensitivities.
          <br />
          <br />
          When in doubt, less is always more.
        </p>
      </section>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff7eb",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};
