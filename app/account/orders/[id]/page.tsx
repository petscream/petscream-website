"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../../lib/supabase";

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

export default function OrderDetailPage() {
  const router = useRouter();
  const params = useParams();
  const supabase = createClient();
  const [order, setOrder] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const { data: order } = await supabase
        .from("orders")
        .select("*, order_items(*)")
        .eq("id", params.id)
        .eq("user_id", user.id)
        .single();

      if (!order) { router.push("/account"); return; }
      setOrder(order);

      const { data: history } = await supabase
        .from("order_status_history")
        .select("*")
        .eq("order_id", params.id)
        .order("created_at", { ascending: true });

      setHistory(history || []);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-rounded, system-ui, sans-serif" }}>
      <p style={{ color: "#8a6a5a" }}>Loading...</p>
    </main>
  );

  const st = ORDER_STATUS[order.status] || ORDER_STATUS.pending;

  return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", fontFamily: "ui-rounded, system-ui, sans-serif", color: "#2B1B12" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px" }}>
        <Link href="/account" style={{ fontSize: 13, color: "#8a6a5a", textDecoration: "none", fontWeight: 600 }}>← Back to account</Link>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", margin: "24px 0 32px" }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 4px" }}>{order.order_number}</h1>
            <p style={{ fontSize: 13, color: "#8a6a5a", margin: 0 }}>
              {new Date(order.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
          <span style={{ background: st.color + "20", color: st.color, borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700 }}>
            {st.emoji} {st.label}
          </span>
        </div>

        {/* Items */}
        <div style={{ background: "white", borderRadius: 20, padding: 24, border: "1px solid #ecdccb", marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>Items</h2>
          {order.order_items?.map((item: any, i: number) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#4a3428", marginBottom: 8 }}>
              <span>{item.product_name} × {item.quantity}</span>
              <span style={{ fontWeight: 600 }}>${item.total_price.toFixed(2)}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #f1e3d3", marginTop: 12, paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 700 }}>Total</span>
            <span style={{ fontSize: 18, fontWeight: 800 }}>${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Delivery info */}
        <div style={{ background: "white", borderRadius: 20, padding: 24, border: "1px solid #ecdccb", marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>Delivery</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14, color: "#4a3428" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#8a6a5a" }}>Window</span>
              <span style={{ fontWeight: 600 }}>{order.delivery_time_slot}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#8a6a5a" }}>Address</span>
              <span style={{ fontWeight: 600, textAlign: "right" }}>{order.street_address}{order.apt ? ` ${order.apt}` : ""}, {order.borough}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#8a6a5a" }}>Payment</span>
              <span style={{ fontWeight: 600 }}>{order.payment_method === "cash" ? "💵 Cash on delivery" : "💳 Card"}</span>
            </div>
            {order.delivery_note && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#8a6a5a" }}>Note</span>
                <span style={{ fontWeight: 600, textAlign: "right", fontStyle: "italic" }}>"{order.delivery_note}"</span>
              </div>
            )}
          </div>
        </div>

        {/* Status history */}
        {history.length > 0 && (
          <div style={{ background: "white", borderRadius: 20, padding: 24, border: "1px solid #ecdccb" }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>Order history</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {history.map((h, i) => {
                const s = ORDER_STATUS[h.status] || ORDER_STATUS.pending;
                return (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 16, marginTop: 2 }}>{s.emoji}</span>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: s.color }}>{s.label}</p>
                      {h.note && <p style={{ margin: 0, fontSize: 12, color: "#8a6a5a" }}>{h.note}</p>}
                      <p style={{ margin: 0, fontSize: 11, color: "#b09a8a" }}>
                        {new Date(h.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
