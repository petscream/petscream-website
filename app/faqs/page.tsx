export default function FaqsPage() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "56px 20px" }}>
      <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.5 }}>FAQs</h1>

      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
        <FAQItem
          q="What is Petscream?"
          a="Petscream is about turning small everyday moments with pets into something more intentional. It’s not just about treats. It’s about care, balance, and choosing simple joy on purpose."
        />
        <FAQItem
          q="What makes Petscream different?"
          a="We focus on what goes in and why it matters. No unnecessary ingredients. No exaggerated promises. Just thoughtful choices that feel good to give."
        />
        <FAQItem
          q="Is Petscream safe for pets?"
          a="Petscream is made with simple, clean ingredients and designed to be enjoyed in small, balanced portions. As with any treat, every pet is different, so we recommend paying attention to your pet’s individual needs and sensitivities."
        />
        <FAQItem
          q="Is this a daily food?"
          a="No. Petscream is meant to be an occasional treat, not a replacement for regular meals. It’s about sharing a moment, not changing routines."
        />
        <FAQItem
          q="Do you use artificial additives or fillers?"
          a="No. We keep things simple and intentional. If something doesn’t need to be there, we leave it out."
        />
        <FAQItem
          q="Who is Petscream for?"
          a="Petscream is for people who believe that caring for pets goes beyond the basics. If you value balance, simplicity, and mindful choices, you’re already part of our community."
        />
        <FAQItem
          q="Where can I follow updates?"
          a="Follow our journey on Instagram. That’s where we’ll post updates, behind-the-scenes moments, and what’s coming next."
        />
      </div>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div
      style={{
        border: "1px solid rgba(43,27,18,0.12)",
        background: "rgba(255,255,255,0.45)",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 10px 30px rgba(43,27,18,0.06)",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.05rem", color: "#2B1B12" }}>{q}</h3>
      <p style={{ margin: "10px 0 0", lineHeight: 1.6, color: "rgba(43,27,18,0.85)" }}>
        {a}
      </p>
    </div>
  );
}
