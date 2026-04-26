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
            alt="Happy dog enjoying Petscream"
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
              Homemade daily frozen treats for dogs 🐾<br />
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

        {/* Right — feature cards top + testimonial bottom */}
        <div style={{ display: "flex", flexDirection: "column", background: "#FFF6E9" }}>

          {/* Feature cards */}
          <div style={{ flex: 1, padding: "28px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            {[
              { icon: "🌿", title: "100% Natural", desc: "Real ingredients your dog deserves" },
              { icon: "🤍", title: "Made with Love", desc: "Freshly made every day" },
              { icon: "🐾", title: "Wag Approved", desc: "Tested by happy dogs everywhere" },
            ].map((f) => (
              <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 999, flexShrink: 0,
                  background: "white", border: "1px solid #ecdccb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20,
                }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#2B1B12", margin: "0 0 2px" }}>{f.title}</p>
                  <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{
            background: "#E8F7F7", margin: "0 20px 20px",
            borderRadius: 20, padding: "20px 24px",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <p style={{ fontSize: "clamp(13px, 1.2vw, 17px)", fontWeight: 800, color: "#2B1B12", margin: "0 0 8px", lineHeight: 1.4 }}>
              "My dog loses her mind for PetsCream!" 🐾
            </p>
            <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0, fontWeight: 500 }}>— Nellie's Parents</p>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div style={{
        borderTop: "1px solid #ecdccb", borderBottom: "1px solid #ecdccb",
        padding: "10px 0 6px", overflow: "hidden", background: "white", flexShrink: 0,
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}>
            {allNames.map((name, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#FFF6E9", border: "1.5px solid #f1e3d3",
                borderRadius: 999, padding: "4px 14px", marginRight: 10,
                fontSize: 12, fontWeight: 600, color: "#2B1B12", whiteSpace: "nowrap",
              }}>
                🐾 {name}
              </span>
            ))}
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 9, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b09a8a", margin: "6px 0 0" }}>
          Tried &amp; tail-wagged by
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        background: "#FFF6E9", padding: "14px 32px",
        display: "flex", justifyContent: "center",
        flexWrap: "wrap", gap: 32, flexShrink: 0,
      }}>
        {[
          { icon: "🚚", bg: "#FDE8C8", title: "Local Delivery", desc: "Wed, Sat & Sun" },
          { icon: "❄️", bg: "#E8F7F7", title: "Frozen & Fresh", desc: "Handmade Daily" },
          { icon: null, bg: "#FDE8C8", title: "Dogs Love It", desc: "Real Taste. Real Joy." },
          { icon: "📸", bg: "#f0e6f6", title: "Follow Our Adventures", desc: "@petscreamnyc", href: "https://www.instagram.com/petscreamnyc" },
        ].map((item) => (
          item.href ? (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: 0 }}>{item.title}</p>
                <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>{item.desc}</p>
              </div>
            </a>
          ) : (
            <div key={item.title} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: item.bg, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                {item.icon ? (
                  <span style={{ fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>{item.icon}</span>
                ) : (
                  <Image src="/images/logo.png" alt="PetsCream" fill style={{ objectFit: "contain" }} sizes="36px" />
                )}
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: 0 }}>{item.title}</p>
                <p style={{ fontSize: 11, color: "#8a6a5a", margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          )
        ))}
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
