"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../lib/supabase";

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

export default function AccountPage() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"orders" | "notifications">("orders");

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }
      setUser(user);
console.log("user.id:", user.id);
const { data: testOrders } = await supabase.from("orders").select("id, order_number, user_id").limit(10);
console.log("all orders:", testOrders);
      const [{ data: orders }, { data: notifs }] = await Promise.all([
        supabase.from("orders").select("*, order_items(*)").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("notifications").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);

      setOrders(orders || []);
      setNotifications(notifs || []);
      setLoading(false);
    };
    load();
  }, []);

  const markRead = async (id: string) => {
    await supabase.from("notifications").update({ read: true }).eq("id", id);
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const unread = notifications.filter(n => !n.read).length;

  if (loading) return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-rounded, system-ui, sans-serif" }}>
      <p style={{ color: "#8a6a5a" }}>Loading...</p>
    </main>
  );

  return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", fontFamily: "ui-rounded, system-ui, sans-serif", color: "#2B1B12" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 4px" }}>My Account</h1>
            <p style={{ fontSize: 13, color: "#8a6a5a", margin: 0 }}>{user?.email}</p>
          </div>
          <button onClick={signOut} style={{ background: "none", border: "1.5px solid #ecdccb", borderRadius: 999, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "#8a6a5a", cursor: "pointer" }}>
            Sign out
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {(["orders", "notifications"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "9px 20px", borderRadius: 999, fontWeight: 700, fontSize: 13, cursor: "pointer",
              background: tab === t ? "#2FB7B5" : "white",
              color: tab === t ? "white" : "#2B1B12",
              border: tab === t ? "none" : "1.5px solid #ecdccb",
              position: "relative",
            }}>
              {t === "orders" ? `My Orders (${orders.length})` : "Notifications"}
              {t === "notifications" && unread > 0 && (
                <span style={{ position: "absolute", top: -4, right: -4, background: "#F4A63A", color: "white", borderRadius: 999, width: 18, height: 18, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {unread}
                </span>
              )}
            </button>
          ))}
        </div>

        {tab === "orders" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {orders.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: 40 }}>🛒</div>
                <p style={{ color: "#8a6a5a", marginTop: 12 }}>No orders yet.</p>
                <Link href="/shop" style={{ color: "#2FB7B5", fontWeight: 600, fontSize: 14 }}>Browse treats →</Link>
              </div>
            ) : orders.map(order => {
              const st = ORDER_STATUS[order.status] || ORDER_STATUS.pending;
              return (
                <Link key={order.id} href={`/account/orders/${order.id}`} style={{ background: "white", borderRadius: 20, padding: 20, border: "1px solid #ecdccb", display: "block", textDecoration: "none", color: "inherit" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>{order.order_number}</p>
                      <p style={{ fontSize: 12, color: "#8a6a5a", margin: 0 }}>
                        {new Date(order.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </p>
                      <p style={{ fontSize: 12, color: "#8a6a5a", margin: "2px 0 0" }}>{order.delivery_time_slot}</p>
                    </div>
                    <span style={{ background: st.color + "20", color: st.color, borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 700 }}>
                      {st.emoji} {st.label}
                    </span>
                  </div>
                  <div style={{ borderTop: "1px solid #f1e3d3", paddingTop: 10, marginBottom: 10 }}>
                    {order.order_items?.map((item: any, i: number) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#4a3428", marginBottom: 3 }}>
                        <span>{item.product_name} × {item.quantity}</span>
                        <span style={{ fontWeight: 600 }}>${item.total_price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: 15, fontWeight: 800 }}>Total: ${order.total.toFixed(2)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {tab === "notifications" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {notifications.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: 40 }}>🔔</div>
                <p style={{ color: "#8a6a5a", marginTop: 12 }}>No notifications yet.</p>
              </div>
            ) : notifications.map(n => (
              <div key={n.id} onClick={() => !n.read && markRead(n.id)} style={{
                background: n.read ? "white" : "#FFF6E9",
                borderRadius: 16, padding: "16px 18px",
                border: `1.5px solid ${n.read ? "#ecdccb" : "#F4A63A"}`,
                cursor: n.read ? "default" : "pointer",
                display: "flex", gap: 12, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 20 }}>🐾</span>
                <div style={{ flex: 1 }}>
                  {n.title && <p style={{ fontSize: 13, fontWeight: 800, margin: "0 0 2px" }}>{n.title}</p>}
                  <p style={{ fontSize: 14, color: "#2B1B12", margin: "0 0 4px", fontWeight: n.read ? 400 : 600 }}>{n.message}</p>
                  <p style={{ fontSize: 11, color: "#b09a8a", margin: 0 }}>
                    {new Date(n.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    {!n.read && <span style={{ color: "#F4A63A", marginLeft: 8, fontWeight: 700 }}>· New</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
