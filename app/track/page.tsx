"use client";

import { useState } from "react";
import Link from "next/link";

const ORDER_STATUS: Record<string, { label: string; emoji: string; color: string }> = {
  pending:          { label: "Order Received",   emoji: "📋", color: "#F4A63A" },
  paid:             { label: "Paid",             emoji: "💳", color: "#22c55e" },
  preparing:        { label: "Preparing",        emoji: "🧊", color: "#2FB7B5" },
  ready:            { label: "Ready",            emoji: "✅", color: "#22c55e" },
  out_for_delivery: { label: "Out for Delivery", emoji: "🚚", color: "#6c63ff" },
  delivered:        { label: "Delivered",        emoji: "🐾", color: "#22c55e" },
  cancelled:        { label: "Cancelled",        emoji: "✕",  color: "#ef4444" },
  refunded:         { label: "Refunded",         emoji: "↩️", color: "#8a6a5a" },
};

export default function TrackPage() {
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!email || !orderNumber) return;
    setLoading(true);
    setError("");
    setOrder(null);

    const res = await fetch("/api/orders/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, order_number: orderNumber.toUpperCase() }),
    });
    const data = await res.json();

    if (data.error) { setError(data.error); }
    else { setOrder(data.order); }
    setLoading(false);
  };

  const st = order ? (ORDER_STATUS[order.status] || ORDER_STATUS.pending) : null;

  return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", fontFamily: "ui-rounded, system-ui, sans-serif", color: "#2B1B12", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🐾</div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>Track your order</h1>
          <p style={{ fontSize: 14, color: "#8a6a5a", margin: 0 }}>Enter your email and order number to check your order status.</p>
        </div>

        <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb", marginBottom: 16 }}>
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="your@email.com" style={inputStyle} onKeyDown={e => e.key === "Enter" && handleTrack()} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Order number</label>
            <input value={orderNumber} onChange={e => setOrderNumber(e.target.value)} placeholder="PSC-1001" style={inputStyle} onKeyDown={e => e.key === "Enter" && handleTrack()} />
          </div>
          {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>}
          <button onClick={handleTrack} disabled={!email || !orderNumber || loading} style={{
            width: "100%", background: "#2FB7B5", color: "white", border: "none", borderRadius: 999,
            padding: "13px 0", fontSize: 15, fontWeight: 700,
            cursor: email && orderNumber ? "pointer" : "not-allowed",
            opacity: email && orderNumber ? 1 : 0.5,
          }}>
            {loading ? "Searching..." : "Track order →"}
          </button>
        </div>

        {order && st && (
          <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <p style={{ fontWeight: 800, fontSize: 18, margin: "0 0 4px" }}>{order.order_number}</p>
                <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>
                  {new Date(order.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
              <span style={{ background: st.color + "20", color: st.color, borderRadius: 999, padding: "6px 14px", fontSize: 12, fontWeight: 700 }}>
                {st.emoji} {st.label}
              </span>
            </div>

            <div style={{ borderTop: "1px solid #f1e3d3", paddingTop: 16, marginBottom: 16 }}>
              {order.order_items?.map((item: any, i: number) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#4a3428", marginBottom: 6 }}>
                  <span>{item.product_name} × {item.quantity}</span>
                  <span style={{ fontWeight: 600 }}>${item.total_price.toFixed(2)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, paddingTop: 10, borderTop: "1px solid #f1e3d3" }}>
                <span style={{ fontWeight: 700 }}>Total</span>
                <span style={{ fontWeight: 800 }}>${order.total.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ background: "#E8F7F7", borderRadius: 12, padding: "10px 14px", fontSize: 13, color: "#1a6b6a" }}>
              🚚 {order.delivery_time_slot}
            </div>
          </div>
        )}

        <p style={{ textAlign: "center", fontSize: 13, color: "#8a6a5a", marginTop: 20 }}>
          Have an account? <Link href="/account" style={{ color: "#2FB7B5", fontWeight: 600 }}>Sign in →</Link>
        </p>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: 11, fontWeight: 700, color: "#8a6a5a", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.1em" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 14px", border: "1.5px solid #e8d8c8", borderRadius: 12, fontSize: 14, color: "#2B1B12", background: "#FDFAF6", outline: "none", boxSizing: "border-box" };
