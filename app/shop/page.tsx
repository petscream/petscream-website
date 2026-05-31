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
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] + delta) }));
  };

  const handleAdd = (product: typeof products[0]) => {
    const qty = quantities[product.id];
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, subtitle: product.subtitle, image: product.image, price: product.price });
    }
    setAdded(product.id);
    setTimeout(() => {
      setAdded(null);
      setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
    }, 1500);
  };

  return (
    <main className="shop-main">

      <div className="shop-header">
        <p className="shop-label">Shop all treats</p>
        <h1 className="shop-title">Frozen treats for happy tails 🐾</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => {
          const qty = quantities[product.id];
          const isAdded = added === product.id;

          return (
            <article key={product.id} className="product-card">

              {/* Görsel — tıklayınca detay sayfasına gider */}
              <Link href={product.href} className="card-image-link">
                <div className="card-image">
                  <Image
                    src={product.image}
                    alt={`${product.subtitle} ${product.name}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={product.id === "heart-pop"}
                  />
                </div>
              </Link>

              <div className="card-body">
                <p className="card-subtitle">{product.subtitle}</p>
                <div className="card-row">
                  <Link href={product.href} className="card-name-link">
                    <h2 className="card-name">{product.name}</h2>
                  </Link>
                  <span className="card-price">${product.price}</span>
                </div>

                {/* Gramaj */}
                <p className="card-weight">{product.weightG}g · {product.weightOz}oz</p>

                <div className="qty-selector">
                  <button className="qty-btn" onClick={() => change(product.id, -1)} disabled={qty <= 1} style={{ opacity: qty <= 1 ? 0.4 : 1 }}>−</button>
                  <span className="qty-num">{qty}</span>
                  <button className="qty-btn" onClick={() => change(product.id, +1)}>+</button>
                </div>

                <button className={`add-btn ${isAdded ? "added" : ""}`} onClick={() => handleAdd(product)} disabled={isAdded}>
                  {isAdded ? `Added${qty > 1 ? ` ×${qty}` : ""} ✓` : `Add to cart${qty > 1 ? ` ×${qty}` : ""}`}
                </button>

                <Link href={product.href} className="learn-link">Details →</Link>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        .shop-main {
          min-height: 100dvh;
          background: #FFF6E9;
          color: #2B1B12;
          font-family: ui-rounded, system-ui, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .shop-header {
          text-align: center;
          padding: 24px 24px 12px;
          flex-shrink: 0;
        }
        .shop-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: #2FB7B5;
          margin: 0 0 6px;
        }
        .shop-title {
          font-size: clamp(20px, 2.5vw, 30px);
          font-weight: 800;
          color: #2B1B12;
          margin: 0;
        }

        /* 4'lü grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 12px 24px 40px;
          flex: 1;
        }

        /* Kartlar arka planla kaynaşıyor */
        .product-card {
          background: white;
          border-radius: 24px;
          border: none;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(43,27,18,0.09);
          display: flex;
          flex-direction: column;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(43,27,18,0.14);
        }

        .card-image-link {
          display: block;
          text-decoration: none;
        }

        .card-image {
          background: #F9F3EA;
          position: relative;
          aspect-ratio: 3 / 4;
          flex-shrink: 0;
          overflow: hidden;
        }
        .card-image img {
          transition: transform 0.3s ease;
        }
        .card-image:hover img {
          transform: scale(1.04);
        }

        .card-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          background: #F4A63A;
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .card-body {
          padding: 12px 14px 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 5px;
        }

        .card-subtitle {
          font-size: 9px;
          font-weight: 700;
          color: #2FB7B5;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
        }

        .card-name-link { text-decoration: none; }

        .card-name {
          font-size: clamp(13px, 1.1vw, 17px);
          font-weight: 800;
          color: #2B1B12;
          margin: 0;
        }

        .card-price {
          font-size: 13px;
          font-weight: 800;
          color: #2B1B12;
          background: #FFF6E9;
          border-radius: 999px;
          padding: 2px 10px;
          border: 1px solid #ecdccb;
          flex-shrink: 0;
        }

        .card-weight {
          font-size: 11px;
          color: #a08070;
          margin: 0;
          font-weight: 500;
        }

        .qty-selector {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFF6E9;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 3px 6px;
          margin-top: 2px;
        }

        .qty-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: none;
          background: #2FB7B5;
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .qty-btn:disabled { background: #e0d5cc; cursor: default; }

        .qty-num {
          font-size: 15px;
          font-weight: 800;
          color: #2B1B12;
          min-width: 24px;
          text-align: center;
        }

        .add-btn {
          width: 100%;
          background: #2FB7B5;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 9px 0;
          font-size: clamp(11px, 0.9vw, 13px);
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 2px;
        }
        .add-btn.added { background: #22a09e; cursor: default; }

        .learn-link {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          color: #8a6a5a;
          text-decoration: none;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 8px 14px 28px;
          }
          .card-name { font-size: 15px; }
          .qty-btn { width: 28px; height: 28px; }
          .add-btn { font-size: 13px; padding: 10px 0; }
        }
      `}</style>
    </main>
  );
}
