export default function AllergenPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#FFF6E9",
      fontFamily: "ui-rounded, system-ui, sans-serif",
      color: "#2B1B12",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 80px" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 10px" }}>
            Safety & Ingredients
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, margin: "0 0 12px" }}>
            Allergen & Ingredient Disclosure
          </h1>
          <p style={{ fontSize: 14, color: "#8a6a5a", margin: 0, fontStyle: "italic" }}>
            Effective Date: May 10, 2026
          </p>
        </div>

        <div style={{ borderTop: "2px solid #ecdccb", paddingTop: 40, display: "flex", flexDirection: "column", gap: 36 }}>

          {/* Red warning box */}
          <div style={{
            background: "#fff5f5",
            border: "2px solid #E05252",
            borderRadius: 16,
            padding: "20px 24px",
          }}>
            <p style={{ fontSize: 15, fontWeight: 800, color: "#E05252", margin: "0 0 8px" }}>
              ⚠️ ALLERGEN WARNING
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#2B1B12", margin: 0 }}>
              All PetsCream products are made in a kitchen that uses <strong>PEANUT BUTTER</strong> and <strong>TREE NUTS</strong>. If your pet has a peanut allergy, please leave a note with your order. Since our treats are made in small daily batches, we may be able to prepare a peanut butter-free version separately upon request. However, we <strong>cannot guarantee</strong> a completely allergen-free environment.
            </p>
          </div>

          <Section title="Current Product Line — Ingredients">
            <P>All current products are made with the following core ingredients:</P>
            <div style={{ background: "white", border: "1px solid #ecdccb", borderRadius: 12, padding: "16px 20px", marginTop: 4 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#2FB7B5", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Blueberry & Banana with Peanut Butter
              </p>
              <UL items={[
                "Signature goat dairy blend™",
                "Banana",
                "Blueberry",
                "Peanut butter (contains peanuts)",
                "No added sugar, no artificial preservatives, no xylitol",
                "No chocolate, no grapes, no raisins, no onion, no garlic",
              ]} />
            </div>
          </Section>

          <Section title="Important Notes">
            <UL items={[
              "All products are handmade in small batches in a home kitchen. While we take care to maintain cleanliness, our kitchen is not a certified allergen-free facility.",
              "Ingredient formulas may change. Always check our latest product descriptions or contact us before ordering if your pet has known allergies.",
              "XYLITOL-FREE: We never use xylitol or any xylitol-containing sweeteners. Xylitol is toxic to dogs.",
              "Our products do not contain chocolate, grapes, raisins, onions, garlic, macadamia nuts, or other ingredients known to be toxic to dogs.",
              "These products are intended as occasional treats and are not a substitute for a balanced diet. Consult your veterinarian if you have concerns about your pet's diet.",
            ]} />
          </Section>

          <Section title="Recommended Serving">
            <UL items={[
              "Small dogs (under 20 lbs): 1 pop or 3–5 mini treats per serving",
              "Medium dogs (20–50 lbs): 1 pop or 5–10 mini treats per serving",
              "Large dogs (50+ lbs): 1–2 pops or 5–10 mini treats per serving",
            ]} />
            <P>Treats should not exceed 10% of your pet's daily caloric intake. Always supervise your pet while eating.</P>
          </Section>

          <Section title="Storage Instructions">
            <UL items={[
              "Keep frozen at 0°F (-18°C) or below.",
              "Once thawed, do not refreeze.",
              "Best consumed within 3 months of purchase.",
              "Thaw for 1–2 minutes before serving for easier handling.",
            ]} />
          </Section>

          <Section title="Contact">
            <P>For ingredient questions or allergy concerns, contact us before ordering: <a href="mailto:petscreamnyc@gmail.com" style={{ color: "#2FB7B5" }}>petscreamnyc@gmail.com</a> or <a href="https://instagram.com/petscreamnyc" target="_blank" rel="noopener noreferrer" style={{ color: "#2FB7B5" }}>@petscreamnyc</a> on Instagram.</P>
            <P>We are happy to discuss any specific ingredient concerns for your pet's safety.</P>
          </Section>

        </div>

        <div style={{ marginTop: 60, textAlign: "center", fontSize: 13, color: "#b09a8a" }}>
          © 2026 PetsCream. All rights reserved.
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#2FB7B5", margin: "0 0 12px", letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3d2a20", margin: 0 }}>
      {children}
    </p>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "4px 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3d2a20" }}>{item}</li>
      ))}
    </ul>
  );
}
