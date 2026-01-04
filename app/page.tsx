export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <section style={{ maxWidth: 720 }}>
        <div style={{ fontSize: 14, opacity: 0.75 }}>Petscream</div>

        <h1 style={{ fontSize: 48, marginTop: 12, marginBottom: 8 }}>
          Not essential. Intentional.
        </h1>

        <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 18 }}>
          Beyond basics.
        </div>

        <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 640 }}>
          Small-batch frozen treats for dogs, made with ingredients that actually
          make sense.
        </p>

        <div style={{ marginTop: 22 }}>
          <a
            href="https://instagram.com/petscreamnyc"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 14,
              background: "#E7A23C",
              color: "#6B3E26",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Bring the joy
          </a>

          <div style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>
            Tell us what your dog thinks
          </div>
        </div>
      </section>
    </main>
  );
}
