"use client";

import Image from "next/image";
import Link from "next/link";

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  return (
    <main
      style={{
        height: "calc(100dvh - 64px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#FFF6E9",
        fontFamily: "ui-rounded, system-ui, sans-serif",
      }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Left — dog hero photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/dog-hero.png"
            alt="Happy pet enjoying PetsCream"
            fill
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
            priority
            sizes="50vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 68%, rgba(255,246,233,0.96) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "clamp(20px, 4vw, 48px)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(14px, 3.5vw, 60px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.05,
                margin: "0 0 clamp(6px, 1.5vw, 14px)",
                letterSpacing: "-0.03em",
              }}
            >
              Frozen Treats.<br />
              <span style={{ color: "#F4A63A" }}>Happy Pets.</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                fontSize: "clamp(9px, 1.5vw, 15px)",
                margin: "0 0 clamp(10px, 2vw, 28px)",
                maxWidth: 340,
                lineHeight: 1.6,
              }}
            >
              Homemade daily frozen treats for pets 🐾<br />
              Fresh, healthy and wag-approved!
            </p>
            <Link
              href="/shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#F4A63A",
                color: "white",
                borderRadius: 999,
                padding: "clamp(7px, 1.2vw, 13px) clamp(12px, 2.5vw, 34px)",
                fontSize: "clamp(9px, 1.4vw, 15px)",
                fontWeight: 800,
                textDecoration: "none",
                width: "fit-content",
                boxShadow: "0 8px 20px rgba(244,166,58,0.4)",
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right — full treats-grid image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#f5f0e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/treats-grid.png"
            alt="PetsCream treats collection"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            sizes="50vw"
          />
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div
        style={{
          borderTop: "1px solid #ecdccb",
          borderBottom: "1px solid #ecdccb",
          padding: "6px 0 8px",
          overflow: "hidden",
          background: "white",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b09a8a",
            margin: "0 0 6px",
          }}
        >
          Tried &amp; tail-wagged by
        </p>
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 30s linear infinite",
            }}
          >
            <div style={{ display: "flex" }}>
              {dogNames.map((name, i) => (
                <span
                  key={`a-${name}-${i}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#FFF6E9",
                    border: "1.5px solid #f1e3d3",
                    borderRadius: 999,
                    padding: "5px 14px",
                    marginRight: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#2B1B12",
                    whiteSpace: "nowrap",
                  }}
                >
                  🐾 {name}
                </span>
              ))}
            </div>
            <div aria-hidden="true" style={{ display: "flex" }}>
              {dogNames.map((name, i) => (
                <span
                  key={`b-${name}-${i}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#FFF6E9",
                    border: "1.5px solid #f1e3d3",
                    borderRadius: 999,
                    padding: "5px 14px",
                    marginRight: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#2B1B12",
                    whiteSpace: "nowrap",
                  }}
                >
                  🐾 {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          background: "#FFF6E9",
          padding: "clamp(8px, 1.5vw, 12px) clamp(12px, 3vw, 32px)",
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          gap: "clamp(10px, 2vw, 32px)",
          flexShrink: 0,
          overflowX: "auto",
        }}
      >
        {[
          {
            bg: "#FDE8C8",
            icon: "🚚",
            title: "Local Delivery",
            sub: "Mon–Fri 7–9PM · Sat–Sun 10AM–5PM",
          },
          {
            bg: "#E8F7F7",
            icon: "❄️",
            title: "Frozen & Fresh",
            sub: "Handmade Daily",
          },
        ].map((item) => (
          <div key={item.title} style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <div
              style={{
                width: "clamp(26px, 3vw, 36px)",
                height: "clamp(26px, 3vw, 36px)",
                borderRadius: 999,
                background: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(13px, 1.8vw, 18px)",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <p style={{ fontSize: "clamp(9px, 1.1vw, 12px)", fontWeight: 700, color: "#2B1B12", margin: 0 }}>
                {item.title}
              </p>
              <p style={{ fontSize: "clamp(8px, 0.9vw, 11px)", color: "#8a6a5a", margin: 0 }}>
                {item.sub}
              </p>
            </div>
          </div>
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <div
            style={{
              width: "clamp(26px, 3vw, 36px)",
              height: "clamp(26px, 3vw, 36px)",
              borderRadius: 999,
              background: "#FDE8C8",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image src="/images/logo.png" alt="PetsCream" fill style={{ objectFit: "contain" }} sizes="36px" />
          </div>
          <div>
            <p style={{ fontSize: "clamp(9px, 1.1vw, 12px)", fontWeight: 700, color: "#2B1B12", margin: 0 }}>
              Pets Love It
            </p>
            <p style={{ fontSize: "clamp(8px, 0.9vw, 11px)", color: "#8a6a5a", margin: 0 }}>Real Taste. Real Joy.</p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/petscreamnyc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}
        >
          <div
            style={{
              width: "clamp(26px, 3vw, 36px)",
              height: "clamp(26px, 3vw, 36px)",
              borderRadius: 999,
              background: "#f0e6f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(13px, 1.8vw, 18px)",
              flexShrink: 0,
            }}
          >
            📸
          </div>
          <div>
            <p style={{ fontSize: "clamp(9px, 1.1vw, 12px)", fontWeight: 700, color: "#2B1B12", margin: 0 }}>
              Follow Our Adventures
            </p>
            <p style={{ fontSize: "clamp(8px, 0.9vw, 11px)", color: "#8a6a5a", margin: 0 }}>@petscreamnyc</p>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
