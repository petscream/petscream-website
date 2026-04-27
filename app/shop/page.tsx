"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function ShopPage() {
  const { addItem } = useCart();
  const [added, setAdded] = useState<string | null>(null);

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
    <main style={{ minHeight: "100vh", background: "#FFF6E9", color: "#2B1B12" }}>
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 60px" }}>

        {/* ── HEADER — daha kompakt ── */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <p style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "#2FB7B5",
            margin: "0 0 8px",
          }}>
            Shop all treats
          </p>
          <h1 style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#2B1B12",
            margin: "0 0 8px",
          }}>
            Frozen treats for happy tails
          </h1>
          <p style={{ fontSize: 15, color: "#5c4638", maxWidth: 420, margin: "0 auto" }}>
            Explore our launch collection and pick your Petscream favorites.
          </p>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
        }}>
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card"
              style={{
                background: "white",
                borderRadius: 24,
                border: "1px solid #ecdccb",
                overflow: "hidden",
                boxShadow: "0 6px 24px rgba(43,27,18,0.07)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Görsel alanı — sabit oran */}
              <div style={{
                background: "#F9F3EA",
                padding: "20px 20px 0",
                display: "flex",
                justifyContent: "center",
              }}>
                <div style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 260,
                  aspectRatio: "1 / 1",
                }}>
                  <Image
                    src={product.image}
                    alt={`${product.subtitle} ${product.name}`}
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom" }}
                    sizes="(max-width: 640px) 100vw, 280px"
                    priority={product.id === "heart-pop"}
                  />
                </div>
              </div>

              {/* İçerik alanı */}
              <div style={{
                padding: "18px 20px 20px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>
                <p style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#2FB7B5",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  margin: "0 0 4px",
                }}>
                  {product.subtitle}
                </p>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: "#2B1B12", margin: 0 }}>
                    {product.name}
                  </h2>
                  <span style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#2B1B12",
                    background: "#FFF6E9",
                    borderRadius: 999,
                    padding: "2px 12px",
                    border: "1px solid #ecdccb",
                    marginLeft: 8,
                    flexShrink: 0,
                  }}>
                    ${product.price}
                  </span>
                </div>

                <p style={{ fontSize: 12, color: "#a08070", margin: "0 0 16px", fontStyle: "italic" }}>
                  Not ice cream. Petscream.
                </p>

                {/* Butonlar */}
                <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                  <button
                    onClick={() => handleAdd(product)}
                    style={{
                      flex: 1,
                      background: added === product.id ? "#22a09e" : "#2FB7B5",
                      color: "white",
                      border: "none",
                      borderRadius: 999,
                      padding: "11px 0",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "background 0.2s, transform 0.1s",
                      transform: added === product.id ? "scale(0.97)" : "scale(1)",
                    }}
                  >
                    {added === product.id ? "Added ✓" : "Add to cart"}
                  </button>
                  <Link
                    href="/ingredients"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1.5px solid #d8c7b6",
                      borderRadius: 999,
                      padding: "11px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#2B1B12",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      background: "white",
                    }}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .product-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(43,27,18,0.13);
        }

        @media (max-width: 640px) {
          .product-card {
            flex-direction: row !important;
            border-radius: 20px !important;
            max-height: 160px;
          }
          .product-card > div:first-child {
            width: 140px !important;
            flex-shrink: 0;
            padding: 12px !important;
            border-radius: 0 !important;
          }
          .product-card > div:first-child > div {
            aspect-ratio: 1/1 !important;
            max-width: 100% !important;
          }
          .product-card > div:last-child {
            padding: 14px 16px !important;
          }
        }
      `}</style>
    </main>
  );
}
