export default function PrivacyPage() {
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
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, margin: "0 0 12px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: "#8a6a5a", margin: 0, fontStyle: "italic" }}>
            Effective Date: May 10, 2026
          </p>
        </div>

        <div style={{ borderTop: "2px solid #ecdccb", paddingTop: 40, display: "flex", flexDirection: "column", gap: 36 }}>

          <Section title="1. Information We Collect">
            <P>When you place an order or contact us, we may collect:</P>
            <UL items={[
              "Name and your pet's name",
              "Delivery address",
              "Email address and phone number",
              "Payment information (processed securely through third-party payment processors; we do not store card details)",
              "Order history",
            ]} />
            <P>We only collect information necessary to process orders, communicate with customers, and improve our services.</P>
          </Section>

          <Section title="2. How We Use Your Information">
            <UL items={[
              "To fulfill and deliver your orders",
              "To communicate with you about your order status",
              "To send occasional updates about new products or promotions (you can opt out at any time)",
              "To improve our products and services",
            ]} />
          </Section>

          <Section title="3. Sharing of Information">
            <P>We do not sell, rent, or share your personal information with third parties except:</P>
            <UL items={[
              "Service providers necessary to operate our business (e.g., payment processors and delivery partners)",
              "When required by law or to protect our legal rights",
            ]} />
          </Section>

          <Section title="4. Data Retention">
            <P>We retain your personal information for as long as necessary to fulfill orders and comply with legal obligations. You may request deletion of your data at any time by contacting us.</P>
          </Section>

          <Section title="5. Cookies">
            <P>Our website may use limited cookies for functionality and basic analytics. We do not use cookies for advertising purposes. You can disable cookies in your browser settings.</P>
          </Section>

          <Section title="6. Security">
            <P>While we take reasonable steps to protect your information, no online transmission or storage method can be guaranteed to be completely secure.</P>
          </Section>

          <Section title="7. Your Rights">
            <P>You have the right to:</P>
            <UL items={[
              "Access the personal information we hold about you",
              "Request correction of inaccurate information",
              "Request deletion of your data",
              "Opt out of marketing communications at any time",
            ]} />
            <P>To exercise any of these rights, contact us at: <a href="mailto:petscreamnyc@gmail.com" style={{ color: "#2FB7B5" }}>petscreamnyc@gmail.com</a></P>
          </Section>

          <Section title="8. Children's Privacy">
            <P>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</P>
          </Section>

          <Section title="9. Changes to This Policy">
            <P>We may update this Privacy Policy periodically. Changes will be posted on our website with a new effective date.</P>
          </Section>

          <Section title="10. Contact">
            <P>Questions about this Privacy Policy? Contact us at: <a href="mailto:petscreamnyc@gmail.com" style={{ color: "#2FB7B5" }}>petscreamnyc@gmail.com</a> or <a href="https://instagram.com/petscreamnyc" target="_blank" rel="noopener noreferrer" style={{ color: "#2FB7B5" }}>@petscreamnyc</a> on Instagram.</P>
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
