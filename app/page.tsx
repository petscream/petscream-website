"use client";

import Image from "next/image";
import Link from "next/link";

const dogNames = [
  "Lycan", "Nellie", "Lilou", "Wendell", "Penny", "Bode", "Rio", "Zizi", "Summer", "Roxy",
  "Pati", "Rolex", "Denali", "Cyrus", "Bal", "Rossie", "Thor", "Masky", "Jeff", "Max", "Bella", "Luna", "Nilou",
];

export default function HomePage() {
  const allNames = [...dogNames, ...dogNames];

  return (
    <main
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#FFF6E9",
        fontFamily: "ui-rounded, system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section className="heroGrid">
        {/* Left */}
        <div className="heroPhoto">
          <Image
            src="/images/dog-hero.png"
            alt="Happy pet enjoying Petscream"
            fill
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />

          <div className="heroOverlay">
            <h1>
              Frozen Treats.
              <br />
              <span>Happy Pets.</span>
            </h1>

            <p>
              Homemade daily frozen treats for pets 🐾
              <br />
              Fresh, healthy and wag-approved!
            </p>

            <Link href="/shop" className="shopButton">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="treatsBox">
          <Image
            src="/images/treats-grid.png"
            alt="Petscream treats collection"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marqueeSection">
        <p className="marqueeTitle">Tried &amp; tail-wagged by</p>

        <div className="marqueeWrap">
          <div className="marqueeTrack">
            {allNames.map((name, i) => (
              <span key={i} className="dogPill">
                🐾 {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BAR */}
      <section className="bottomBar">
        <InfoItem emoji="🚚" title="Local Delivery" text="Mon–Fri 7–9PM · Sat–Sun 10AM–5PM" bg="#FDE8C8" />

        <InfoItem emoji="❄️" title="Frozen & Fresh" text="Handmade Daily" bg="#E8F7F7" />

        <div className="infoItem">
          <div className="logoIcon">
            <Image src="/images/logo.png" alt="Petscream" fill style={{ objectFit: "contain" }} sizes="36px" />
          </div>
          <div>
            <p className="infoTitle">Pets Love It</p>
            <p className="infoText">Real Taste. Real Joy.</p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/petscreamnyc"
          target="_blank"
          rel="noopener noreferrer"
          className="infoItem"
          style={{ textDecoration: "none" }}
        >
          <div className="roundIcon" style={{ background: "#f0e6f6" }}>📸</div>
          <div>
            <p className="infoTitle">Follow Our Adventures</p>
            <p className="infoText">@petscreamnyc</p>
          </div>
        </a>
      </section>

      <style jsx>{`
        .heroGrid {
          display: grid;
          grid-template-columns: 50% 50%;
          flex: 1;
          min-height: 620px;
        }

        .heroPhoto {
          position: relative;
          overflow: hidden;
          min-height: 620px;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.58) 0%,
            rgba(0, 0, 0, 0.18) 68%,
            rgba(255, 246, 233, 0.96) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 48px;
        }

        .heroOverlay h1 {
          font-size: clamp(32px, 4vw, 60px);
          font-weight: 900;
          color: white;
          line-height: 1.05;
          margin: 0 0 14px;
          letter-spacing: -0.03em;
        }

        .heroOverlay h1 span {
          color: #f4a63a;
        }

        .heroOverlay p {
          color: rgba(255, 255, 255, 0.92);
          font-size: 15px;
          margin: 0 0 28px;
          max-width: 340px;
          line-height: 1.6;
        }

        .shopButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f4a63a;
          color: white;
          border-radius: 999px;
          padding: 13px 34px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          width: fit-content;
          box-shadow: 0 8px 20px rgba(244, 166, 58, 0.4);
        }

        .treatsBox {
          position: relative;
          overflow: hidden;
          background: #f5f0e8;
          min-height: 620px;
        }

        .marqueeSection {
          border-top: 1px solid #ecdccb;
          border-bottom: 1px solid #ecdccb;
          padding: 6px 0 8px;
          overflow: hidden;
          background: white;
          flex-shrink: 0;
        }

        .marqueeTitle {
          text-align: center;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b09a8a;
          margin: 0 0 6px;
        }

        .marqueeWrap {
          overflow: hidden;
        }

        .marqueeTrack {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .dogPill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff6e9;
          border: 1.5px solid #f1e3d3;
          border-radius: 999px;
          padding: 5px 14px;
          margin-right: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #2b1b12;
          white-space: nowrap;
        }

        .bottomBar {
          background: #fff6e9;
          padding: 12px 32px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 32px;
          flex-shrink: 0;
        }

        .infoItem {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .roundIcon,
        .logoIcon {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .logoIcon {
          background: #fde8c8;
          overflow: hidden;
          position: relative;
        }

        .infoTitle {
          font-size: 12px;
          font-weight: 700;
          color: #2b1b12;
          margin: 0;
        }

        .infoText {
          font-size: 11px;
          color: #8a6a5a;
          margin: 0;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .heroGrid {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .heroPhoto {
            min-height: 560px;
          }

          .heroOverlay {
            padding: 34px 26px;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.58) 0%,
              rgba(0, 0, 0, 0.28) 58%,
              rgba(255, 246, 233, 0.7) 100%
            );
          }

          .heroOverlay h1 {
            font-size: 46px;
            line-height: 1;
          }

          .heroOverlay p {
            font-size: 17px;
            max-width: 260px;
          }

          .shopButton {
            padding: 12px 30px;
            font-size: 15px;
          }

          .treatsBox {
            min-height: 300px;
            margin: 0 18px 18px;
            border-radius: 24px;
            background: #fff6e9;
          }

          .bottomBar {
            padding: 20px 22px 28px;
            justify-content: flex-start;
            gap: 22px;
          }

          .infoItem {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

function InfoItem({
  emoji,
  title,
  text,
  bg,
}: {
  emoji: string;
  title: string;
  text: string;
  bg: string;
}) {
  return (
    <div className="infoItem">
      <div className="roundIcon" style={{ background: bg }}>
        {emoji}
      </div>
      <div>
        <p className="infoTitle">{title}</p>
        <p className="infoText">{text}</p>
      </div>
    </div>
  );
}
