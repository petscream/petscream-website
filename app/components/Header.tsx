"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
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
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/images/logo.png" alt="PetsCream" width={32} height={32} />
          <span style={{ fontSize: 18, fontWeight: 800, color: "#2B1B12" }}>PetsCream</span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Link href="/shop" style={{ fontSize: 14, fontWeight: 600, color: "#2B1B12", textDecoration: "none" }}>Shop</Link>
          <Link href="/our-story" style={{ fontSize: 14, fontWeight: 600, color: "#2B1B12", textDecoration: "none" }}>Our story</Link>
          <Link href="/whats-in-it" style={{ fontSize: 14, fontWeight: 600, color: "#2B1B12", textDecoration: "none" }}>What's in it</Link>
          <Link href="/faqs" style={{ fontSize: 14, fontWeight: 600, color: "#2B1B12", textDecoration: "none" }}>FAQs</Link>
        </nav>

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
      </div>
    </header>
  );
}
