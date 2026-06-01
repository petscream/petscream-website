"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient, ORDER_STATUS, OrderStatus } from "../../lib/supabase";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "burakelcin@hotmail.com.tr";

type OrderItem = { product_name: string; quantity: number; price: number };
type Order = {
  id: string;
  created_at: string;
  status: OrderStatus;
  total: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  borough: string;
  address: string;
  delivery_day: string;
  note: string;
  user_id: string | null;
  order_items: OrderItem[];
};

export default function AdminPage() {
  const router = useRouter();
  const supabase = createClient();

  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [msgOrderId, setMsgOrderId] = useState<string | null>(null);
  const [msgUserId, setMsgUserId] = useState<string | null>(null);
  const [msgText, setMsgText] = useState("");
  const [msgSent, setMsgSent] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        router.push("/");
        return;
      }
      setAuthed(true);

      // Admin tüm siparişleri görür — service_role key gerekiyor
      // Geçici olarak RLS bypass için service key ile server action kullanılabilir
      // Şimdilik anon key ile kendi siparişlerini + tüm siparişleri çekiyoruz
      const { data } = await supabase
        .from("orders")
        .select("*, order_items(*)")
        .order("created_at", { ascending: false });

      setOrders(data || []);
      setLoading(false);
    };
    load();
  }, []);

  const updateStatus = async (orderId: string, status: OrderStatus) => {
    await supabase.from("orders").update({ status }).eq("id", orderId);
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const sendNotification = async () => {
    if (!msgUserId || !msgText.trim()) return;
    await supabase.from("notifications").insert({
      user_id: msgUserId,
      order_id: msgOrderId,
      message: msgText.trim(),
    });
    setMsgSent(true);
    setTimeout(() => { setMsgSent(false); setMsgOrderId(null); setMsgUserId(null); setMsgText(""); }, 2000);
  };

  const filtered = orders.filter(o => {
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    const matchSearch = !search || o.customer_name.toLowerCase().includes(search.toLowerCase()) || o.customer_email.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const statusCounts = Object.fromEntries(
    Object.keys(ORDER_STATUS).map(s => [s, orders.filter(o => o.status === s).length])
  );

  if (!authed || loading) return (
    <main style={{ minHeight: "100dvh", background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "white" }}>Loading admin panel...</p>
    </main>
  );

  return (
    <main style={{ minHeight: "100dvh", background: "#f8f4ef", fontFamily: "ui-rounded, system-ui, sans-serif", color: "#2B1B12" }}>

      {/* Top bar */}
      <div style={{ background: "#2B1B12", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>🐾</span>
          <span style={{ color: "white", fontWeight: 800, fontSize: 16 }}>PetsCream Admin</span>
        </div>
        <span style={{ color: "#b09a8a", fontSize: 13 }}>{orders.length} total orders</span>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

        {/* Status summary */}
        <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          {[{ key: "all", label: "All", emoji: "📋", count: orders.length }, ...Object.entries(ORDER_STATUS).map(([k, v]) => ({ key: k, label: v.label, emoji: v.emoji, count: statusCounts[k] || 0, color: v.color }))].map((s) => (
            <button key={s.key} onClick={() => setFilterStatus(s.key)} style={{
              padding: "10px 18px",
              borderRadius: 14,
              border: filterStatus === s.key ? "2px solid #2FB7B5" : "1.5px solid #ecdccb",
              background: filterStatus === s.key ? "#E8F7F7" : "white",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              color: filterStatus === s.key ? "#1a6b6a" : "#2B1B12",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              {s.emoji} {s.label}
              <span style={{ background: "#f1e3d3", borderRadius: 999, padding: "1px 8px", fontSize: 11 }}>{s.count}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "10px 16px", border: "1.5px solid #ecdccb", borderRadius: 12, fontSize: 14, background: "white", outline: "none", boxSizing: "border-box", marginBottom: 20 }}
        />

        {/* Orders */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#8a6a5a", padding: "40px 0" }}>No orders found.</p>
          )}
          {filtered.map((order) => {
            const st = ORDER_STATUS[order.status] || ORDER_STATUS.pending;
            return (
              <div key={order.id} style={{ background: "white", borderRadius: 20, padding: 20, border: "1px solid #ecdccb", boxShadow: "0 2px 8px rgba(43,27,18,0.05)" }}>

                {/* Order header */}
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>{order.customer_name}</p>
                    <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>{order.customer_email} · {order.customer_phone}</p>
                    <p style={{ fontSize: 12, color: "#8a6a5a", margin: "2px 0 0" }}>{order.address}, {order.borough}</p>
                    <p style={{ fontSize: 12, color: "#8a6a5a", margin: "2px 0 0" }}>🚚 {order.delivery_day}</p>
                    {order.note && <p style={{ fontSize: 12, color: "#b09a8a", margin: "4px 0 0", fontStyle: "italic" }}>"{order.note}"</p>}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 11, color: "#b09a8a", margin: "0 0 4px" }}>
                      {new Date(order.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </p>
                    <p style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>${order.total.toFixed(2)}</p>

                    {/* Status dropdown */}
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value as OrderStatus)}
                      style={{
                        background: st.color + "15",
                        color: st.color,
                        border: `1.5px solid ${st.color}`,
                        borderRadius: 999,
                        padding: "5px 12px",
                        fontWeight: 700,
                        fontSize: 12,
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      {Object.entries(ORDER_STATUS).map(([k, v]) => (
                        <option key={k} value={k}>{v.emoji} {v.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Items */}
                <div style={{ borderTop: "1px solid #f1e3d3", paddingTop: 10, marginBottom: 12 }}>
                  {order.order_items?.map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#4a3428", marginBottom: 3 }}>
                      <span>{item.product_name} × {item.quantity}</span>
                      <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Message button */}
                {order.user_id && (
                  <div>
                    {msgOrderId === order.id ? (
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <input
                          value={msgText}
                          onChange={(e) => setMsgText(e.target.value)}
                          placeholder="Message to customer..."
                          style={{ flex: 1, padding: "8px 12px", border: "1.5px solid #ecdccb", borderRadius: 10, fontSize: 13, outline: "none" }}
                          onKeyDown={(e) => e.key === "Enter" && sendNotification()}
                        />
                        <button onClick={sendNotification} style={{ background: "#2FB7B5", color: "white", border: "none", borderRadius: 10, padding: "8px 16px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                          {msgSent ? "Sent ✓" : "Send"}
                        </button>
                        <button onClick={() => { setMsgOrderId(null); setMsgUserId(null); }} style={{ background: "none", border: "1.5px solid #ecdccb", borderRadius: 10, padding: "8px 12px", fontSize: 13, cursor: "pointer", color: "#8a6a5a" }}>✕</button>
                      </div>
                    ) : (
                      <button onClick={() => { setMsgOrderId(order.id); setMsgUserId(order.user_id); }} style={{ background: "none", border: "1.5px solid #ecdccb", borderRadius: 999, padding: "7px 18px", fontSize: 12, fontWeight: 600, color: "#8a6a5a", cursor: "pointer" }}>
                        💬 Send message
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}