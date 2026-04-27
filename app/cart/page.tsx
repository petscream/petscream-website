"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const BOROUGHS = ["Brooklyn", "Queens", "Staten Island", "Manhattan"];

const WEEKDAYS = [
  { label: "Monday", hours: "7PM – 9PM" },
  { label: "Tuesday", hours: "7PM – 9PM" },
  { label: "Wednesday", hours: "7PM – 9PM" },
  { label: "Thursday", hours: "7PM – 9PM" },
  { label: "Friday", hours: "7PM – 9PM" },
];

const WEEKENDS = [
  { label: "Saturday", hours: "10AM – 5PM" },
  { label: "Sunday", hours: "10AM – 5PM" },
];

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    borough: "",
    address: "",
    deliveryDay: "",
    note: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const allDays = [...WEEKDAYS, ...WEEKENDS];
  const selectedDay = allDays.find(d => d.label === form.deliveryDay);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.borough || !form.address || !form.deliveryDay) return;
    if (items.length === 0) return;

    setStatus("sending");

    const orderSummary = items
      .map((i) => `${i.name} x${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`)
      .join("\n");

    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      borough: form.borough,
      address: form.address,
      delivery_day: selectedDay ? `${selectedDay.label} · ${selectedDay.hours}` : "",
      note: form.note,
      order: orderSummary,
      total: `$${totalPrice.toFixed(2)}`,
      payment: "Cash on delivery",
    };

    try {
      const res = await fetch("https://formspree.io/f/xzdznbwq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("success");
        clearCart();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isFormValid = form.name && form.email && form.phone && form.borough && form.address && form.deliveryDay;

  if (status === "success") {
    return (
      <main style={{ minHeight: "100vh", background: "#FFF6E9", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 56 }}>🐾</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#2B1B12", margin: "16px 0 8px" }}>Order received!</h1>
          <p style={{ color: "#6b4c3b", fontSize: 16, marginBottom: 8 }}>
            We'll be in touch soon to confirm your delivery.
          </p>
          {selectedDay && (
            <p style={{ color: "#2FB7B5", fontSize: 15, fontWeight: 600, marginBottom: 32 }}>
              Delivery: {selectedDay.label} · {selectedDay.hours}
            </p>
          )}
          <Link href="/shop" style={{
            background: "#2FB7B5", color: "white", borderRadius: 999,
            padding: "12px 28px", fontWeight: 600, textDecoration: "none", fontSize: 15,
          }}>
            Shop more treats
          </Link>
        </div>
      </main>
    );
  }

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
            <Link href="/shop" style={{
              background: "#2FB7B5", color: "white", borderRadius: 999,
              padding: "12px 28px", fontWeight: 600, textDecoration: "none", fontSize: 15,
            }}>
              Browse treats
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>

            {/* Left */}
            <div style={{ flex: "1 1 420px" }}>

              {/* Cart Items */}
              <div style={{ marginBottom: 32 }}>
                {items.map((item) => (
                  <div key={item.id} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    background: "white", borderRadius: 20, padding: 16,
                    marginBottom: 12, border: "1px solid #f1e3d3",
                  }}>
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

              {/* Form */}
              <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #f1e3d3" }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 20px" }}>Delivery details</h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={labelStyle}>Full name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (212) 000 0000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Borough</label>
                    <select name="borough" value={form.borough} onChange={handleChange} style={inputStyle}>
                      <option value="">Select borough</option>
                      {BOROUGHS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Street address</label>
                  <input name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, Apt 4B" style={inputStyle} />
                </div>

                {/* Delivery Day */}
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Delivery day</label>

                  {/* Weekdays */}
                  <p style={{ fontSize: 11, color: "#8a6a5a", fontWeight: 600, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Mon – Fri · 7PM – 9PM
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                    {WEEKDAYS.map((day) => (
                      <button
                        key={day.label}
                        onClick={() => setForm(prev => ({ ...prev, deliveryDay: day.label }))}
                        style={{
                          padding: "10px 18px",
                          borderRadius: 12,
                          border: form.deliveryDay === day.label ? "2px solid #2FB7B5" : "1.5px solid #e8d8c8",
                          background: form.deliveryDay === day.label ? "#E8F7F7" : "white",
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 700,
                          color: form.deliveryDay === day.label ? "#1a6b6a" : "#2B1B12",
                          transition: "all 0.15s",
                        }}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>

                  {/* Weekends */}
                  <p style={{ fontSize: 11, color: "#8a6a5a", fontWeight: 600, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Sat – Sun · 10AM – 5PM
                  </p>
                  <div style={{ display: "flex", gap: 8 }}>
                    {WEEKENDS.map((day) => (
                      <button
                        key={day.label}
                        onClick={() => setForm(prev => ({ ...prev, deliveryDay: day.label }))}
                        style={{
                          padding: "10px 18px",
                          borderRadius: 12,
                          border: form.deliveryDay === day.label ? "2px solid #2FB7B5" : "1.5px solid #e8d8c8",
                          background: form.deliveryDay === day.label ? "#E8F7F7" : "white",
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 700,
                          color: form.deliveryDay === day.label ? "#1a6b6a" : "#2B1B12",
                          transition: "all 0.15s",
                        }}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Note (optional)</label>
                  <textarea name="note" value={form.note} onChange={handleChange} placeholder="Leave at door, buzz #4B, etc." rows={3} style={{ ...inputStyle, resize: "none" }} />
                </div>
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

                {selectedDay && (
                  <div style={{ background: "#E8F7F7", borderRadius: 12, padding: "10px 14px", marginBottom: 14 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#2B1B12", margin: "0 0 2px" }}>🚚 Delivery</p>
                    <p style={{ fontSize: 12, color: "#6b4c3b", margin: 0 }}>{selectedDay.label} · {selectedDay.hours}</p>
                  </div>
                )}

                <div style={{ background: "#FDE8C8", borderRadius: 14, padding: "12px 16px", fontSize: 13, color: "#7a4a00", marginBottom: 20, fontWeight: 500 }}>
                  💵 Cash on delivery — pay when your treats arrive.
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !isFormValid}
                  style={{
                    width: "100%",
                    background: "#2FB7B5",
                    color: "white",
                    border: "none",
                    borderRadius: 999,
                    padding: "14px 0",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: isFormValid ? "pointer" : "not-allowed",
                    opacity: isFormValid ? 1 : 0.5,
                    transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? "Placing order..." : "Place order"}
                </button>

                {status === "error" && (
                  <p style={{ color: "red", fontSize: 13, marginTop: 12, textAlign: "center" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
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

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 12, fontWeight: 600,
  color: "#8a6a5a", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px",
  border: "1.5px solid #e8d8c8", borderRadius: 12,
  fontSize: 14, color: "#2B1B12", background: "#FDFAF6",
  outline: "none", boxSizing: "border-box",
};
