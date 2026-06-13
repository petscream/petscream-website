"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { createClient } from "../../lib/supabase";
import StripePayment from "../components/StripePayment";

const BOROUGHS = ["Brooklyn", "Queens", "Staten Island", "Manhattan"];
const DELIVERY_DAYS = [
  { label: "Tuesday", slot: "7PM – 9PM" },
  { label: "Thursday", slot: "7PM – 9PM" },
  { label: "Saturday", slot: "10AM – 5PM" },
  { label: "Sunday", slot: "10AM – 5PM" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const supabase = createClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", borough: "", address: "", apt: "", deliveryDay: "", note: "" });
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [showStripe, setShowStripe] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id || null);
      if (data.user?.email) setForm(prev => ({ ...prev, email: data.user!.email! }));
      if (data.user?.id) {
        supabase.from("profiles").select("full_name, phone").eq("id", data.user.id).single().then(({ data: profile }) => {
          if (profile) setForm(prev => ({ ...prev, name: profile.full_name || prev.name, phone: profile.phone || prev.phone }));
        });
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectedDay = DELIVERY_DAYS.find(d => d.label === form.deliveryDay);
  const isValid = form.name && form.email && form.phone && form.borough && form.address && form.deliveryDay;
  const stripeFee = paymentMethod === "card" ? parseFloat((totalPrice * 0.029 + 0.30).toFixed(2)) : 0;
  const finalTotal = parseFloat((totalPrice + stripeFee).toFixed(2));

  const createOrder = async (paymentIntentId?: string) => {
    const { data: { user: freshUser } } = await supabase.auth.getUser();
    const effectiveUserId = freshUser?.id || userId;
    const res = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: effectiveUserId,
        customer_name: form.name,
        customer_email: form.email,
        customer_phone: form.phone,
        street_address: form.address,
        borough: form.borough,
        apt: form.apt,
        delivery_time_slot: selectedDay ? `${selectedDay.label} · ${selectedDay.slot}` : "",
        delivery_note: form.note,
        subtotal: totalPrice,
        total: finalTotal,
        payment_method: paymentMethod,
        payment_status: paymentIntentId ? "paid" : "pending",
        stripe_payment_intent_id: paymentIntentId || null,
        items,
      }),
    });
    return res.json();
  };

  const handleCashSubmit = async () => {
    if (!isValid || items.length === 0) return;
    setStatus("sending");
    setError("");
    const data = await createOrder();
    if (data.error) { setError(data.error); setStatus("error"); return; }
    clearCart();
    router.push(`/checkout/success?order=${data.order.order_number}`);
  };

  const handleStripeSuccess = async (paymentIntentId: string) => {
    const data = await createOrder(paymentIntentId);
    if (data.error) { setError(data.error); return; }
    clearCart();
    router.push(`/checkout/success?order=${data.order.order_number}`);
  };

  if (items.length === 0) {
    return (
      <main style={{ minHeight: "100dvh", background: "#FFF6E9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-rounded, system-ui, sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48 }}>🛒</div>
          <p style={{ color: "#8a6a5a", margin: "16px 0 24px" }}>Your cart is empty.</p>
          <Link href="/shop" style={{ background: "#2FB7B5", color: "white", borderRadius: 999, padding: "12px 28px", fontWeight: 600, textDecoration: "none" }}>Browse treats</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", color: "#2B1B12", fontFamily: "ui-rounded, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px" }}>
        <Link href="/cart" style={{ fontSize: 13, color: "#8a6a5a", textDecoration: "none", fontWeight: 600 }}>← Back to cart</Link>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "16px 0 32px" }}>Checkout</h1>

        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 420px" }}>

            {/* Contact */}
            <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 20px" }}>Contact</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div><label style={labelStyle}>Full name</label><input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} /></div>
                <div><label style={labelStyle}>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" style={inputStyle} /></div>
              </div>
              <div><label style={labelStyle}>Phone</label><input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (212) 000 0000" style={inputStyle} /></div>
            </div>

            {/* Address */}
            <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 20px" }}>Delivery address</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div><label style={labelStyle}>Borough</label>
                  <select name="borough" value={form.borough} onChange={handleChange} style={inputStyle}>
                    <option value="">Select borough</option>
                    {BOROUGHS.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div><label style={labelStyle}>Apt / Unit</label><input name="apt" value={form.apt} onChange={handleChange} placeholder="Apt 4B" style={inputStyle} /></div>
              </div>
              <div><label style={labelStyle}>Street address</label><input name="address" value={form.address} onChange={handleChange} placeholder="123 Main St" style={inputStyle} /></div>
            </div>

            {/* Delivery day */}
            <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>Delivery day</h2>
              <p style={{ fontSize: 12, color: "#8a6a5a", margin: "0 0 16px" }}>Tue & Thu 7–9PM · Sat & Sun 10AM–5PM</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {DELIVERY_DAYS.map(day => (
                  <button key={day.label} onClick={() => setForm(p => ({ ...p, deliveryDay: day.label }))} style={{
                    padding: "10px 18px", borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: "pointer",
                    border: form.deliveryDay === day.label ? "2px solid #2FB7B5" : "1.5px solid #e8d8c8",
                    background: form.deliveryDay === day.label ? "#E8F7F7" : "white",
                    color: form.deliveryDay === day.label ? "#1a6b6a" : "#2B1B12",
                  }}>{day.label}</button>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <label style={labelStyle}>Delivery note (optional)</label>
                <textarea name="note" value={form.note} onChange={handleChange} placeholder="Leave at door, buzz #4B..." rows={2} style={{ ...inputStyle, resize: "none" }} />
              </div>
            </div>

            {/* Payment method */}
            <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 16px" }}>Payment</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[{ key: "cash", label: "Cash on delivery", icon: "💵" }, { key: "card", label: "Credit / Debit card", sub: "Secure payment via Stripe", icon: "💳" }].map(opt => (
                  <div key={opt.key} onClick={() => { setPaymentMethod(opt.key as any); setShowStripe(false); }} style={{
                    display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
                    border: `1.5px solid ${paymentMethod === opt.key ? "#2FB7B5" : "#e8d8c8"}`,
                    borderRadius: 14, cursor: "pointer",
                    background: paymentMethod === opt.key ? "#E8F7F7" : "white",
                  }}>
                    <span style={{ fontSize: 22 }}>{opt.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>{opt.label}</p>
                      {opt.sub && <p style={{ margin: 0, fontSize: 12, color: "#8a6a5a" }}>{opt.sub}</p>}
                    </div>
                    <div style={{ width: 18, height: 18, borderRadius: 999, border: `2px solid ${paymentMethod === opt.key ? "#2FB7B5" : "#ccc"}`, background: paymentMethod === opt.key ? "#2FB7B5" : "white" }} />
                  </div>
                ))}
              </div>

              {paymentMethod === "card" && showStripe && isValid && (
                <div style={{ marginTop: 20 }}>
                  <StripePayment items={items.map(i => ({ id: i.id, quantity: i.quantity }))} paymentMethod={paymentMethod} onSuccess={handleStripeSuccess} />
                </div>
              )}
            </div>
          </div>

          {/* Order summary */}
          <div style={{ flex: "0 0 300px" }}>
            <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #ecdccb", position: "sticky", top: 80 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 16px" }}>Order summary</h2>
              {items.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8, color: "#4a3428" }}>
                  <span>{item.name} × {item.quantity}</span>
                  <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ecdccb", margin: "16px 0", paddingTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "#8a6a5a", fontSize: 14 }}>Subtotal</span>
                  <span style={{ fontSize: 14 }}>${totalPrice.toFixed(2)}</span>
                </div>
                {paymentMethod === "card" && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: "#8a6a5a", fontSize: 14 }}>Card processing fee</span>
                    <span style={{ fontSize: 14 }}>${stripeFee.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, paddingTop: 10, borderTop: "1px solid #f1e3d3" }}>
                  <span style={{ fontWeight: 700 }}>Total</span>
                  <span style={{ fontSize: 18, fontWeight: 800 }}>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              {selectedDay && (
                <div style={{ background: "#E8F7F7", borderRadius: 12, padding: "10px 14px", marginBottom: 14, fontSize: 13 }}>
                  🚚 {selectedDay.label} · {selectedDay.slot}
                </div>
              )}
              {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>}

              {paymentMethod === "cash" ? (
                <button onClick={handleCashSubmit} disabled={!isValid || status === "sending"} style={{
                  width: "100%", background: "#2FB7B5", color: "white", border: "none", borderRadius: 999,
                  padding: "14px 0", fontSize: 16, fontWeight: 700,
                  cursor: isValid ? "pointer" : "not-allowed", opacity: isValid ? 1 : 0.5,
                }}>
                  {status === "sending" ? "Placing order..." : "Place order"}
                </button>
              ) : (
                <button onClick={() => { if (!isValid) return; setShowStripe(true); }} disabled={!isValid} style={{
                  width: "100%", background: "#2B1B12", color: "white", border: "none", borderRadius: 999,
                  padding: "14px 0", fontSize: 16, fontWeight: 700,
                  cursor: isValid ? "pointer" : "not-allowed", opacity: isValid ? 1 : 0.5,
                }}>
                  {showStripe ? "Enter card details below ↑" : "Continue to payment →"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: 11, fontWeight: 700, color: "#8a6a5a", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.1em" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 14px", border: "1.5px solid #e8d8c8", borderRadius: 12, fontSize: 14, color: "#2B1B12", background: "#FDFAF6", outline: "none", boxSizing: "border-box" };
