"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <h1>
            Frozen Treats. <br />
            <span>Happy Pets.</span>
          </h1>

          <p>Homemade daily frozen treats for pets</p>

          <p>Fresh, healthy and wag-approved!</p>

          <button className="cta">Shop Now</button>
        </div>

        <div className="heroImageWrap">
          <Image
            src="/products.png"   // 👉 buraya kendi görsel adını koy (public içine attığın)
            alt="Petscream products"
            width={900}
            height={700}
            className="heroImage"
            priority
          />
        </div>
      </section>

      <style jsx>{`
        main {
          background: #fff6e9;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 620px;
          overflow: hidden;
        }

        .heroText {
          padding: 70px 8%;
        }

        .heroText h1 {
          font-size: 64px;
          line-height: 0.95;
          margin-bottom: 24px;
          color: #2b1b12;
        }

        .heroText h1 span {
          color: #f4a63a;
        }

        .heroText p {
          font-size: 22px;
          line-height: 1.4;
          margin-bottom: 12px;
          max-width: 380px;
          color: #2b1b12;
        }

        .cta {
          margin-top: 20px;
          background: #f4a63a;
          border: none;
          padding: 14px 26px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
        }

        .heroImageWrap {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .heroImage {
          width: 100%;
          max-width: 520px;
          height: auto;
          object-fit: contain;
        }

        /* 🔥 MOBİL FIX */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .heroText {
            padding: 40px 20px 10px;
          }

          .heroText h1 {
            font-size: 44px;
          }

          .heroText p {
            font-size: 20px;
            max-width: 100%;
          }

          .heroImageWrap {
            padding: 10px 20px 30px;
          }

          .heroImage {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
