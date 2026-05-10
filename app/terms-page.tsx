export default function TermsPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#FFF6E9",
      fontFamily: "ui-rounded, system-ui, sans-serif",
      color: "#2B1B12",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 10px" }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, margin: "0 0 12px" }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: 14, color: "#8a6a5a", margin: 0, fontStyle: "italic" }}>
            Effective Date: May 10, 2026
          </p>
        </div>

        <div style={{ borderTop: "2px solid #ecdccb", paddingTop: 40, display: "flex", flexDirection: "column", gap: 36 }}>

          <Section title="1. About PetsCream">
            <P>PetsCream is a small-batch frozen pet treat business based in New York City. We produce handmade frozen treats for pets using real ingredients. Orders are fulfilled locally and delivered within designated delivery windows.</P>
          </Section>

          <Section title="2. Acceptance of Terms">
            <P>By placing an order through our website (petscream.com) or any other channel, you agree to these Terms of Service in full. If you do not agree, please do not place an order.</P>
          </Section>

          <Section title="3. Products">
            <UL items={[
              "All products are handmade in small batches. Slight variations in size, shape, and appearance are normal and do not constitute a defect.",
              "Products are frozen and must be stored in a freezer upon receipt. PetsCream is not responsible for product quality if storage instructions are not followed after delivery.",
              "Our products are intended for pet consumption only.",
              "Product availability may change without notice. If an item becomes unavailable, we may offer a comparable substitute with customer approval.",
            ]} />
          </Section>

          <Section title="4. Pet Health Disclaimer">
            <UL items={[
              "PetsCream products are treats and are not intended to diagnose, treat, cure, or prevent any disease. Always consult your veterinarian regarding your pet's dietary needs or allergies.",
            ]} />
          </Section>

          <Section title="5. Pricing">
            <UL items={[
              "All prices are listed in US dollars (USD) and are subject to change without notice.",
              "Prices shown at the time of order placement are final for that order.",
              "We reserve the right to correct pricing errors at any time.",
            ]} />
          </Section>

          <Section title="6. Minimum Order">
            <P>A minimum order value of <strong>$50.00</strong> (before any applicable fees) is required to place an order. Orders below this threshold will not be processed.</P>
          </Section>

          <Section title="7. Delivery">
            <UL items={[
              "We currently offer local delivery only within our designated delivery zones in New York City.",
              "Delivery windows: Monday 7–9 PM · Thursday 7–9 PM · Saturday 10 AM–6 PM",
              "Delivery windows are estimates. PetsCream is not liable for delays caused by traffic, weather, or other circumstances beyond our control.",
              "Someone must be available to receive the order. PetsCream is not responsible for products left unattended if not retrieved promptly.",
              "We reserve the right to refuse delivery to locations we deem unsafe or outside our delivery area.",
            ]} />
          </Section>

          <Section title="8. Order Cancellations & Changes">
            <UL items={[
              "Orders may be cancelled or modified up to 24 hours before the scheduled delivery window by contacting us at petscreamnyc@gmail.com.",
              "Cancellations or changes requested within 24 hours of delivery cannot be guaranteed.",
              "PetsCream reserves the right to cancel an order for any reason, including product unavailability, and will issue a full refund in such cases.",
            ]} />
          </Section>

          <Section title="9. Refunds & Returns">
            <UL items={[
              "Due to the perishable nature of our products, we do not accept returns.",
              "If your order arrives damaged, incorrect, or with a quality issue, please contact us within 24 hours of delivery at petscreamnyc@gmail.com with a photo. We may offer a replacement or store credit at our discretion.",
              "Refunds will not be issued for products that have been stored improperly after delivery.",
            ]} />
          </Section>

          <Section title="10. Limitation of Liability">
            <P>PetsCream is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability to you for any claim shall not exceed the amount paid for the order in question.</P>
          </Section>

          <Section title="11. Changes to These Terms">
            <P>We may update these Terms of Service at any time. The updated version will be posted on our website with a new effective date. Continued use of our services after changes are posted constitutes acceptance of the new terms.</P>
          </Section>

          <Section title="12. Contact">
            <P>For questions about these terms, contact us at: <a href="mailto:petscreamnyc@gmail.com" style={{ color: "#2FB7B5" }}>petscreamnyc@gmail.com</a> or <a href="https://instagram.com/petscreamnyc" target="_blank" rel="noopener noreferrer" style={{ color: "#2FB7B5" }}>@petscreamnyc</a> on Instagram.</P>
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
      {children}
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
    <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3d2a20" }}>{item}</li>
      ))}
    </ul>
  );
}
