"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = async () => {
    if (!email) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.error) { setError(data.error); }
    else { setStep("otp"); }
    setLoading(false);
  };

  const verifyOtp = async () => {
    if (!otp) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token: otp }),
    });
    const data = await res.json();
    if (data.error) { setError("Invalid code. Please try again."); }
    else { router.push("/account"); }
    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100dvh", background: "#FFF6E9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-rounded, system-ui, sans-serif", padding: "24px" }}>
      <div style={{ background: "white", borderRadius: 32, padding: "48px 40px", maxWidth: 420, width: "100%", border: "1px solid #ecdccb", boxShadow: "0 8px 32px rgba(43,27,18,0.08)", textAlign: "center" }}>
        
        <div style={{ fontSize: 48, marginBottom: 16 }}>🐾</div>
        
        {step === "email" ? (
          <>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#2B1B12", margin: "0 0 8px" }}>Sign in</h1>
            <p style={{ fontSize: 14, color: "#8a6a5a", margin: "0 0 32px", lineHeight: 1.6 }}>
              Enter your email and we'll send you a 6-digit code.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendOtp()}
              placeholder="your@email.com"
              style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e8d8c8", borderRadius: 14, fontSize: 15, color: "#2B1B12", background: "#FDFAF6", outline: "none", boxSizing: "border-box", marginBottom: 12 }}
            />
            {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>}
            <button
              onClick={sendOtp}
              disabled={loading || !email}
              style={{ width: "100%", background: "#2FB7B5", color: "white", border: "none", borderRadius: 999, padding: "13px 0", fontSize: 15, fontWeight: 700, cursor: email && !loading ? "pointer" : "not-allowed", opacity: email && !loading ? 1 : 0.5 }}
            >
              {loading ? "Sending..." : "Send code →"}
            </button>
            <p style={{ fontSize: 12, color: "#b09a8a", marginTop: 20 }}>
              No account? Just enter your email — we'll create one automatically.
            </p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#2B1B12", margin: "0 0 8px" }}>Check your email</h1>
            <p style={{ fontSize: 14, color: "#8a6a5a", margin: "0 0 32px", lineHeight: 1.6 }}>
              We sent a 6-digit code to <strong>{email}</strong>
            </p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => e.key === "Enter" && verifyOtp()}
              placeholder="000000"
              maxLength={6}
              style={{ width: "100%", padding: "16px", border: "1.5px solid #e8d8c8", borderRadius: 14, fontSize: 28, fontWeight: 800, color: "#2B1B12", background: "#FDFAF6", outline: "none", boxSizing: "border-box", marginBottom: 12, letterSpacing: "0.3em", textAlign: "center" }}
            />
            {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>}
            <button
              onClick={verifyOtp}
              disabled={loading || otp.length < 6}
              style={{ width: "100%", background: "#2FB7B5", color: "white", border: "none", borderRadius: 999, padding: "13px 0", fontSize: 15, fontWeight: 700, cursor: otp.length === 6 && !loading ? "pointer" : "not-allowed", opacity: otp.length === 6 && !loading ? 1 : 0.5 }}
            >
              {loading ? "Verifying..." : "Sign in →"}
            </button>
            <button
              onClick={() => { setStep("email"); setOtp(""); setError(""); }}
              style={{ marginTop: 16, background: "none", border: "none", fontSize: 13, color: "#8a6a5a", cursor: "pointer", fontWeight: 600 }}
            >
              ← Use a different email
            </button>
          </>
        )}
      </div>
    </main>
  );
}
