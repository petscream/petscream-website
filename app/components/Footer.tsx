"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      background: "#2B1B12",
      color: "#f5ede4",
      fontFamily: "ui-rounded, system-ui, sans-serif",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "48px 24px 32px",
      }}>

        {/* ── TOP ROW ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          marginBottom: 40,
        }}
          className="footer-grid"
        >
          {/* Sol — Logo + slogan */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 12 }}>
              <Image src="/images/logo.png" alt="PetsCream" width={36} height={36} />
              <span style={{ fontSize: 18, fontWeight: 900, color: "white" }}>PetsCream</span>
            </Link>
            <p style={{ fontSize: 14, color: "#c4a98a", lineHeight: 1.6, margin: "0 0 16px" }}>
              Homemade frozen treats for happy pets. 🐾<br />
              Fresh, real, and wag-approved.
            </p>
            <a
              href="https://www.instagram.com/petscreamnyc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#3d2a1e",
                border: "1px solid #5a3d2b",
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "#f5ede4",
                textDecoration: "none",
              }}
            >
              📸 @petscreamnyc
            </a>
          </div>

          {/* Orta — Delivery */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 16px" }}>
              Delivery
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { day: "Monday", hours: "7:00 PM – 9:00 PM" },
                { day: "Thursday", hours: "7:00 PM – 9:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
              ].map(({ day, hours }) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{day}</span>
                  <span style={{ fontSize: 14, color: "#c4a98a" }}>{hours}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: "10px 14px", background: "#3d2a1e", borderRadius: 10, fontSize: 13, color: "#c4a98a", lineHeight: 1.5 }}>
              🚚 NYC local delivery only<br />
              💰 $50 minimum order
            </div>
          </div>

          {/* Sağ — Links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 16px" }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "Our Story" },
                { href: "/whats-in-it", label: "What's In It" },
                { href: "/faqs", label: "FAQs" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: 14, color: "#c4a98a", textDecoration: "none", fontWeight: 500 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ borderTop: "1px solid #3d2a1e", paddingTop: 24 }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
            <p style={{ fontSize: 13, color: "#7a5c48", margin: 0 }}>
              © 2026 PetsCream. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/allergen", label: "Allergen Info" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: 13, color: "#7a5c48", textDecoration: "none", fontWeight: 500 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
