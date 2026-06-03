"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const orderNumber = params.get("order");

  return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-rounded, system-ui, sans-serif", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🐾</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#2B1B12", margin: "0 0 8px" }}>Order received!</h1>
        {orderNumber && (
          <p style={{ fontSize: 16, color: "#2FB7B5", fontWeight: 700, margin: "0 0 12px" }}>
            Order #{orderNumber}
          </p>
        )}
        <p style={{ fontSize: 15, color: "#6b4c3b", margin: "0 0 32px", lineHeight: 1.7 }}>
          We'll send a confirmation to your email. You can track your order status in your account.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/account" style={{ background: "#2FB7B5", color: "white", borderRadius: 999, padding: "12px 28px", fontWeight: 700, textDecoration: "none", fontSize: 15 }}>
            Track my order
          </Link>
          <Link href="/shop" style={{ background: "white", color: "#2B1B12", borderRadius: 999, padding: "12px 28px", fontWeight: 700, textDecoration: "none", fontSize: 15, border: "1.5px solid #ecdccb" }}>
            Shop more
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
