"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, subtitle: product.subtitle, image: product.image, price: product.price });
    }
    setAdded(true);
    setTimeout(() => { setAdded(false); setQty(1); }, 1800);
  };

  return (
    <main className="detail-main">

      {/* Geri butonu */}
      <div className="back-wrap">
        <Link href="/shop" className="back-btn">← All treats</Link>
      </div>

      <div className="detail-grid">

        {/* Sol — görsel */}
        <div className="detail-image-wrap">
          {product.badge && <span className="detail-badge">{product.badge}</span>}
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Sağ — bilgiler */}
        <div className="detail-info">

          <p className="detail-subtitle">{product.subtitle}</p>
          <h1 className="detail-name">{product.name}</h1>

          {/* Fiyat + gramaj */}
          <div className="detail-meta">
            <span className="detail-price">${product.price}</span>
            <span className="detail-weight">{product.weightG}g · {product.weightOz}oz</span>
            {product.count && <span className="detail-count">{product.count}</span>}
          </div>

          {/* Açıklama */}
          <p className="detail-desc">{product.description}</p>

          {/* İçindekiler */}
          <div className="detail-ingredients">
            <p className="section-label">Ingredients</p>
            <div className="ingredient-pills">
              {product.ingredients.map((ing) => (
                <span key={ing} className="ingredient-pill">🌿 {ing}</span>
              ))}
            </div>
          </div>

          {/* Adet + sepete ekle */}
          <div className="detail-actions">
            <div className="qty-selector">
              <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))} disabled={qty <= 1} style={{ opacity: qty <= 1 ? 0.4 : 1 }}>−</button>
              <span className="qty-num">{qty}</span>
              <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
            </div>

            <button className={`add-btn ${added ? "added" : ""}`} onClick={handleAdd} disabled={added}>
              {added ? `Added${qty > 1 ? ` ×${qty}` : ""} ✓` : `Add to cart${qty > 1 ? ` ×${qty}` : ""}`}
            </button>
          </div>

          {/* Bilgi kartları */}
          <div className="detail-badges">
            <div className="info-card">❄️ <span>Frozen Fresh<br /><small>Made daily</small></span></div>
            <div className="info-card">🐾 <span>Dog Approved<br /><small>Tail-wagged</small></span></div>
            <div className="info-card">🌿 <span>100% Natural<br /><small>No additives</small></span></div>
          </div>
        </div>
      </div>

      <style>{`
        .detail-main {
          min-height: 100dvh;
          background: #FFF6E9;
          color: #2B1B12;
          font-family: ui-rounded, system-ui, sans-serif;
          padding: 0 0 60px;
        }

        .back-wrap {
          padding: 20px 32px 0;
        }

        .back-btn {
          font-size: 13px;
          font-weight: 600;
          color: #8a6a5a;
          text-decoration: none;
        }
        .back-btn:hover { color: #2B1B12; }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 32px;
          align-items: start;
        }

        .detail-image-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          background: #F9F3EA;
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid #ecdccb;
        }

        .detail-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          background: #F4A63A;
          color: white;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 14px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .detail-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 8px;
        }

        .detail-subtitle {
          font-size: 11px;
          font-weight: 700;
          color: #2FB7B5;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
        }

        .detail-name {
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 900;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.05;
        }

        .detail-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .detail-price {
          font-size: 28px;
          font-weight: 900;
          color: #2B1B12;
        }

        .detail-weight {
          background: white;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #6b4c3b;
        }

        .detail-count {
          background: #E8F7F7;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #1a6b6a;
        }

        .detail-desc {
          font-size: 15px;
          color: #5a3e32;
          line-height: 1.7;
          margin: 0;
        }

        .section-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #b09a8a;
          margin: 0 0 8px;
        }

        .ingredient-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ingredient-pill {
          background: white;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #2B1B12;
        }

        .detail-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 4px;
        }

        .qty-selector {
          display: flex;
          align-items: center;
          gap: 4px;
          background: white;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 4px 8px;
          flex-shrink: 0;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: #2FB7B5;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .qty-btn:disabled { background: #e0d5cc; cursor: default; }

        .qty-num {
          font-size: 16px;
          font-weight: 800;
          min-width: 28px;
          text-align: center;
        }

        .add-btn {
          flex: 1;
          background: #2FB7B5;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 14px 0;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .add-btn.added { background: #22a09e; cursor: default; }

        .detail-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        .info-card {
          flex: 1;
          min-width: 90px;
          background: white;
          border: 1px solid #ecdccb;
          border-radius: 16px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 20px;
        }

        .info-card span {
          font-size: 12px;
          font-weight: 700;
          color: #2B1B12;
          line-height: 1.4;
        }

        .info-card small {
          font-weight: 500;
          color: #8a6a5a;
          display: block;
        }

        @media (max-width: 768px) {
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 16px 20px;
          }
          .back-wrap { padding: 16px 20px 0; }
          .detail-name { font-size: 32px; }
          .detail-actions { flex-direction: column; }
          .add-btn { width: 100%; }
          .qty-selector { justify-content: center; }
        }
      `}</style>
    </main>
  );
}
