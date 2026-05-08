"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Our story" },
    { href: "/whats-in-it", label: "What's in it" },
    { href: "/faqs", label: "FAQs" },
  ];

  return (
    <>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#FFF6E9",
        borderBottom: "1px solid #ecdccb",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <Image src="/images/logo.png" alt="PetsCream" width={32} height={32} />
            <span style={{ fontSize: 18, fontWeight: 800, color: "#2B1B12" }}>PetsCream</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: 14, fontWeight: 600, color: "#2B1B12", textDecoration: "none", whiteSpace: "nowrap" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sağ — Cart + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>

            {/* Cart */}
            <Link href="/cart" style={{ position: "relative", textDecoration: "none", display: "flex", alignItems: "center" }}>
              <svg width="24" height="24" fill="none" stroke="#2B1B12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {totalItems > 0 && (
                <span style={{
                  position: "absolute",
                  top: -6,
                  right: -8,
                  background: "#2FB7B5",
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Hamburger — sadece mobilde görünür */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#2B1B12",
                borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#2B1B12",
                borderRadius: 2,
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }} />
              <span style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#2B1B12",
                borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div style={{
            background: "#FFF6E9",
            borderTop: "1px solid #ecdccb",
            padding: "8px 0 16px",
          }}
          className="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 24px",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#2B1B12",
                  textDecoration: "none",
                  borderBottom: "1px solid #f1e3d3",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <style>{`
        /* Desktop: nav görünür, hamburger gizli */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .hamburger {
          display: none;
        }
        .mobile-menu {
          display: none;
        }

        /* Mobil: nav gizli, hamburger görünür */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
