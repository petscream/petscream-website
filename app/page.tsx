"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./context/CartContext";
import { products } from "./data/products";

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  const { addItem } = useCart();
  const [added, setAdded] = useState<string | null>(null);
  const allNames = [...dogNames, ...dogNames];

  const handleAdd = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      image: product.image,
      price: product.price,
    });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <main style={{ background: "#FFF6E9", color: "#2B1B12", fontFamily: "ui-rounded, system-ui, sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 520 }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>

          {/* Left — big dog photo */}
          <div style={{ flex: "1 1 55%", position: "relative", minHeight: 480 }}>
            <Image
              src="/images/dog-hero.png"
              alt="Happy dog enjoying Petscream"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              sizes="60vw"
            />
            {/* Overlay content */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 70%)",
              display: "flex", flexDirection: "column", justifyContent: "center",
              padding: "48px 40px",
            }}>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 900, color: "white", lineHeight: 1.1, margin: "0 0 12px" }}>
                Frozen Treats.<br />
                <span style={{ color: "#F4A63A" }}>Happy Pets.</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 15, margin: "0 0 28px", maxWidth: 340, lineHeight: 1.6 }}>
                Homemade daily frozen treats for dogs 🐾<br />
                Fresh, healthy and wag-approved!
              </p>
              <Link href="/shop" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "#F4A63A", color: "white",
                borderRadius: 999, padding: "13px 32px",
                fontSize: 16, fontWeight: 700, textDecoration: "none",
                width: "fit-content",
              }}>
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right — feature cards + second dog */}
          <div style={{ flex: "1 1 45%", display: "flex", flexDirection: "column" }}>
            {/* Top — feature cards */}
            <div style={{
              background: "#FFF6E9", padding: "32px 28px",
              display: "flex", flexDirection: "column", gap: 20, flex: 1,
            }}>
              {[
                { icon: "🌿", title: "100% Natural", desc: "Real ingredients your dog deserves" },
                { icon: "🤍", title: "Made with Love", desc: "Freshly made every day" },
                { icon: "🐾", title: "Wag Approved", desc: "Tested by happy dogs everywhere" },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 999,
                    background: "white", border: "1px solid #ecdccb",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#2B1B12", margin: "0 0 2px" }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: "#8a6a5a", margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom — second dog photo */}
            <div style={{ position: "relative", height: 200 }}>
              <Image
                src="/images/dog-2.png"
                alt="Dog enjoying Petscream treat"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ borderTop: "1px solid #ecdccb", borderBottom: "1px solid #ecdccb", padding: "16px 0", overflow: "hidden", background: "white" }}>
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
        <p style={{ textAlign: "center", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b09a8a", margin: "10px 0 0" }}>
          Tried &amp; tail-wagged by
        </p>
      </div>

      {/* ── OUR TREATS ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, color: "#2B1B12", margin: "0 0 8px" }}>Our Treats</h2>
          <p style={{ fontSize: 15, color: "#8a6a5a", margin: 0 }}>Real ingredients. No shortcuts. Just the kind of treat that feels right to give.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
          {products.map((product) => (
            <article key={product.id} style={{
              background: "white", borderRadius: 24,
              border: "1px solid #ecdccb", overflow: "hidden",
              boxShadow: "0 6px 20px rgba(43,27,18,0.06)",
              transition: "transform 0.2s",
            }}>
              <div style={{ background: "#F9F3EA", padding: 16, display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="200px"
                  />
                </div>
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#2B1B12", margin: "0 0 4px" }}>{product.name}</h3>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#2B1B12", margin: "0 0 12px" }}>${product.price}</p>
                <button
                  onClick={() => handleAdd(product)}
                  style={{
                    width: "100%",
                    background: added === product.id ? "#22a09e" : "#2FB7B5",
                    color: "white", border: "none", borderRadius: 999,
                    padding: "9px 0", fontSize: 13, fontWeight: 600, cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  {added === product.id ? "Added ✓" : "Add to cart"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ background: "white", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{
            flex: "1 1 340px", background: "#E8F7F7", borderRadius: 28,
            padding: "40px 36px", textAlign: "center",
          }}>
            <p style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#2B1B12", margin: "0 0 12px", lineHeight: 1.3 }}>
              "My dog loses his mind for Petscream!" 🐾
            </p>
            <p style={{ fontSize: 14, color: "#8a6a5a", margin: 0, fontWeight: 500 }}>— Luna's Mom</p>
          </div>

          <div style={{ flex: "1 1 280px", display: "flex", gap: 16 }}>
            {["dog-1", "dog-2"].map((img, i) => (
              <div key={i} style={{
                flex: 1, position: "relative", aspectRatio: "3/4",
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 8px 24px rgba(43,27,18,0.12)",
                transform: i === 1 ? "rotate(2deg)" : "rotate(-2deg)",
              }}>
                <Image
                  src={`/images/${img}.png`}
                  alt="Happy dog with Petscream"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="180px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        background: "#FFF6E9", borderTop: "1px solid #ecdccb",
        padding: "24px", display: "flex", justifyContent: "center",
        flexWrap: "wrap", gap: 32,
      }}>
        {[
          { icon: "🚚", title: "Local Delivery", desc: "Wed, Sat & Sun" },
          { icon: "❄️", title: "Frozen & Fresh", desc: "Handmade Daily" },
          { icon: "🐶", title: "Dogs Love It", desc: "Real Taste. Real Joy." },
          { icon: "📸", title: "Follow Our Adventures", desc: "@petscream" },
        ].map((item) => (
          <div key={item.title} style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 180 }}>
            <span style={{ fontSize: 26 }}>{item.icon}</span>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2B1B12", margin: 0 }}>{item.title}</p>
              <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>{item.desc}</p>
            </div>
          </div>
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
