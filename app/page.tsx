"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const products = [
  { id: "heart-pop", name: "Heart Pop", image: "/images/heart-pop.png" },
  { id: "mini-bone-treats", name: "Mini Bone Treats", image: "/images/mini-bone-treats.png" },
  { id: "mini-paw-treats", name: "Mini Paw Treats", image: "/images/mini-paw-treats.png" },
  { id: "mini-pop", name: "Mini Pop", image: "/images/mini-pop.png" },
  { id: "paw-pop", name: "Paw Pop", image: "/images/paw-pop.png" },
];

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const allNames = [...dogNames, ...dogNames];

  return (
    <main style={{ minHeight: "100vh", background: "#FFF6E9", color: "#2B1B12" }}>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
        }}>

          {/* Left */}
          <div style={{ flex: "1 1 320px", maxWidth: 480 }}>
            <div style={{
              display: "inline-block",
              background: "#FDE8C8",
              color: "#B05A00",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 999,
              marginBottom: 20,
            }}>
              Frozen Treats for Dogs
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px",
              color: "#2B1B12",
            }}>
              Extra joy.<br />On purpose.
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#6b4c3b", margin: "0 0 32px" }}>
              No added sugar. The fruit takes care of it.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <Link href="/shop" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#2FB7B5",
                color: "white",
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}>
                Make tails wag
              </Link>
              <Link href="/whats-in-it" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                color: "#2B1B12",
                border: "1.5px solid #d8c7b6",
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}>
                See what's inside
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40 }}>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#2B1B12" }}>3</div>
                <div style={{ fontSize: 12, color: "#8a6a5a", marginTop: 2 }}>Real ingredients</div>
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#2B1B12" }}>0</div>
                <div style={{ fontSize: 12, color: "#8a6a5a", marginTop: 2 }}>Added sugar</div>
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#2B1B12" }}>100%</div>
                <div style={{ fontSize: 12, color: "#8a6a5a", marginTop: 2 }}>Real fruit</div>
              </div>
            </div>
          </div>

          {/* Right — carousel */}
          <div style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}>
            {/* Image container — full image visible, no crop */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 16px 40px rgba(43,27,18,0.14)",
              background: "#F4E4C8",
              aspectRatio: "4/5",
            }}>
              {products.map((product, i) => (
                <div
                  key={product.id}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.7s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", padding: 0 }}
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: 8,
                    width: i === current ? 24 : 8,
                    borderRadius: 999,
                    background: i === current ? "#2FB7B5" : "#d8c7b6",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Show product ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Marquee */}
      <div style={{ borderTop: "1px solid #ecdccb", padding: "24px 0", overflow: "hidden" }}>
        <p style={{
          textAlign: "center",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#8a6a5a",
          marginBottom: 14,
        }}>
          Tried &amp; tail-wagged by
        </p>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
          }}>
            {allNames.map((name, i) => (
              <span key={i} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "white",
                border: "1.5px solid #f1e3d3",
                borderRadius: 999,
                padding: "6px 16px",
                marginRight: 10,
                fontSize: 13,
                fontWeight: 600,
                color: "#2B1B12",
                whiteSpace: "nowrap",
              }}>
                🐾 {name}
              </span>
            ))}
          </div>
        </div>
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
