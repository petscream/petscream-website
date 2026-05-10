"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

type Role = "admin" | "viewer";

type AdminUser = {
  username: string;
  role: Role;
};

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
  const [user, setUser] = useState<AdminUser | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [tab, setTab] = useState<"orders" | "products" | "settings" | "users">("orders");
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [settings, setSettings] = useState<Settings>({});
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState<string | null>(null);

  // New user form
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<Role>("viewer");
  const [userSaved, setUserSaved] = useState(false);

  // ── Login ─────────────────────────────────────────────────────────
  const handleLogin = async () => {
    setLoginLoading(true);
    setLoginError("");
    const { data, error } = await supabase
      .from("admin_users")
      .select("username, role")
      .eq("username", username.trim())
      .eq("password", password)
      .single();

    if (error || !data) {
      setLoginError("Kullanıcı adı veya şifre hatalı.");
      setLoginLoading(false);
      return;
    }
    setUser({ username: data.username, role: data.role as Role });
    loadAll();
    setLoginLoading(false);
  };

  // ── Load ──────────────────────────────────────────────────────────
  const loadAll = async () => {
    setLoading(true);
    const [{ data: prods }, { data: ords }, { data: sets }, { data: users }] = await Promise.all([
      supabase.from("products").select("*").order("name"),
      supabase.from("orders").select("*").order("created_at", { ascending: false }),
      supabase.from("settings").select("*"),
      supabase.from("admin_users").select("id, username, role, created_at"),
    ]);
    if (prods) setProducts(prods);
    if (ords) setOrders(ords);
    if (sets) {
      const obj: Settings = {};
      sets.forEach((s: any) => { obj[s.key] = s.value; });
      setSettings(obj);
    }
    if (users) setAdminUsers(users);
    setLoading(false);
  };

  const flashSaved = (key: string) => {
    setSaved(key);
    setTimeout(() => setSaved(null), 2000);
  };

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

  const addUser = async () => {
    if (!newUsername || !newPassword) return;
    const { error } = await supabase.from("admin_users").insert({
      username: newUsername.trim(),
      password: newPassword,
      role: newRole,
    });
    if (!error) {
      setUserSaved(true);
      setNewUsername("");
      setNewPassword("");
      setNewRole("viewer");
      setTimeout(() => setUserSaved(false), 2000);
      loadAll();
    }
  };

  const deleteUser = async (id: string) => {
    await supabase.from("admin_users").delete().eq("id", id);
    setAdminUsers(prev => prev.filter(u => u.id !== id));
  };

  // ── Status color ──────────────────────────────────────────────────
  const statusColor = (s: string) => {
    if (s === "delivered") return "#22a09e";
    if (s === "cancelled") return "#E05252";
    if (s === "out_for_delivery") return "#2FB7B5";
    if (s === "confirmed") return "#4caf50";
    return "#F4A63A";
  };

  // ── LOGIN SCREEN ──────────────────────────────────────────────────
  if (!user) {
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
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2FB7B5", margin: "0 0 6px" }}>
            PetsCream
          </p>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#2B1B12", margin: "0 0 28px" }}>
            Admin Panel
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
            <input
              type="text"
              placeholder="Kullanıcı adı"
              value={username}
              onChange={e => { setUsername(e.target.value); setLoginError(""); }}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              style={loginInputStyle(!!loginError)}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={e => { setPassword(e.target.value); setLoginError(""); }}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              style={loginInputStyle(!!loginError)}
            />
          </div>

          {loginError && (
            <p style={{ color: "#E05252", fontSize: 13, margin: "0 0 12px" }}>{loginError}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loginLoading}
            style={{
              width: "100%", background: "#2FB7B5", color: "white",
              border: "none", borderRadius: 12, padding: "13px 0",
              fontSize: 15, fontWeight: 700, cursor: "pointer", opacity: loginLoading ? 0.7 : 1,
            }}
          >
            {loginLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </div>
      </main>
    );
  }

  const isAdmin = user.role === "admin";

  // ── MAIN PANEL ────────────────────────────────────────────────────
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{
            fontSize: 12, color: "#c4a98a", background: "#3d2a1e",
            padding: "4px 12px", borderRadius: 999,
          }}>
            {user.username} · {user.role === "admin" ? "Tam Erişim" : "Sadece Siparişler"}
          </span>
          <button onClick={() => setUser(null)} style={{
            background: "none", border: "1px solid #5a3d2b", color: "#c4a98a",
            borderRadius: 8, padding: "6px 14px", fontSize: 13, cursor: "pointer",
          }}>
            Çıkış
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {([
            { key: "orders", label: "📦 Siparişler" },
            ...(isAdmin ? [
              { key: "products", label: "🍦 Ürünler" },
              { key: "settings", label: "⚙️ Ayarlar" },
              { key: "users", label: "👥 Kullanıcılar" },
            ] : []),
          ] as { key: typeof tab; label: string }[]).map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{
              padding: "9px 22px", borderRadius: 999, fontSize: 14, fontWeight: 700,
              border: "none", cursor: "pointer",
              background: tab === t.key ? "#2FB7B5" : "white",
              color: tab === t.key ? "white" : "#2B1B12",
              boxShadow: tab === t.key ? "0 4px 12px rgba(47,183,181,0.3)" : "none",
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {loading && <p style={{ color: "#8a6a5a" }}>Yükleniyor...</p>}

        {/* ── ORDERS ── */}
        {tab === "orders" && !loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>
              Siparişler ({orders.length})
            </h2>
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
                    <p style={{ fontSize: 22, fontWeight: 900, margin: "0 0 6px" }}>${order.total}</p>
                    <p style={{ fontSize: 11, color: "#b09a8a", margin: "0 0 10px" }}>
                      {new Date(order.created_at).toLocaleDateString("tr-TR")}
                    </p>
                    <select
                      value={order.status}
                      onChange={e => updateOrderStatus(order.id, e.target.value)}
                      style={{
                        padding: "7px 12px", borderRadius: 8, fontSize: 13, fontWeight: 700,
                        border: `2px solid ${statusColor(order.status)}`,
                        background: "#FFF6E9", cursor: "pointer",
                        color: statusColor(order.status),
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

        {/* ── PRODUCTS ── */}
        {tab === "products" && isAdmin && !loading && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 20px" }}>Ürünler</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {products.map(product => (
                <div key={product.id} style={{
                  background: "white", borderRadius: 16, padding: 20,
                  border: "1px solid #ecdccb", boxShadow: "0 2px 8px rgba(43,27,18,0.05)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <p style={{ fontWeight: 800, fontSize: 15, margin: 0 }}>{product.name}</p>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                      <input type="checkbox" checked={product.active}
                        onChange={e => {
                          const updated = { ...product, active: e.target.checked };
                          setProducts(prev => prev.map(p => p.id === product.id ? updated : p));
                          saveProduct(updated);
                        }}
                      />
                      <span style={{ fontSize: 12, color: "#8a6a5a" }}>Aktif</span>
                    </label>
                  </div>
                  <p style={{ fontSize: 12, color: "#2FB7B5", fontWeight: 600, margin: "0 0 14px" }}>{product.subtitle}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 16, fontWeight: 700 }}>$</span>
                    <input type="number" value={product.price}
                      onChange={e => setProducts(prev => prev.map(p => p.id === product.id ? { ...p, price: Number(e.target.value) } : p))}
                      style={{ width: 80, padding: "8px 12px", borderRadius: 8, border: "1.5px solid #ecdccb", fontSize: 15, fontWeight: 700, background: "#FFF6E9", outline: "none" }}
                    />
                    <button onClick={() => saveProduct(product)} style={{
                      flex: 1, background: saved === product.id ? "#22a09e" : "#2FB7B5",
                      color: "white", border: "none", borderRadius: 8, padding: "9px 0",
                      fontSize: 13, fontWeight: 700, cursor: "pointer",
                    }}>
                      {saved === product.id ? "Kaydedildi ✓" : "Kaydet"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SETTINGS ── */}
        {tab === "settings" && isAdmin && !loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Site Ayarları</h2>

            <Card title="Minimum Sipariş" desc="Bu tutarın altındaki siparişler oluşturulamaz.">
              <Row>
                <span style={{ fontSize: 18, fontWeight: 700 }}>$</span>
                <input type="number" value={settings.minimum_order || "50"}
                  onChange={e => setSettings(p => ({ ...p, minimum_order: e.target.value }))}
                  style={settingInput} />
                <SaveBtn onClick={() => saveSetting("minimum_order", settings.minimum_order)} saved={saved === "minimum_order"} />
              </Row>
            </Card>

            <Card title="Teslimat Saatleri" desc="Her gün için teslimat penceresini düzenle.">
              {[{ key: "delivery_mon", label: "Pazartesi" }, { key: "delivery_thu", label: "Perşembe" }, { key: "delivery_sat", label: "Cumartesi" }].map(({ key, label }) => (
                <Row key={key} style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, width: 100, flexShrink: 0 }}>{label}</span>
                  <input type="text" value={settings[key] || ""}
                    onChange={e => setSettings(p => ({ ...p, [key]: e.target.value }))}
                    style={{ ...settingInput, flex: 1 }} />
                  <SaveBtn onClick={() => saveSetting(key, settings[key])} saved={saved === key} />
                </Row>
              ))}
            </Card>

            <Card title="Marquee İsimleri" desc="Anasayfada kayan bantta gösterilecek köpek isimleri (virgülle ayır).">
              <textarea value={settings.marquee_names || ""}
                onChange={e => setSettings(p => ({ ...p, marquee_names: e.target.value }))}
                rows={3}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #ecdccb", fontSize: 14, background: "#FFF6E9", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10 }}
              />
              <SaveBtn onClick={() => saveSetting("marquee_names", settings.marquee_names)} saved={saved === "marquee_names"} />
            </Card>
          </div>
        )}

        {/* ── USERS ── */}
        {tab === "users" && isAdmin && !loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Kullanıcılar</h2>

            {/* Mevcut kullanıcılar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {adminUsers.map(u => (
                <div key={u.id} style={{
                  background: "white", borderRadius: 12, padding: "14px 20px",
                  border: "1px solid #ecdccb", display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{u.username}</span>
                    <span style={{
                      marginLeft: 10, fontSize: 11, fontWeight: 700, padding: "2px 10px",
                      borderRadius: 999, background: u.role === "admin" ? "#2FB7B5" : "#f5e6d3",
                      color: u.role === "admin" ? "white" : "#8a6a5a",
                    }}>
                      {u.role === "admin" ? "Tam Erişim" : "Sadece Siparişler"}
                    </span>
                  </div>
                  {u.username !== user.username && (
                    <button onClick={() => deleteUser(u.id)} style={{
                      background: "none", border: "1px solid #ecdccb", borderRadius: 8,
                      padding: "6px 14px", fontSize: 12, color: "#E05252", cursor: "pointer",
                    }}>
                      Sil
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Yeni kullanıcı ekle */}
            <Card title="Yeni Kullanıcı Ekle" desc="Viewer sadece siparişleri görebilir. Admin her şeye erişebilir.">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input type="text" placeholder="Kullanıcı adı" value={newUsername}
                  onChange={e => setNewUsername(e.target.value)}
                  style={{ ...settingInput, width: "100%", boxSizing: "border-box" }} />
                <input type="password" placeholder="Şifre" value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  style={{ ...settingInput, width: "100%", boxSizing: "border-box" }} />
                <select value={newRole} onChange={e => setNewRole(e.target.value as Role)}
                  style={{ ...settingInput, width: "100%", boxSizing: "border-box" }}>
                  <option value="viewer">Sadece Siparişler (Viewer)</option>
                  <option value="admin">Tam Erişim (Admin)</option>
                </select>
                <button onClick={addUser} style={{
                  background: userSaved ? "#22a09e" : "#2FB7B5", color: "white",
                  border: "none", borderRadius: 10, padding: "11px 0",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                }}>
                  {userSaved ? "Kullanıcı Eklendi ✓" : "Kullanıcı Ekle"}
                </button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 24, border: "1px solid #ecdccb", boxShadow: "0 2px 8px rgba(43,27,18,0.05)" }}>
      <p style={{ fontWeight: 800, fontSize: 15, margin: "0 0 4px" }}>{title}</p>
      <p style={{ fontSize: 13, color: "#8a6a5a", margin: "0 0 16px" }}>{desc}</p>
      {children}
    </div>
  );
}

function Row({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 10, ...style }}>{children}</div>;
}

function SaveBtn({ onClick, saved }: { onClick: () => void; saved: boolean }) {
  return (
    <button onClick={onClick} style={{
      background: saved ? "#22a09e" : "#2FB7B5", color: "white",
      border: "none", borderRadius: 8, padding: "9px 18px",
      fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0,
    }}>
      {saved ? "✓" : "Kaydet"}
    </button>
  );
}

const loginInputStyle = (error: boolean): React.CSSProperties => ({
  width: "100%", padding: "12px 16px", borderRadius: 12,
  border: error ? "2px solid #E05252" : "1.5px solid #ecdccb",
  fontSize: 15, outline: "none", background: "#FFF6E9", boxSizing: "border-box",
});

const settingInput: React.CSSProperties = {
  padding: "9px 14px", borderRadius: 8, border: "1.5px solid #ecdccb",
  fontSize: 14, background: "#FFF6E9", outline: "none",
};