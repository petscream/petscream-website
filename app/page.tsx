"use client";

import Image from "next/image";
import Link from "next/link";

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  const allNames = [...dogNames, ...dogNames];

  return (
    <main className="page">
      <section className="heroGrid">
        <div className="heroLeft">
          <Image
            src="/images/dog-hero.png"
            alt="Happy pet enjoying PetsCream"
            fill
            className="heroImage"
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <div className="heroOverlay">
            <h1 className="heroTitle">
              Frozen Treats.<br />
              <span>Happy Pets.</span>
            </h1>

            <p className="heroText">
              Homemade daily frozen treats for pets 🐾<br />
              Fresh, healthy and wag-approved!
            </p>

            <Link href="/shop" className="shopButton">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="heroRight">
          <div className="treatsCard">
            <Image
              src="/images/treats-grid.png"
              alt="PetsCream treats collection"
              fill
              className="treatsImage"
              priority
              sizes="(max-width: 900px) 92vw, 50vw"
            />
          </div>

          <div className="deliveryCard">
            <div className="deliveryIcon">🚚</div>

            <div className="deliveryText">
              <p>Delivery Days &amp; Hours</p>
              <div>
                <span>Mon to Fri · 7PM to 9PM</span>
                <span>Sat to Sun · 10AM to 5PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marqueeSection">
        <p className="marqueeTitle">Tried &amp; tail-wagged by</p>

        <div className="marqueeWrap">
          <div className="marqueeTrack">
            {allNames.map((name, i) => (
              <span key={i} className="namePill">
                🐾 {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bottomBar">
        <div className="infoItem">
          <div className="infoIcon orange">🚚</div>
          <div>
            <p>Local Delivery</p>
            <span>Mon to Fri 7PM to 9PM · Sat to Sun 10AM to 5PM</span>
          </div>
        </div>

        <div className="infoItem">
          <div className="infoIcon teal">❄️</div>
          <div>
            <p>Frozen &amp; Fresh</p>
            <span>Handmade Daily</span>
          </div>
        </div>

        <div className="infoItem">
          <div className="logoIcon">
            <Image
              src="/images/logo.png"
              alt="PetsCream"
              fill
              style={{ objectFit: "contain" }}
              sizes="36px"
            />
          </div>
          <div>
            <p>Pets Love It</p>
            <span>Real Taste. Real Joy.</span>
          </div>
        </div>

        <a
          href="https://www.instagram.com/petscreamnyc"
          target="_blank"
          rel="noopener noreferrer"
          className="infoItem instagramItem"
        >
          <div className="infoIcon purple">📸</div>
          <div>
            <p>Follow Our Adventures</p>
            <span>@petscreamnyc</span>
          </div>
        </a>
      </section>

      <style jsx>{`
        .page {
          min-height: calc(100vh - 64px);
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          background: #FFF6E9;
          font-family: ui-rounded, system-ui, sans-serif;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 50% 50%;
          width: 100%;
          min-height: 560px;
          background: #FFF6E9;
        }

        .heroLeft {
          position: relative;
          overflow: hidden;
          min-height: 560px;
        }

        .heroImage {
          object-fit: cover;
          object-position: center 28%;
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

        .heroTitle {
          font-size: clamp(36px, 4.2vw, 64px);
          font-weight: 900;
          color: white;
          line-height: 1.05;
          margin: 0 0 14px;
          letter-spacing: -0.04em;
        }

        .heroTitle span {
          color: #F4A63A;
        }

        .heroText {
          color: rgba(255, 255, 255, 0.92);
          font-size: 16px;
          margin: 0 0 28px;
          max-width: 360px;
          line-height: 1.6;
        }

        .shopButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #F4A63A;
          color: white;
          border-radius: 999px;
          padding: 13px 34px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          width: fit-content;
          box-shadow: 0 12px 26px rgba(244, 166,
