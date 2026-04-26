"use client";

import Image from "next/image";
import Link from "next/link";

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  const allNames = [...dogNames, ...dogNames];

  return (
    <main style={{
      height: "calc(100vh - 64px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      background: "#FFF6E9",
      fontFamily: "ui-rounded, system-ui, sans-serif",
    }}>

      {/* ── TOP: Hero + Right panel ── */}
      <div style={{ display: "grid", gridTemplateColumns: "58% 42%", flex: 1, minHeight: 0 }}>

        {/* Left — dog hero photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/dog-hero.png"
            alt="Happy pet enjoying Petscream"
            fill
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
            priority
            sizes="58vw"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 100%)",
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "40px 36px",
          }}>
            <h1 style={{ fontSize: "clamp(26px, 3.2vw, 50px)", fontWeight: 900, color: "white", lineHeight: 1.1, margin: "0 0 10px" }}>
              Frozen Treats.<br />
              <span style={{ color: "#F4A63A" }}>Happy Pets.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, margin: "0 0 24px", maxWidth: 300, lineHeight: 1.6 }}>
              Homemade daily frozen treats for pets 🐾<br />
              Fresh, healthy and wag-approved!
            </p>
            <Link href="/shop" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#F4A63A", color: "white",
              borderRadius: 999, padding: "11px 28px",
              fontSize: 15, fontWeight: 700, textDecoration: "none",
              width: "fit-content",
            }}>
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: "flex", flexDirection: "column", background: "#FFF6E9", overflow: "hidden" }}>

          {/* Top: small dog photo + feature cards side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", flex: 1, minHeight: 0 }}>

            {/* Small dog photo */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src="/images/dog-1.png"
                alt="Happy pet"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                sizes="120px"
              />
            </div>

            {/* Feature cards */}
            <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              {[
                { icon: "🌿", title: "100% Natural", desc: "Real ingredients your pet deserves" },
                { icon: "🤍", title: "Made with Love", desc: "Freshly made every day" },
                { icon: "🐾", title: "Wag Approved", desc: "Tested by happy pets everywhere" },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 999, flexShrink: 0,
                    background: "white", border: "1px solid #ecdccb",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 17,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#2B1B12", margin: "0 0 1px" }}>{f.title}</p>
                    <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}

              {/* Ingredient pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                {["Probiotic", "Live Cultures", "Goat Milk Blend"].map((pill) => (
                  <span key={pill} style={{
                    background: "white", border: "1.5px solid #ecdccb",
                    borderRadius: 999, padding: "4px 12px",
                    fontSize: 11, fontWeight: 600, color: "#5c4638",
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div style={{
            background: "#E8F7F7", margin: "12px 16px 16px",
            borderRadius: 18, padding: "16px 20px",
            flexShrink: 0,
          }}>
            <p style={{ fontSize: "clamp(12px, 1.1vw, 16px)", fontWeight: 800, color: "#2B1B12", margin: "0 0 6px", lineHeight: 1.4 }}>
              "My dog loses her mind for PetsCream!" 🐾
            </p>
            <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0, fontWeight: 500 }}>— Nellie's Parents</p>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div style={{
        borderTop: "1px solid #ecdccb", borderBottom: "1px solid #ecdccb",
        padding: "6px 0 8px", overflow: "hidden", background: "white", flexShrink: 0,
      }}>
        <p style={{ textAlign: "center", fontSize: 9, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b09a8a", margin: "0 0 6px" }}>
          Tried &amp; tail-wagged by
        </p>
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}>
            {allNames.map((name, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#FFF6E9", border: "1.5px solid #f1e3d3",
                borderRadius: 999, padding: "5px 14px", marginRight: 10,
                fontSize: 13, fontWeight: 600, color: "#2B1B12", whiteSpace: "nowrap",
              }}>
                🐾 {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        background: "#FFF6E9", padding: "12px 32px",
        display: "flex", justifyContent: "center",
        flexWrap: "wrap", gap: 32, flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: "#FDE8C8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🚚</div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Local Delivery</p>
            <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>Wed, Sat &amp; Sun</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: "#E8F7F7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>❄️</div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Frozen &amp; Fresh</p>
            <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>Handmade Daily</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: "#FDE8C8", overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <Image src="/images/logo.png" alt="PetsCream" fill style={{ objectFit: "contain" }} sizes="36px" />
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Pets Love It</p>
            <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>Real Taste. Real Joy.</p>
          </div>
        </div>

        <a href="https://www.instagram.com/petscreamnyc" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: "#f0e6f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>📸</div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Follow Our Adventures</p>
            <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>@petscreamnyc</p>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
