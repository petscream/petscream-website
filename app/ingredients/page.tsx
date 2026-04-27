export default function IngredientsPage() {
  return (
    <main style={{
      maxWidth: 860,
      margin: "0 auto",
      padding: "52px 24px 80px",
      fontFamily: "ui-rounded, system-ui, sans-serif",
      color: "#2B1B12",
    }}>

      <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 8px", letterSpacing: "-0.03em" }}>
        What makes it different
      </h1>
      <p style={{ fontSize: 16, color: "#8a6a5a", margin: "0 0 40px", lineHeight: 1.6 }}>
        Real ingredients. Real benefits. Nothing to hide.
      </p>

      {/* Badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
        {["Probiotic Powered", "Gentle on Digestion", "Low Lactose", "Tail-Wagging Taste 🐶"].map((badge) => (
          <span key={badge} style={{
            background: "#FDE8C8",
            color: "#7a4a00",
            borderRadius: 999,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 700,
          }}>
            {badge}
          </span>
        ))}
      </div>

      {/* Why Goat Milk */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, margin: "0 0 16px" }}>
          🐾 Why Goat Milk?
        </h2>
        <div style={{ background: "white", borderRadius: 20, padding: "28px 32px", border: "1px solid #ecdccb", boxShadow: "0 8px 24px rgba(43,27,18,0.07)" }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4a3428", margin: "0 0 16px", fontWeight: 600 }}>
            Powered by a probiotic goat milk blend.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6b4c3b", margin: "0 0 12px" }}>
            Naturally rich in probiotics and lower in lactose, it supports smooth digestion and is gentle on sensitive stomachs.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6b4c3b", margin: 0 }}>
            Even better, its nutrients are easier to absorb, so your dog gets more out of every bite.
          </p>
        </div>
      </section>

      {/* Clean. Intentional. Delicious. */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, margin: "0 0 16px" }}>
          ✨ Clean. Intentional. Delicious.
        </h2>
        <div style={{ background: "white", borderRadius: 20, padding: "28px 32px", border: "1px solid #ecdccb", boxShadow: "0 8px 24px rgba(43,27,18,0.07)" }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6b4c3b", margin: "0 0 12px" }}>
            While your dog enjoys every cool, creamy lick, their body benefits too.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6b4c3b", margin: "0 0 20px" }}>
            Crafted with real, functional ingredients like fresh fruit and peanut butter, designed to nourish, not just satisfy.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["No added sugar", "No artificial ingredients", "No shortcuts"].map((tag) => (
              <span key={tag} style={{
                background: "#E8F7F7",
                color: "#1a6b6a",
                borderRadius: 999,
                padding: "7px 16px",
                fontSize: 13,
                fontWeight: 700,
              }}>
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* More than a treat */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, margin: "0 0 16px" }}>
          ❄️ More than a treat
        </h2>
        <div style={{ background: "white", borderRadius: 20, padding: "28px 32px", border: "1px solid #ecdccb", boxShadow: "0 8px 24px rgba(43,27,18,0.07)" }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6b4c3b", margin: "0 0 12px" }}>
            It's a cooling, feel-good experience your dog will crave, especially on warm days when they need something refreshing.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4a3428", margin: 0, fontWeight: 600 }}>
            Because this isn't just a snack. It's a better way to treat your dog.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{
        background: "#FFF6E9",
        borderRadius: 16,
        padding: "20px 24px",
        border: "1px solid #ecdccb",
        fontSize: 13,
        color: "#8a6a5a",
        lineHeight: 1.7,
      }}>
        Every pet is different. Treats are best enjoyed in balanced portions and with attention to your pet's individual needs and sensitivities.
      </div>

    </main>
  );
}
