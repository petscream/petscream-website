export const metadata = {
  title: "FAQs | Petscream",
  description:
    "Answers to common questions about Petscream, ingredients, portions, and how we think about treats.",
};

const faqs = [
  {
    q: "What is Petscream?",
    a: "Petscream is a treat concept built around simple, clean ingredients and mindful portions. Extra joy. On purpose.",
  },
  {
    q: "Is Petscream a meal replacement?",
    a: "No. Petscream is meant to be a treat, a small moment of joy. Balanced portions matter.",
  },
  {
    q: "Do you use unnecessary additives?",
    a: "We focus on straightforward recipes and avoid extras that do not need to be there.",
  },
  {
    q: "When are you launching?",
    a: "We’re coming soon. Leave your email on the homepage to be the first to know.",
  },
];

export default function FaqsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "46px 20px" }}>
      <h1 style={{ fontSize: "2.2rem", margin: 0, letterSpacing: "-0.02em" }}>
        FAQs
      </h1>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        {faqs.map((f) => (
          <div
            key={f.q}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(43,27,18,0.12)",
              borderRadius: 18,
              padding: 16,
              boxShadow: "0 16px 35px rgba(43,27,18,0.08)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "1.05rem" }}>{f.q}</div>
            <div style={{ marginTop: 8, opacity: 0.9, lineHeight: 1.7 }}>
              {f.a}
            </div>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
