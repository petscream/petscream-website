export default function FAQ() {
  return (
    <section id="faqs" style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.title}>FAQs</h2>

        <div style={styles.list}>
          <div style={styles.item}>
            <h3 style={styles.q}>What is Petscream?</h3>
            <p style={styles.a}>
              Petscream is about turning small everyday moments with pets into something more
              intentional. It’s not just about treats. It’s about care, balance, and choosing
              simple joy on purpose.
            </p>
          </div>

          <div style={styles.item}>
            <h3 style={styles.q}>What makes Petscream different?</h3>
            <p style={styles.a}>
              We focus on what goes in and why it matters. No unnecessary ingredients. No
              exaggerated promises. Just thoughtful choices that feel good to give.
            </p>
          </div>

          <div style={styles.item}>
            <h3 style={styles.q}>Is Petscream safe for pets?</h3>
            <p style={styles.a}>
              Petscream is made with simple, clean ingredients and designed to be enjoyed in small,
              balanced portions. As with any treat, every pet is different, so we recommend paying
              attention to your pet’s individual needs and sensitivities.
            </p>
          </div>

          <div style={styles.item}>
            <h3 style={styles.q}>Is this a daily food?</h3>
            <p style={styles.a}>
              No. Petscream is meant to be an occasional treat, not a replacement for regular meals.
              It’s about sharing a moment, not changing routines.
            </p>
          </div>

          <div style={styles.item}>
            <h3 style={styles.q}>Do you use artificial additives or fillers?</h3>
            <p style={styles.a}>
              No. We keep things simple and intentional. If something doesn’t need to be there, we
              leave it out.
            </p>
          </div>

          <div style={styles.item}>
            <h3 style={styles.q}>Who is Petscream for?</h3>
            <p style={styles.a}>
              Petscream is for people who believe that caring for pets goes beyond the basics. If
              you value balance, simplicity, and mindful choices, you’re already part of our
              community.
            </p>
          </div>

          <div style={styles.item}>
            <h3 style={styles.q}>Where can I follow updates?</h3>
            <p style={styles.a}>
              Follow our journey on Instagram. That’s where we’ll post updates, behind-the-scenes
              moments, and what’s coming next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    padding: "72px 24px",
    background: "transparent",
  },
  inner: {
    maxWidth: "920px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    margin: "0 0 20px",
    color: "#2B1B12",
    letterSpacing: "-0.02em",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  item: {
    border: "1px solid rgba(43,27,18,0.12)",
    background: "rgba(255,255,255,0.45)",
    borderRadius: "16px",
    padding: "16px 16px",
    boxShadow: "0 10px 30px rgba(43,27,18,0.06)",
  },
  q: {
    margin: 0,
    fontSize: "1.05rem",
    color: "#2B1B12",
  },
  a: {
    margin: "10px 0 0",
    lineHeight: 1.6,
    color: "rgba(43,27,18,0.85)",
    fontSize: "0.98rem",
    maxWidth: "70ch",
  },
};
