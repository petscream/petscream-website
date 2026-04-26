"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
      <section style={{ display: "grid", gridTemplateColumns: "55% 45%", minHeight: 480 }}>

        {/* Left — big dog photo with overlay */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/dog-hero.png"
            alt="Happy dog enjoying PetsCream"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
            sizes="55vw"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 100%)",
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "48px 40px",
          }}>
            <h1 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 900, color: "white", lineHeight: 1.1, margin: "0 0 12px" }}>
              Frozen Treats.<br />
              <span style={{ color: "#F4A63A" }}>Happy Pets.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 15, margin: "0 0 28px", maxWidth: 320, lineHeight: 1.6 }}>
              Homemade daily frozen treats for dogs 🐾<br />
              Fresh, healthy and wag-approved!
            </p>
            <Link href="/shop" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#F4A63A", color: "white",
              borderRadius: 999, padding: "12px 30px",
              fontSize: 15, fontWeight: 700, textDecoration: "none",
              width: "fit-content",
            }}>
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right — features top + dog photo bottom */}
        <div style={{ display: "grid", gridTemplateRows: "1fr 220px" }}>
          {/* Feature cards */}
          <div style={{ background: "#FFF6E9", padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
            {[
              { icon: "🌿", title: "100% Natural", desc: "Real ingredients your dog deserves" },
              { icon: "🤍", title: "Made with Love", desc: "Freshly made every day" },
              { icon: "🐾", title: "Wag Approved", desc: "Tested by happy dogs everywhere" },
            ].map((f) => (
              <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 999,
                  background: "white", border: "1px solid #ecdccb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, flexShrink: 0,
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

          {/* Second dog photo */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/images/dog-2.png"
              alt="Happy dog"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              sizes="45vw"
            />
          </div>
        </div>
      </section>

      {/* ── OUR TREATS ── */}
      <section style={{ padding: "48px 32px", background: "#FFF6E9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 900, color: "#2B1B12", margin: "0 0 6px" }}>Our Treats</h2>
            <p style={{ fontSize: 14, color: "#8a6a5a", margin: 0 }}>Real ingredients. No shortcuts. Just the kind of treat that feels right to give.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {products.map((product) => (
              <article key={product.id} style={{
                background: "white", borderRadius: 20,
                border: "1px solid #ecdccb", overflow: "hidden",
                boxShadow: "0 4px 16px rgba(43,27,18,0.06)",
              }}>
                <div style={{ background: "#F9F3EA", padding: 12, display: "flex", justifyContent: "center" }}>
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
                <div style={{ padding: "12px 14px 16px" }}>
                  <h3 style={{ fontSize: 13, fontWeight: 800, color: "#2B1B12", margin: "0 0 2px" }}>{product.name}</h3>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "#2B1B12", margin: "0 0 10px" }}>${product.price}</p>
                  <button
                    onClick={() => handleAdd(product)}
                    style={{
                      width: "100%",
                      background: added === product.id ? "#22a09e" : "#2FB7B5",
                      color: "white", border: "none", borderRadius: 999,
                      padding: "8px 0", fontSize: 12, fontWeight: 600, cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {added === product.id ? "Added ✓" : "Add to cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ background: "#FFF6E9", padding: "0 32px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{
            background: "#E8F7F7", borderRadius: 24,
            padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 800, color: "#2B1B12", margin: "0 0 12px", lineHeight: 1.3 }}>
              "My dog loses his mind for PetsCream!" 🐾
            </p>
            <p style={{ fontSize: 13, color: "#8a6a5a", margin: 0, fontWeight: 500 }}>— Luna's Mom</p>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {["dog-1", "dog-2"].map((img, i) => (
              <div key={i} style={{
                flex: 1, position: "relative",
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 6px 20px rgba(43,27,18,0.1)",
                transform: i === 1 ? "rotate(1.5deg)" : "rotate(-1.5deg)",
                minHeight: 180,
              }}>
                <Image
                  src={`/images/${img}.png`}
                  alt="Happy dog with PetsCream"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ borderTop: "1px solid #ecdccb", borderBottom: "1px solid #ecdccb", padding: "14px 0 8px", overflow: "hidden", background: "white" }}>
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
        <p style={{ textAlign: "center", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b09a8a", margin: "8px 0 0" }}>
          Tried &amp; tail-wagged by
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        background: "#FFF6E9",
        padding: "20px 32px",
        display: "flex", justifyContent: "center",
        flexWrap: "wrap", gap: 40,
        borderTop: "1px solid #ecdccb",
      }}>
        {/* Local Delivery */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: "#FDE8C8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
            🚚
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Local Delivery</p>
            <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>Wed, Sat &amp; Sun</p>
          </div>
        </div>

        {/* Frozen & Fresh */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: "#E8F7F7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
            ❄️
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Frozen &amp; Fresh</p>
            <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>Handmade Daily</p>
          </div>
        </div>

        {/* Dogs Love It — logo icon */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: "#FDE8C8", overflow: "hidden", position: "relative" }}>
            <Image src="/images/logo.png" alt="PetsCream" fill style={{ objectFit: "contain" }} sizes="40px" />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Dogs Love It</p>
            <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>Real Taste. Real Joy.</p>
          </div>
        </div>

        {/* Follow Our Adventures */}
        <a
          href="https://www.instagram.com/PetsCreamnyc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 999, background: "#f0e6f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
            📸
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2B1B12", margin: 0 }}>Follow Our Adventures</p>
            <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>@PetsCreamnyc</p>
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
