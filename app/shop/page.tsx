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
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.28em", color: "#2FB7B5", margin: "0 0 10px" }}>
            Shop all treats
          </p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#2B1B12", margin: "0 0 12px" }}>
            Frozen treats for happy tails
          </h1>
          <p style={{ fontSize: 16, color: "#5c4638", maxWidth: 480, margin: "0 auto" }}>
            Explore our launch collection and pick your Petscream favorites.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 28,
        }}>
          {products.map((product) => (
            <article key={product.id} style={{
              background: "white",
              borderRadius: 28,
              border: "1px solid #ecdccb",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(43,27,18,0.07)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}>
              <div style={{ background: "#F9F3EA", padding: 20, display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: 280, aspectRatio: "4/5" }}>
                  <Image
                    src={product.image}
                    alt={`${product.subtitle} ${product.name}`}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="280px"
                    priority={product.id === "heart-pop"}
                  />
                </div>
              </div>

              <div style={{ padding: "20px 24px 24px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#2FB7B5", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>
                  {product.subtitle}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: "#2B1B12", margin: 0 }}>{product.name}</h2>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#2B1B12" }}>${product.price}</span>
                </div>
                <p style={{ fontSize: 13, color: "#6b5648", margin: "0 0 20px" }}>Not ice cream. Petscream.</p>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => handleAdd(product)}
                    style={{
                      flex: 1,
                      background: added === product.id ? "#22a09e" : "#2FB7B5",
                      color: "white",
                      border: "none",
                      borderRadius: 999,
                      padding: "10px 0",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {added === product.id ? "Added ✓" : "Add to cart"}
                  </button>
                  <Link href={product.href} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1.5px solid #d8c7b6",
                    borderRadius: 999,
                    padding: "10px 18px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#2B1B12",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}>
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
