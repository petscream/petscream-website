"use client";

import Image from "next/image";
import Link from "next/link";

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  return (
    <main className="home-main">

      {/* ── HERO ── */}
      <div className="hero-grid">

        {/* Left — dog hero photo */}
        <div className="hero-left">
          <Image
            src="/images/dog-hero.png"
            alt="Happy pet enjoying PetsCream"
            fill
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">
              Frozen Treats.<br />
              <span style={{ color: "#F4A63A" }}>Happy Pets.</span>
            </h1>
            <p className="hero-sub">
              Homemade daily frozen treats for pets 🐾<br />
              Fresh, healthy and wag-approved!
            </p>
            <Link href="/shop" className="hero-btn">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right — treats grid */}
        <div className="hero-right">
          <Image
            src="/images/treats-grid.png"
            alt="PetsCream treats collection"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <p className="marquee-label">Tried &amp; tail-wagged by</p>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            <div className="marquee-row">
              {dogNames.map((name, i) => (
                <span key={`a-${i}`} className="marquee-pill">🐾 {name}</span>
              ))}
            </div>
            <div className="marquee-row" aria-hidden="true">
              {dogNames.map((name, i) => (
                <span key={`b-${i}`} className="marquee-pill">🐾 {name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="bottom-bar">
        <div className="bottom-item">
          <div className="bottom-icon" style={{ background: "#FDE8C8" }}>🚚</div>
          <div>
            <p className="bottom-title">Local Delivery</p>
            <p className="bottom-sub">Mon–Fri 7–9PM · Sat–Sun 10AM–5PM</p>
          </div>
        </div>

        <div className="bottom-item">
          <div className="bottom-icon" style={{ background: "#E8F7F7" }}>❄️</div>
          <div>
            <p className="bottom-title">Frozen &amp; Fresh</p>
            <p className="bottom-sub">Handmade Daily</p>
          </div>
        </div>

        <div className="bottom-item">
          <div className="bottom-icon" style={{ background: "#FDE8C8", overflow: "hidden", position: "relative" }}>
            <Image src="/images/logo.png" alt="PetsCream" fill style={{ objectFit: "contain" }} sizes="36px" />
          </div>
          <div>
            <p className="bottom-title">Pets Love It</p>
            <p className="bottom-sub">Real Taste. Real Joy.</p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/petscreamnyc"
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-item"
          style={{ textDecoration: "none" }}
        >
          <div className="bottom-icon" style={{ background: "#f0e6f6" }}>📸</div>
          <div>
            <p className="bottom-title">Follow Our Adventures</p>
            <p className="bottom-sub">@petscreamnyc</p>
          </div>
        </a>
      </div>

      <style>{`
        /* ── BASE ── */
        .home-main {
          display: flex;
          flex-direction: column;
          background: #FFF6E9;
          font-family: ui-rounded, system-ui, sans-serif;
          height: calc(100dvh - 64px);
          overflow: hidden;
        }

        /* ── HERO GRID ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 50% 50%;
          flex: 1;
          min-height: 0;
        }

        .hero-left {
          position: relative;
          overflow: hidden;
        }

        .hero-right {
          position: relative;
          overflow: hidden;
          background: #f5f0e8;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.58) 0%,
            rgba(0,0,0,0.18) 68%,
            rgba(255,246,233,0.96) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 48px;
        }

        .hero-title {
          font-size: clamp(22px, 3.5vw, 60px);
          font-weight: 900;
          color: white;
          line-height: 1.05;
          margin: 0 0 14px;
          letter-spacing: -0.03em;
        }

        .hero-sub {
          color: rgba(255,255,255,0.92);
          font-size: clamp(12px, 1.4vw, 15px);
          margin: 0 0 28px;
          max-width: 340px;
          line-height: 1.6;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #F4A63A;
          color: white;
          border-radius: 999px;
          padding: clamp(10px, 1.2vw, 13px) clamp(20px, 2.5vw, 34px);
          font-size: clamp(12px, 1.4vw, 15px);
          font-weight: 800;
          text-decoration: none;
          width: fit-content;
          box-shadow: 0 8px 20px rgba(244,166,58,0.4);
        }

        /* ── MARQUEE ── */
        .marquee-wrap {
          border-top: 1px solid #ecdccb;
          border-bottom: 1px solid #ecdccb;
          padding: 6px 0 8px;
          overflow: hidden;
          background: white;
          flex-shrink: 0;
        }

        .marquee-label {
          text-align: center;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b09a8a;
          margin: 0 0 6px;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-row {
          display: flex;
        }

        .marquee-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFF6E9;
          border: 1.5px solid #f1e3d3;
          border-radius: 999px;
          padding: 5px 14px;
          margin-right: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #2B1B12;
          white-space: nowrap;
        }

        /* ── BOTTOM BAR ── */
        .bottom-bar {
          background: #FFF6E9;
          padding: 12px 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          flex-shrink: 0;
        }

        .bottom-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bottom-icon {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .bottom-title {
          font-size: 12px;
          font-weight: 700;
          color: #2B1B12;
          margin: 0;
        }

        .bottom-sub {
          font-size: 11px;
          color: #8a6a5a;
          margin: 0;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .home-main {
            height: auto;
            overflow: auto;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            flex: none;
          }

          .hero-left {
            height: 60vw;
            min-height: 260px;
          }

          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(0,0,0,0.5) 0%,
              rgba(0,0,0,0.25) 60%,
              rgba(0,0,0,0.1) 100%
            );
            padding: 28px 24px;
            justify-content: flex-end;
          }

          .hero-title {
            font-size: clamp(22px, 6vw, 36px);
            margin-bottom: 8px;
          }

          .hero-sub {
            font-size: 13px;
            margin-bottom: 16px;
          }

          .hero-btn {
            padding: 10px 24px;
            font-size: 13px;
          }

          .hero-right {
            height: 56vw;
            min-height: 220px;
          }

          .bottom-bar {
            padding: 12px 16px;
            gap: 16px;
            justify-content: flex-start;
          }
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
