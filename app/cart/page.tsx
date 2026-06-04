"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const BOROUGHS = ["Brooklyn", "Queens", "Staten Island", "Manhattan"];

const WEEKDAYS = [
  { label: "Tuesday", hours: "7PM – 9PM" },
  { label: "Thursday", hours: "7PM – 9PM" },
];

const WEEKENDS = [
  { label: "Saturday", hours: "10AM – 5PM" },
  { label: "Sunday", hours: "10AM – 5PM" },
];

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <main style={{ minHeight: "100vh", background: "#FFF6E9", color: "#2B1B12", fontFamily: "ui-rounded, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 8px" }}>Your cart</h1>
        <p style={{ color: "#8a6a5a", fontSize: 15, marginBottom: 40 }}>
          Cash on delivery · Brooklyn, Queens, Staten Island, Manhattan
        </p>

        {items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 48 }}>🛒</div>
            <p style={{ fontSize: 18, color: "#6b4c3b", margin: "16px 0 24px" }}>Your cart is empty.</p>
            <Link href="/shop" style={{ background: "#2FB7B5", color: "white", borderRadius: 999, padding: "12px 28px", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Browse treats
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>

            {/* Left — Cart Items */}
            <div style={{ flex: "1 1 420px" }}>
              <div style={{ marginBottom: 32 }}>
                {items.map((item) => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 16, background: "white", borderRadius: 20, padding: 16, marginBottom: 12, border: "1px solid #f1e3d3" }}>
                    <div style={{ position: "relative", width: 72, height: 72, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: "#F9F3EA" }}>
                      <Image src={item.image} alt={item.name} fill style={{ objectFit: "contain" }} sizes="72px" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 11, fontWeight: 600, color: "#2FB7B5", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{item.subtitle}</p>
                      <p style={{ fontSize: 16, fontWeight: 700, color: "#2B1B12", margin: "2px 0 8px" }}>{item.name}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={qBtnStyle}>−</button>
                        <span style={{ fontSize: 15, fontWeight: 600, minWidth: 20, textAlign: "center" }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={qBtnStyle}>+</button>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: 16, fontWeight: 800, margin: "0 0 8px" }}>${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "#c0a898", fontWeight: 500 }}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Summary */}
            <div style={{ flex: "0 0 300px" }}>
              <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #f1e3d3", position: "sticky", top: 80 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 20px" }}>Order summary</h2>

                {items.map((item) => (
                  <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14, color: "#4a3428" }}>
                    <span>{item.name} × {item.quantity}</span>
                    <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div style={{ borderTop: "1px solid #f1e3d3", margin: "16px 0", paddingTop: 16, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
                  <span style={{ fontSize: 18, fontWeight: 800 }}>${totalPrice.toFixed(2)}</span>
                </div>

                <div style={{ background: "#FDE8C8", borderRadius: 14, padding: "12px 16px", fontSize: 13, color: "#7a4a00", marginBottom: 20, fontWeight: 500 }}>
                  💵 Cash on delivery — pay when your treats arrive.
                </div>

                <button
                  onClick={() => router.push("/checkout")}
                  style={{ width: "100%", background: "#2FB7B5", color: "white", border: "none", borderRadius: 999, padding: "14px 0", fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "opacity 0.2s" }}
                >
                  Proceed to checkout →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const qBtnStyle: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 999,
  border: "1.5px solid #d8c7b6", background: "white",
  cursor: "pointer", fontSize: 16, fontWeight: 600,
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "#2B1B12",
};