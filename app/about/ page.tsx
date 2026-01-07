export const metadata = {
  title: "Our story | Petscream",
  description:
    "Petscream grew from everyday life with animals and a belief in mindful, clean treats. Extra joy. On purpose.",
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "46px 20px" }}>
      <h1 style={{ fontSize: "2.2rem", margin: 0, letterSpacing: "-0.02em" }}>
        Our story
      </h1>

      <div style={{ marginTop: 18, lineHeight: 1.85, fontSize: "1.05rem" }}>
        <p>
          Petscream didn’t start as a business idea. It started from everyday
          life with animals, and from paying attention to the small moments that
          often get overlooked.
        </p>

        <p>
          Over time, we noticed something. Feeding and rewarding pets can easily
          become routine. But when you slow down and care about what goes into
          those moments, they begin to feel different. More intentional. More
          meaningful.
        </p>

        <p>
          We believe treats should do more than taste good. Simple, clean
          ingredients and thoughtful choices matter. Not in loud ways, but in
          the quiet confidence of giving something you trust.
        </p>

        <p>
          Petscream grew out of this belief. No unnecessary extras. No
          exaggerated claims. Just mindful choices, made with care and respect.
        </p>

        <p style={{ fontWeight: 800, marginTop: 18 }}>
          To go Beyond Basics.
        </p>
      </div>
    </main>
  );
}
