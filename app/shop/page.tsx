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
      <div style={{ textAlign: "center", padding: "20px 24px 12px", flexShrink: 0 }}>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.28em",
          color: "#2FB7B5",
          margin: "0 0 6px",
        }}>
          Shop all treats
        </p>
        <h1 style={{
          fontSize: "clamp(18px, 2.5vw, 30px)",
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
        gap: 14,
        padding: "0 20px 20px",
        alignItems: "stretch",
      }}>
        {products.map((product) => (
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
              flex: 1,
              minHeight: 0,
              position: "relative",
            }}>
              <Image
                src={product.image}
                alt={`${product.subtitle} ${product.name}`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="20vw"
                priority={product.id === "heart-pop"}
              />
            </div>

            {/* İçerik */}
            <div style={{ padding: "12px 14px 14px", flexShrink: 0 }}>
              <p style={{
                fontSize: 9,
                fontWeight: 700,
                color: "#2FB7B5",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: "0 0 3px",
              }}>
                {product.subtitle}
              </p>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}>
                <h2 style={{ fontSize: "clamp(13px, 1.2vw, 17px)", fontWeight: 800, color: "#2B1B12", margin: 0 }}>
                  {product.name}
                </h2>
                <span style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#2B1B12",
                  background: "#FFF6E9",
                  borderRadius: 999,
                  padding: "2px 10px",
                  border: "1px solid #ecdccb",
                  marginLeft: 6,
                  flexShrink: 0,
                }}>
                  ${product.price}
                </span>
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => handleAdd(product)}
                  style={{
                    flex: 1,
                    background: added === product.id ? "#22a09e" : "#2FB7B5",
                    color: "white",
                    border: "none",
                    borderRadius: 999,
                    padding: "9px 0",
                    fontSize: "clamp(11px, 1vw, 13px)",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s",
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
                    padding: "9px 12px",
                    fontSize: "clamp(10px, 0.9vw, 12px)",
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

      <style>{`
        .product-card {
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(43,27,18,0.13);
        }

        /* ── MOBİL: 2 kolon, scroll ── */
        @media (max-width: 768px) {
          main {
            height: auto !important;
            overflow: auto !important;
          }
          main > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 14px 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
