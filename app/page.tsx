import FAQ from "./components/FAQ";

export default function HomePage() {
  return (
    <main style={styles.main}>
      <section style={styles.hero} aria-label="Petscream hero">
        <div style={styles.card}>
          <img
            src="/petscream-logo-transparent.png"
            alt="Petscream logo"
            style={styles.logo}
          />

          <div style={styles.tagWrap}>
            <span style={styles.tagline}>Extra joy. On purpose.</span>
          </div>

          <div style={styles.comingSoon}>Coming soon</div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "#FFF6E9",
    color: "#2B1B12",
  },
  hero: {
    minHeight: "calc(100vh - 84px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
  },
  card: {
    width: "min(520px, 92vw)",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.35)",
    border: "1px solid rgba(43,27,18,0.10)",
    boxShadow: "0 18px 50px rgba(43,27,18,0.10)",
    padding: "28px 24px 22px",
    textAlign: "center",
  },
  logo: {
    width: "min(340px, 70vw)",
    height: "auto",
    display: "block",
    margin: "0 auto 14px",
    filter: "drop-shadow(0 18px 22px rgba(0,0,0,0.15))",
  },
  tagWrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8px",
  },
  tagline: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(43,27,18,0.14)",
    background: "rgba(255,255,255,0.45)",
    fontWeight: 600,
  },
  comingSoon: {
    marginTop: "14px",
    opacity: 0.75,
    fontSize: "0.95rem",
  },
};
