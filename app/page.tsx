import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF6E9",
        color: "#2B1B12",
        padding: "24px",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          minHeight: "55vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "18px",
        }}
      >
        <Image
          src="/logo.png"
          alt="Petscream"
          width={320}
          height={320}
          priority
          style={{ display: "block" }}
        />

        <p style={{ fontSize: "18px", margin: 0, opacity: 0.9 }}>
          Extra joy. On purpose.
        </p>

        <div style={{ fontSize: "14px", opacity: 0.7 }}>Coming soon</div>
      </section>

      {/* HOW IT STARTED */}
      <section
        id="how-it-started"
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "56px 0 24px",
        }}
      >
        <h2 style={{ fontSize: "28px", margin: "0 0 18px" }}>
          How It Started
        </h2>

        <div
          style={{
            fontSize: "16px",
            lineHeight: 1.75,
            maxWidth: "720px",
          }}
        >
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

          <p style={{ fontWeight: 700 }}>
            Because to us, happiness starts with balance.
          </p>

          <p>
            Petscream grew out of this belief. No unnecessary extras. No
            exaggerated claims. Just mindful choices, made with care and
            respect.
          </p>

          <p>
            We want pets to feel good. Safe. Comfortable. Truly cared for.
          </p>

          <p>
            If this way of thinking feels familiar, you’re already part of the
            community we’re building.
          </p>

          <p>
            That’s why Petscream exists. To go{" "}
            <span style={{ fontWeight: 700 }}>beyond the basics</span>.
          </p>

          <p style={{ fontWeight: 700, marginBottom: 0 }}>
            Extra joy. On purpose.
          </p>
        </div>
      </section>
    </main>
  );
}
