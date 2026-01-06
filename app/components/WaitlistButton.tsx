"use client";

import { useMemo, useState } from "react";

const BRAND = {
  bg: "#FFF6E9",
  ink: "#2B1B12",
  panel: "#FFFFFF",
  border: "rgba(43, 27, 18, 0.14)",
  shadow: "0 12px 40px rgba(43, 27, 18, 0.12)",
};

export default function WaitlistButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  // 1) Formspree form endpointini buraya yapıştıracaksın
  // Örnek: https://formspree.io/f/xxxxabcd
  const FORMSPREE_ENDPOINT = "PASTE_YOUR_FORMSPREE_ENDPOINT_HERE";

  const isValid = useMemo(() => {
    const v = email.trim().toLowerCase();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [email]);

  async function submit() {
    if (!isValid || status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source: "petscream.com",
          tag: "waitlist",
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setTimeout(() => {
        setOpen(false);
        setEmail("");
        setStatus("idle");
      }, 900);
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Buton görünümlü pill */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          appearance: "none",
          border: `1px solid ${BRAND.border}`,
          background: BRAND.panel,
          color: BRAND.ink,
          borderRadius: 9999,
          padding: "10px 16px",
          fontWeight: 600,
          boxShadow: "0 1px 0 rgba(43,27,18,0.06)",
          cursor: "pointer",
        }}
      >
        Notify me
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(560px, 100%)",
              background: BRAND.panel,
              border: `1px solid ${BRAND.border}`,
              borderRadius: 20,
              boxShadow: BRAND.shadow,
              padding: 18,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: BRAND.ink,
                    marginBottom: 8,
                  }}
                >
                  When will your pup’s tail wag a little happier?
                </div>
                <div style={{ color: "rgba(43,27,18,0.75)", lineHeight: 1.5 }}>
                  Leave your email and be the first to know when Petscream arrives.
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 22,
                  cursor: "pointer",
                  color: "rgba(43,27,18,0.7)",
                  padding: "0 6px",
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 16,
                alignItems: "stretch",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoFocus
                style={{
                  flex: 1,
                  borderRadius: 14,
                  border: `1px solid ${BRAND.border}`,
                  padding: "12px 14px",
                  outline: "none",
                  fontSize: 15,
                }}
              />

              <button
                type="button"
                onClick={submit}
                disabled={!isValid || status === "loading"}
                style={{
                  borderRadius: 14,
                  border: `1px solid ${BRAND.border}`,
                  background: BRAND.bg,
                  color: BRAND.ink,
                  padding: "12px 14px",
                  fontWeight: 700,
                  cursor: !isValid || status === "loading" ? "not-allowed" : "pointer",
                  opacity: !isValid || status === "loading" ? 0.6 : 1,
                }}
              >
                {status === "loading" ? "Saving..." : "Notify me"}
              </button>
            </div>

            <div style={{ marginTop: 10, minHeight: 18, fontSize: 13 }}>
              {status === "success" && (
                <span style={{ color: "rgba(43,27,18,0.85)" }}>
                  You’re on the list. See you soon 🐾
                </span>
              )}
              {status === "error" && (
                <span style={{ color: "rgba(160, 50, 50, 0.95)" }}>
                  Something went wrong. Please try again.
                </span>
              )}
              {status === "idle" && (
                <span style={{ color: "rgba(43,27,18,0.55)" }}>
                  No spam. Just a heads-up when we launch.
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
