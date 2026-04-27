"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function ShopPage() {
  const { addItem } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    () => Object.fromEntries(products.map((p) => [p.id, 1]))
  );
  const [added, setAdded] = useState<string | null>(null);

  const change = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  const handleAdd = (product: typeof products[0]) => {
    const qty = quantities[product.id];
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        name: product.name,
        subtitle: product.subtitle,
        image: product.image,
        price: product.price,
      });
    }
    setAdded(product.id);
    setTimeout(() => {
      setAdded(null);
      setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
    }, 1500);
  };

  return (
    <main style={{
      height: "calc(100dvh - 64px)",
      overflow: "hidden",
      background: "#FFF6E9",
      color: "#2B1B12",
      display: "flex",
      flexDirection: "column",
      fontFamily: "ui-rounded, system-ui, sans-serif",
    }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: "center", padding: "16px 24px 10px", flexShrink: 0 }}>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.28em",
          color: "#2FB7B5",
          margin: "0 0 4px",
        }}>
          Shop all treats
        </p>
        <h1 style={{
          fontSize: "clamp(18px, 2.2vw, 28px)",
          fontWeight: 800,
          color: "#2B1B12",
          margin: 0,
        }}>
          Frozen treats for happy tails 🐾
        </h1>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div style={{
        flex: 1,
        minHeight: 0,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 12,
        padding: "8px 16px 16px",
      }}>
        {products.map((product) => {
          const qty = quantities[product.id];
          const isAdded = added === product.id;

          return (
            <article
              key={product.id}
              className="product-card"
              style={{
                background: "white",
                borderRadius: 20,
                border: "1px solid #ecdccb",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(43,27,18,0.07)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Görsel */}
              <div style={{
                background: "#F9F3EA",
                flexShrink: 0,
                position: "relative",
                aspectRatio: "4 / 5",
              }}>
                <Image
                  src={product.image}
                  alt={`${product.subtitle} ${product.name}`}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  sizes="20vw"
                  priority={product.id === "heart-pop"}
                />
              </div>

              {/* İçerik */}
              <div style={{
                padding: "10px 12px 12px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>
                <p style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#2FB7B5",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 2px",
                }}>
                  {product.subtitle}
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}>
                  <h2 style={{
                    fontSize: "clamp(12px, 1.1vw, 16px)",
                    fontWeight: 800,
                    color: "#2B1B12",
                    margin: 0,
                  }}>
                    {product.name}
                  </h2>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#2B1B12",
                    background: "#FFF6E9",
                    borderRadius: 999,
                    padding: "1px 9px",
                    border: "1px solid #ecdccb",
                    marginLeft: 4,
                    flexShrink: 0,
                  }}>
                    ${product.price}
                  </span>
                </div>

                {/* Adet + Sepet */}
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 6 }}>

                  {/* Adet seçici */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#FFF6E9",
                    border: "1.5px solid #ecdccb",
                    borderRadius: 999,
                    padding: "4px 6px",
                  }}>
                    <button
                      onClick={() => change(product.id, -1)}
                      disabled={qty <= 1}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: "none",
                        background: qty <= 1 ? "#f0e8df" : "#2FB7B5",
                        color: qty <= 1 ? "#b0a098" : "white",
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: qty <= 1 ? "default" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.15s",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#2B1B12",
                      minWidth: 24,
                      textAlign: "center",
                    }}>
                      {qty}
                    </span>
                    <button
                      onClick={() => change(product.id, +1)}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: "none",
                        background: "#2FB7B5",
                        color: "white",
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.15s",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Add to cart */}
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={isAdded}
                    style={{
                      width: "100%",
                      background: isAdded ? "#22a09e" : "#2FB7B5",
                      color: "white",
                      border: "none",
                      borderRadius: 999,
                      padding: "9px 0",
                      fontSize: "clamp(10px, 0.9vw, 13px)",
                      fontWeight: 700,
                      cursor: isAdded ? "default" : "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {isAdded ? `Added ${qty > 1 ? `×${qty}` : ""} ✓` : `Add to cart${qty > 1 ? ` ×${qty}` : ""}`}
                  </button>

                  <Link
                    href="/ingredients"
                    style={{
                      textAlign: "center",
                      fontSize: "clamp(9px, 0.8vw, 11px)",
                      fontWeight: 600,
                      color: "#8a6a5a",
                      textDecoration: "none",
                    }}
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        .product-card {
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(43,27,18,0.13);
        }

        @media (max-width: 768px) {
          main {
            height: auto !important;
            overflow: auto !important;
          }
          main > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 12px 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
