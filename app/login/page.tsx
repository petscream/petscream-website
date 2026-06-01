"use client";

import Image from "next/image";
import { useState } from "react";
import { createClient } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  const handleLogin = async () => {
    if (!email) return;
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/account`,
      },
    });

    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <main style={{
      minHeight: "100dvh",
      background: "#FFF6E9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "ui-rounded, system-ui, sans-serif",
      padding: "24px",
    }}>
      <div style={{
        background: "white",
        borderRadius: 32,
        padding: "48px 40px",
        maxWidth: 420,
        width: "100%",
        border: "1px solid #ecdccb",
        boxShadow: "0 8px 32px rgba(43,27,18,0.08)",
        textAlign: "center",
      }}>
        {/* Logo */}
        <div style={{ position: "relative", width: 56, height: 56, margin: "0 auto 20px" }}>
          <Image src="/images/logo.png" alt="PetsCream" fill style={{ objectFit: "contain" }} sizes="56px" />
        </div>

        {!sent ? (
          <>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#2B1B12", margin: "0 0 8px" }}>
              Sign in
            </h1>
            <p style={{ fontSize: 14, color: "#8a6a5a", margin: "0 0 32px", lineHeight: 1.6 }}>
              Enter your email and we'll send you a magic link — no password needed.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="your@email.com"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1.5px solid #e8d8c8",
                borderRadius: 14,
                fontSize: 15,
                color: "#2B1B12",
                background: "#FDFAF6",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: 12,
              }}
            />

            {error && (
              <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading || !email}
              style={{
                width: "100%",
                background: "#2FB7B5",
                color: "white",
                border: "none",
                borderRadius: 999,
                padding: "13px 0",
                fontSize: 15,
                fontWeight: 700,
                cursor: email && !loading ? "pointer" : "not-allowed",
                opacity: email && !loading ? 1 : 0.5,
              }}
            >
              {loading ? "Sending..." : "Send magic link ✨"}
            </button>

            <p style={{ fontSize: 12, color: "#b09a8a", marginTop: 20 }}>
              New here? Just enter your email — we'll create your account automatically.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#2B1B12", margin: "0 0 10px" }}>
              Check your inbox!
            </h2>
            <p style={{ fontSize: 14, color: "#8a6a5a", lineHeight: 1.6 }}>
              We sent a magic link to <strong>{email}</strong>.<br />
              Click it to sign in — it expires in 1 hour.
            </p>
            <button
              onClick={() => { setSent(false); setEmail(""); }}
              style={{
                marginTop: 24,
                background: "none",
                border: "1.5px solid #ecdccb",
                borderRadius: 999,
                padding: "10px 24px",
                fontSize: 13,
                fontWeight: 600,
                color: "#8a6a5a",
                cursor: "pointer",
              }}
            >
              Use a different email
            </button>
          </>
        )}
      </div>
    </main>
  );
}