export default function AboutPage() {
  return (
    <main style={{
      maxWidth: 820,
      margin: "0 auto",
      padding: "52px 24px 80px",
      fontFamily: "ui-rounded, system-ui, sans-serif",
      color: "#2B1B12",
    }}>
      <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 12px" }}>
        🐾 Our Story
      </p>
      <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 40px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
        Beyond Basics.
      </h1>

      <div style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#4a3428" }}>
        <p>
          Petscream didn't start as a business idea. It started from everyday life with animals and from paying attention to the small moments that often go unnoticed.
        </p>
        <p>
          Over time, we noticed something. Treats had become routine, often filled with ingredients that didn't feel right or easy to trust.
        </p>
        <p>
          So we slowed down and started asking a simple question. What if treats could feel more intentional?
        </p>
        <p>
          We believe a treat should do more than taste good. It should feel good too.
        </p>
        <p>
          That's why we focused on clean ingredients and gentle digestion, building everything around a goat milk-based blend that's easier on the stomach and made for everyday moments.
        </p>
        <p style={{ fontStyle: "italic", color: "#2B1B12", fontWeight: 600 }}>
          Made to feel like ice cream. Built to be better.
        </p>
        <p>
          No unnecessary extras. No exaggerated claims. Just something you can give with quiet confidence.
        </p>
        <p>
          Petscream grew out of this belief. Not to be louder, but to be better.
        </p>
        <p>
          And in the end, it's about something simple. A small moment, a shared pause, and a treat that actually feels right.
        </p>
        <p style={{ marginTop: 32, fontSize: "1.1rem", color: "#2B1B12", lineHeight: 1.8 }}>
          And honestly, the best part?
        </p>
        <p style={{ fontSize: "1.1rem", color: "#2B1B12", lineHeight: 1.8 }}>
          That moment when your dog takes the first lick, pauses for a second like they just discovered something new, and then comes right back for more.
        </p>
        <p style={{ fontWeight: 900, fontSize: "1.2rem", marginTop: 8, color: "#2B1B12" }}>
          That's Petscream.
        </p>
      </div>
    </main>
  );
}
