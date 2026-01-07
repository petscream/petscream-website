"use client";

import { useMemo, useState } from "react";

export default function WaitlistButton() {
  const FORM_ENDPOINT = "https://formspree.io/f/xzdznbwq";

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [showToast, setShowToast] = useState(false);

  const isValidEmail = useMemo(() => {
    const v = email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [email]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail || status === "loading") return;

    try {
      setStatus("loading");

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      setEmail("");

      // show toast bottom-right (doesn't cover header logo)
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 3200);
    } catch {
      setStatus("error");
    }
  }

  function closeAll() {
    setOpen(false);
    setStatus("idle");
    setEmail("");
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {/* TOAST (bottom-right) */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            right: 16,
            bottom: 16,
            zIndex: 60,
            width: "min(520px, calc(100vw - 32px))",
            background: "#FFFFFF",
            border: "1px solid rgba(43,27,18,0.14)",
            borderRadius: 18,
            boxShadow: "0 18px 55px rgba(43,27,18,0.18)",
            padding: "12px 12px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            animation: "ps_toastIn 220ms ease-out",
          }}
        >
          {/* Mini brand animation */}
          <div
            aria-hidden="true"
            style={{
              width: 62,
              height: 62,
              borderRadius: 18,
              background: "#FFF6E9",
              border: "1px solid rgba(43,27,18,0.08)",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
              flex: "0 0 auto",
            }}
          >
            <div style={{ position: "relative", width: 52, height: 52 }}>
              <div
                style={{
                  position: "absolute",
                  left: 6,
                  top: 14,
                  width: 30,
                  height: 26,
                  borderRadius: 16,
                  background: "#FFFFFF",
                  border: "1px solid rgba(43,27,18,0.10)",
                  boxShadow: "0 8px 18px rgba(43,27,18,0.08)",
                  animation: "ps_bob 700ms ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 6,
                  top: 11,
                  width: 10,
                  height: 10,
                  borderRadius: "10px 10px 2px 10px",
                  background: "#F2EBE6",
                  border: "1px solid rgba(43,27,18,0.08)",
                  transform: "rotate(-12deg)",
                  animation: "ps_bob 700ms ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  top: 25,
                  width: 4,
                  height: 4,
                  borderRadius: 999,
                  background: "rgba(43,27,18,0.85)",
                  animation: "ps_blink 3200ms ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 28,
                  top: 30,
                  width: 6,
                  height: 5,
                  borderRadius: 999,
                  background: "rgba(43,27,18,0.75)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 30,
                  top: 34,
                  width: 10,
                  height: 6,
                  borderRadius: "0 0 10px 10px",
                  background: "#F4A63A",
                  transformOrigin: "left center",
                  animation: "ps_lick 700ms ease-in-out infinite",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  right: 6,
                  top: 10,
                  width: 14,
                  height: 22,
                  borderRadius: 10,
                  background: "#2FB7B5",
                  border: "1px solid rgba(43,27,18,0.10)",
                  boxShadow: "0 8px 18px rgba(43,27,18,0.10)",
                  transformOrigin: "center bottom",
                  animation: "ps_sway 700ms ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 11,
                  top: 30,
                  width: 4,
                  height: 10,
                  borderRadius: 6,
                  background: "#F2EBE6",
                  border: "1px solid rgba(43,27,18,0.06)",
                  animation: "ps_sway 700ms ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 2,
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#F4A63A",
                  opacity: 0.9,
                  animation: "ps_twinkle 900ms ease-in-out infinite",
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "left", minWidth: 0 }}>
            <div style={{ fontWeight: 900, fontSize: 14, color: "#2B1B12" }}>
              You’re on the list.
            </div>
            <div
              style={{
                fontSize: 13,
                opacity: 0.82,
                marginTop: 2,
                lineHeight: 1.35,
              }}
            >
              Thanks for the love. You’ll hear from us first.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowToast(false)}
            aria-label="Close"
            style={{
              marginLeft: "auto",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 18,
              opacity: 0.65,
              padding: 6,
              flex: "0 0 auto",
            }}
          >
            ×
          </button>

          <style>{`
            @keyframes ps_toastIn {
              from { opacity: 0; transform: translateY(10px) scale(0.98); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes ps_bob { 0%{transform:translateY(0)} 50%{transform:translateY(-2px)} 100%{transform:translateY(0)} }
            @keyframes ps_sway { 0%{transform:rotate(0)} 50%{transform:rotate(5deg)} 100%{transform:rotate(0)} }
            @keyframes ps_lick { 0%{transform:rotate(0) scaleX(0.85)} 50%{transform:rotate(-10deg) scaleX(1)} 100%{transform:rotate(0) scaleX(0.85)} }
            @keyframes ps_twinkle { 0%{transform:scale(0.85);opacity:0.6} 50%{transform:scale(1.05);opacity:1} 100%{transform:scale(0.85);opacity:0.6} }
            @keyframes ps_blink { 0%, 96%, 100%{transform:scaleY(1)} 97%{transform:scaleY(0.1)} 98%{transform:scaleY(1)} }
          `}</style>
        </div>
      )}

      {/* MAIN BUTTON / PANEL */}
      {!open ? (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setStatus("idle");
          }}
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid rgba(43,27,18,0.18)",
            background: "#FFFFFF",
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(43,27,18,0.10)",
          }}
        >
          When will your pup’s tail wag a little happier?
        </button>
      ) : (
        <div style={{ width: "min(560px, 92vw)" }}>
          {/* SUCCESS STATE replaces form */}
          {status === "success" ? (
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(43,27,18,0.12)",
                borderRadius: 18,
                padding: 14,
                boxShadow: "0 16px 40px rgba(43,27,18,0.10)",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 14 }}>
                Welcome to the Petscream list.
              </div>
              <div style={{ fontSize: 13, opacity: 0.82, marginTop: 4 }}>
                We’ll email you as soon as we’re ready.
              </div>

              <button
                type="button"
                onClick={closeAll}
                style={{
                  marginTop: 10,
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(43,27,18,0.18)",
                  background: "#FFFFFF",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                autoComplete="email"
                style={{
                  width: 260,
                  maxWidth: "78vw",
                  padding: "10px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(43,27,18,0.18)",
                  background: "#FFF",
                  outline: "none",
                  fontSize: 14,
                }}
              />

              <button
                type="submit"
                disabled={!isValidEmail || status === "loading"}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(43,27,18,0.18)",
                  background:
                    !isValidEmail || status === "loading" ? "#F2EBE6" : "#FFFFFF",
                  fontWeight: 800,
                  cursor:
                    !isValidEmail || status === "loading"
                      ? "not-allowed"
                      : "pointer",
                  boxShadow: "0 10px 25px rgba(43,27,18,0.10)",
                }}
              >
                {status === "loading" ? "Sending..." : "Notify me"}
              </button>

              <button
                type="button"
                onClick={closeAll}
                style={{
                  padding: "10px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(43,27,18,0.12)",
                  background: "transparent",
                  fontWeight: 700,
                  cursor: "pointer",
                  opacity: 0.8,
                }}
              >
                Cancel
              </button>

              <div style={{ width: "100%", marginTop: 6, textAlign: "center" }}>
                {status === "error" ? (
                  <div style={{ fontSize: 13, opacity: 0.9 }}>
                    Something went wrong. Please try again.
                  </div>
                ) : (
                  <div style={{ fontSize: 13, opacity: 0.75 }}>
                    Leave your email and be the first to know when Petscream arrives.
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
