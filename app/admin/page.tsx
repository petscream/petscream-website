"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const ADMIN_PASSWORD = "petscream2026";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  active: boolean;
  image: string;
};

type Order = {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  delivery_window: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: string;
  notes: string;
  created_at: string;
};

type Settings = Record<string, string>;

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState<"orders" | "products" | "settings">("orders");

  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [settings, setSettings] = useState<Settings>({});
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState<string | null>(null);

  // ── Auth ──────────────────────────────────────────────────────────
  const handleLogin = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      loadAll();
    } else {
      setPwError(true);
    }
  };

  // ── Load ──────────────────────────────────────────────────────────
  const loadAll = async () => {
    setLoading(true);
    const [{ data: prods }, { data: ords }, { data: sets }] = await Promise.all([
      supabase.from("products").select("*").order("name"),
      supabase.from("orders").select("*").order("created_at", { ascending: false }),
      supabase.from("settings").select("*"),
    ]);
    if (prods) setProducts(prods);
    if (ords) setOrders(ords);
    if (sets) {
      const obj: Settings = {};
      sets.forEach((s: { key: string; value: string }) => { obj[s.key] = s.value; });
      setSettings(obj);
    }
    setLoading(false);
  };

  // ── Save helpers ──────────────────────────────────────────────────
  const saveSetting = async (key: string, value: string) => {
    await supabase.from("settings").upsert({ key, value, updated_at: new Date().toISOString() });
    setSettings(prev => ({ ...prev, [key]: value }));
    flashSaved(key);
  };

  const saveProduct = async (product: Product) => {
    await supabase.from("products").upsert(product);
    flashSaved(product.id);
  };

  const updateOrderStatus = async (id: string, status: string) => {
    await supabase.from("orders").update({ status }).eq("id", id);
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const flashSaved = (key: string) => {
    setSaved(key);
    setTimeout(() => setSaved(null), 2000);
  };

  // ── Login screen ─────────────────────────────────────────────────
  if (!authed) {
    return (
      <main style={{
        minHeight: "100vh", background: "#FFF6E9",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "ui-rounded, system-ui, sans-serif",
      }}>
        <div style={{
          background: "white", borderRadius: 24, padding: "48px 40px",
          boxShadow: "0 8px 40px rgba(43,27,18,0.12)", width: 360,
          border: "1px solid #ecdccb",
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 8px" }}>
            PetsCream
          </p>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#2B1B12", margin: "0 0 28px" }}>
            Admin Panel
          </h1>
          <input
            type="password"
            placeholder="Şifre"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(false); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 12,
              border: pwError ? "2px solid #E05252" : "1.5px solid #ecdccb",
              fontSize: 15, outline: "none", marginBottom: 12,
              background: "#FFF6E9", boxSizing: "border-box",
            }}
          />
          {pwError && <p style={{ color: "#E05252", fontSize: 13, margin: "0 0 12px" }}>Yanlış şifre</p>}
          <button
            onClick={handleLogin}
            style={{
              width: "100%", background: "#2FB7B5", color: "white",
              border: "none", borderRadius: 12, padding: "13px 0",
              fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}
          >
            Giriş Yap
          </button>
        </div>
      </main>
    );
  }

  // ── Main panel ───────────────────────────────────────────────────
  return (
    <main style={{
      minHeight: "100vh", background: "#f5f0e8",
      fontFamily: "ui-rounded, system-ui, sans-serif", color: "#2B1B12",
    }}>
      {/* Top bar */}
      <div style={{
        background: "#2B1B12", padding: "0 32px", height: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: "white" }}>🐾 PetsCream Admin</span>
        <button onClick={() => setAuthed(false)} style={{
          background: "none", border: "1px solid #5a3d2b", color: "#c4a98a",
          borderRadius: 8, padding: "6px 14px", fontSize: 13, cursor: "pointer",
        }}>
          Çıkış
        </button>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {(["orders", "products", "settings"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "9px 22px", borderRadius: 999, fontSize: 14, fontWeight: 700,
              border: "none", cursor: "pointer",
              background: tab === t ? "#2FB7B5" : "white",
              color: tab === t ? "white" : "#2B1B12",
              boxShadow: tab === t ? "0 4px 12px rgba(47,183,181,0.3)" : "none",
            }}>
              {t === "orders" ? "📦 Siparişler" : t === "products" ? "🍦 Ürünler" : "⚙️ Ayarlar"}
            </button>
          ))}
        </div>

        {loading && <p style={{ color: "#8a6a5a" }}>Yükleniyor...</p>}

        {/* ── ORDERS TAB ── */}
        {tab === "orders" && !loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Siparişler ({orders.length})</h2>
            </div>
            {orders.length === 0 && (
              <div style={{ background: "white", borderRadius: 16, padding: 32, textAlign: "center", color: "#8a6a5a" }}>
                Henüz sipariş yok.
              </div>
            )}
            {orders.map(order => (
              <div key={order.id} style={{
                background: "white", borderRadius: 16, padding: "20px 24px",
                border: "1px solid #ecdccb", boxShadow: "0 2px 8px rgba(43,27,18,0.05)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 16, margin: "0 0 4px" }}>{order.customer_name}</p>
                    <p style={{ fontSize: 13, color: "#8a6a5a", margin: "0 0 2px" }}>{order.customer_email} · {order.customer_phone}</p>
                    <p style={{ fontSize: 13, color: "#8a6a5a", margin: "0 0 2px" }}>📍 {order.delivery_address}</p>
                    <p style={{ fontSize: 13, color: "#8a6a5a", margin: "0 0 8px" }}>🕐 {order.delivery_window}</p>
                    {order.items && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {order.items.map((item, i) => (
                          <span key={i} style={{
                            background: "#FFF6E9", border: "1px solid #ecdccb",
                            borderRadius: 999, padding: "3px 10px", fontSize: 12, fontWeight: 600,
                          }}>
                            {item.name} ×{item.qty}
                          </span>
                        ))}
                      </div>
                    )}
                    {order.notes && (
                      <p style={{ fontSize: 13, color: "#5c4638", marginTop: 8, fontStyle: "italic" }}>
                        Not: {order.notes}
                      </p>
                    )}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 20, fontWeight: 900, color: "#2B1B12", margin: "0 0 8px" }}>
                      ${order.total}
                    </p>
                    <p style={{ fontSize: 11, color: "#b09a8a", margin: "0 0 10px" }}>
                      {new Date(order.created_at).toLocaleDateString("tr-TR")}
                    </p>
                    <select
                      value={order.status}
                      onChange={e => updateOrderStatus(order.id, e.target.value)}
                      style={{
                        padding: "7px 12px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                        border: "1.5px solid #ecdccb", background: "#FFF6E9", cursor: "pointer",
                        color: order.status === "delivered" ? "#22a09e" : order.status === "cancelled" ? "#E05252" : "#F4A63A",
                      }}
                    >
                      <option value="pending">⏳ Bekliyor</option>
                      <option value="confirmed">✅ Onaylandı</option>
                      <option value="out_for_delivery">🚚 Yolda</option>
                      <option value="delivered">✔️ Teslim Edildi</option>
                      <option value="cancelled">❌ İptal</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── PRODUCTS TAB ── */}
        {tab === "products" && !loading && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 20px" }}>Ürünler</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {products.map(product => (
                <div key={product.id} style={{
                  background: "white", borderRadius: 16, padding: "20px",
                  border: "1px solid #ecdccb", boxShadow: "0 2px 8px rgba(43,27,18,0.05)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <p style={{ fontWeight: 800, fontSize: 15, margin: 0 }}>{product.name}</p>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        checked={product.active}
                        onChange={e => {
                          const updated = { ...product, active: e.target.checked };
                          setProducts(prev => prev.map(p => p.id === product.id ? updated : p));
                          saveProduct(updated);
                        }}
                      />
                      <span style={{ fontSize: 12, color: "#8a6a5a" }}>Aktif</span>
                    </label>
                  </div>
                  <p style={{ fontSize: 12, color: "#2FB7B5", fontWeight: 600, margin: "0 0 12px" }}>{product.subtitle}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#5c4638", flexShrink: 0 }}>Fiyat $</label>
                    <input
                      type="number"
                      value={product.price}
                      onChange={e => setProducts(prev => prev.map(p => p.id === product.id ? { ...p, price: Number(e.target.value) } : p))}
                      style={{
                        width: 80, padding: "8px 12px", borderRadius: 8,
                        border: "1.5px solid #ecdccb", fontSize: 15, fontWeight: 700,
                        background: "#FFF6E9", outline: "none",
                      }}
                    />
                    <button
                      onClick={() => saveProduct(product)}
                      style={{
                        flex: 1, background: saved === product.id ? "#22a09e" : "#2FB7B5",
                        color: "white", border: "none", borderRadius: 8,
                        padding: "8px 0", fontSize: 13, fontWeight: 700, cursor: "pointer",
                      }}
                    >
                      {saved === product.id ? "Kaydedildi ✓" : "Kaydet"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SETTINGS TAB ── */}
        {tab === "settings" && !loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Site Ayarları</h2>

            {/* Minimum order */}
            <SettingCard title="Minimum Sipariş Tutarı" desc="Bu tutarın altındaki siparişler oluşturulamaz.">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>$</span>
                <input
                  type="number"
                  value={settings.minimum_order || "50"}
                  onChange={e => setSettings(prev => ({ ...prev, minimum_order: e.target.value }))}
                  style={inputStyle}
                />
                <SaveBtn onClick={() => saveSetting("minimum_order", settings.minimum_order)} saved={saved === "minimum_order"} />
              </div>
            </SettingCard>

            {/* Delivery windows */}
            <SettingCard title="Teslimat Saatleri" desc="Her gün için teslimat penceresini düzenle.">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { key: "delivery_mon", label: "Pazartesi" },
                  { key: "delivery_thu", label: "Perşembe" },
                  { key: "delivery_sat", label: "Cumartesi" },
                ].map(({ key, label }) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, width: 100, flexShrink: 0 }}>{label}</span>
                    <input
                      type="text"
                      value={settings[key] || ""}
                      onChange={e => setSettings(prev => ({ ...prev, [key]: e.target.value }))}
                      style={{ ...inputStyle, flex: 1 }}
                    />
                    <SaveBtn onClick={() => saveSetting(key, settings[key])} saved={saved === key} />
                  </div>
                ))}
              </div>
            </SettingCard>

            {/* Marquee names */}
            <SettingCard title="Marquee İsimleri" desc="Anasayfada kayan bantta gösterilecek köpek isimleri (virgülle ayır).">
              <textarea
                value={settings.marquee_names || ""}
                onChange={e => setSettings(prev => ({ ...prev, marquee_names: e.target.value }))}
                rows={3}
                style={{
                  width: "100%", padding: "10px 14px", borderRadius: 10,
                  border: "1.5px solid #ecdccb", fontSize: 14,
                  background: "#FFF6E9", outline: "none", resize: "vertical",
                  boxSizing: "border-box", fontFamily: "inherit",
                }}
              />
              <SaveBtn onClick={() => saveSetting("marquee_names", settings.marquee_names)} saved={saved === "marquee_names"} />
            </SettingCard>
          </div>
        )}
      </div>
    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SettingCard({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "white", borderRadius: 16, padding: "24px",
      border: "1px solid #ecdccb", boxShadow: "0 2px 8px rgba(43,27,18,0.05)",
    }}>
      <p style={{ fontWeight: 800, fontSize: 15, margin: "0 0 4px" }}>{title}</p>
      <p style={{ fontSize: 13, color: "#8a6a5a", margin: "0 0 16px" }}>{desc}</p>
      {children}
    </div>
  );
}

function SaveBtn({ onClick, saved }: { onClick: () => void; saved: boolean }) {
  return (
    <button onClick={onClick} style={{
      background: saved ? "#22a09e" : "#2FB7B5", color: "white",
      border: "none", borderRadius: 8, padding: "9px 18px",
      fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0,
      transition: "background 0.2s",
    }}>
      {saved ? "Kaydedildi ✓" : "Kaydet"}
    </button>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "9px 14px", borderRadius: 8, border: "1.5px solid #ecdccb",
  fontSize: 15, background: "#FFF6E9", outline: "none", width: 120,
};