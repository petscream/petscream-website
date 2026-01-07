const itemStyle: React.CSSProperties = {
  background: "#FFF",
  border: "1px solid rgba(43,27,18,0.12)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 16px 40px rgba(43,27,18,0.10)",
};

export default function FaqsPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "42px 18px 70px" }}>
      <h1 style={{ fontSize: "3rem", margin: "0 0 16px", letterSpacing: "-0.5px" }}>FAQs</h1>

      <div style={{ maxWidth: 900, display: "grid", gap: 14 }}>
        <div style={itemStyle}>
          <h3 style={{ margin: "0 0 8px" }}>What is Petscream?</h3>
          <p style={{ margin: 0, opacity: 0.92, lineHeight: 1.8 }}>
            Petscream is a treat concept built around simple, clean ingredients and mindful portions. Extra joy. On purpose.
          </p>
        </div>

        <div style={itemStyle}>
          <h3 style={{ margin: "0 0 8px" }}>Is Petscream a meal replacement?</h3>
          <p style={{ margin: 0, opacity: 0.92, lineHeight: 1.8 }}>
            No. Petscream is meant to be a treat, a small moment of joy. Balanced portions matter.
          </p>
        </div>

        <div style={itemStyle}>
          <h3 style={{ margin: "0 0 8px" }}>Do you use unnecessary additives?</h3>
          <p style={{ margin: 0, opacity: 0.92, lineHeight: 1.8 }}>
            We focus on straightforward recipes and avoid extras that do not need to be there.
          </p>
        </div>

        <div style={itemStyle}>
          <h3 style={{ margin: "0 0 8px" }}>When are you launching?</h3>
          <p style={{ margin: 0, opacity: 0.92, lineHeight: 1.8 }}>
            We’re coming soon. Leave your email on the homepage to be the first to know.
          </p>
        </div>
      </div>
    </main>
  );
}
