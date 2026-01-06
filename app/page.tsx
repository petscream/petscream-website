import Header from "./components/Header";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF6E9",
        color: "#2B1B12",
      }}
    >
      <Header />

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "96px 24px 48px",
        }}
      >
        <img
          src="/petscream-logo-transparent.png"
          alt="Petscream logo"
          style={{
            width: 260,
            height: 260,
            objectFit: "contain",
            filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.12))",
          }}
        />

        <p style={{ marginTop: 18, fontSize: "1.05rem" }}>
          Extra joy. On purpose.
        </p>

        <div style={{ marginTop: 18, fontSize: "0.95rem", opacity: 0.7 }}>
          Coming soon
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "72px 24px",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", margin: "0 0 18px" }}>About</h2>

        <div style={{ lineHeight: 1.75, fontSize: "1.05rem" }}>
          <p style={{ marginTop: 0 }}>
            Petscream didn’t start as a business idea. It started from everyday
            life with animals, and from paying attention to the small moments
            that often get overlooked.
          </p>

          <p>
            Over time, we noticed something. Feeding and rewarding pets can
            easily become routine. But when you slow down and care about what
            goes into those moments, they begin to feel different. More
            intentional. More meaningful. Sometimes it’s a treat. Sometimes it’s
            simply a shared pause in the day.
          </p>

          <p>
            We believe treats should do more than taste good. Simple, clean
            ingredients and thoughtful choices matter. Not in loud or dramatic
            ways, but in the quiet confidence of giving something you trust.
          </p>

          <p>
            Petscream grew out of this belief. No unnecessary extras. No
            exaggerated claims. Just mindful choices, made with care and respect.
          </p>

          <p style={{ marginBottom: 0 }}>
            If this way of thinking feels familiar, you’re already part of the
            community we’re building. That’s why Petscream exists: to go Beyond
            Basics.
          </p>

          <p style={{ marginTop: 18, fontWeight: 700 }}>
            Extra joy. On purpose.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section
        id="faqs"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "72px 24px",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", margin: "0 0 18px" }}>FAQs</h2>

        <div style={{ lineHeight: 1.7 }}>
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ margin: "0 0 6px" }}>When are you launching?</h3>
            <p style={{ margin: 0, opacity: 0.85 }}>
              Soon. We’re finalizing recipes, packaging, and the first small batch.
            </p>
          </div>

          <div style={{ marginBottom: 18 }}>
            <h3 style={{ margin: "0 0 6px" }}>Where will you be available?</h3>
            <p style={{ margin: 0, opacity: 0.85 }}>
              New York first. We’ll share updates on Instagram.
            </p>
          </div>

          <div>
            <h3 style={{ margin: "0 0 6px" }}>Is it made with clean ingredients?</h3>
            <p style={{ margin: 0, opacity: 0.85 }}>
              That’s the goal: simple choices, no unnecessary extras.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "72px 24px 96px",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", margin: "0 0 18px" }}>Contact</h2>

        <p style={{ marginTop: 0, opacity: 0.9 }}>
          Want to collaborate, ask a question, or say hi?
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 14 }}>
          <a
            href="mailto:info@petscream.com"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.08)",
              textDecoration: "none",
              color: "#2B1B12",
              fontWeight: 600,
            }}
          >
            Email us
          </a>

          <a
            href="https://www.instagram.com/petscreamnyc/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.08)",
              textDecoration: "none",
              color: "#2B1B12",
              fontWeight: 600,
            }}
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
