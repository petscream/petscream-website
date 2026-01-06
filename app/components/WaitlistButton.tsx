"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xzdznbwq";

const BRAND = {
  ink: "#2B1B12",
  line: "rgba(43,27,18,0.18)",
  panel: "#FFFFFF",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function WaitlistButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }

    try {
      setStatus("loading");

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setErrorMsg("");
          setOpen(true);
        }}
        style={{
          padding: "12px 18px",
          borderRadius: 14,
          background: BRAND.panel,
          border: `1px solid ${BRAND.line}`,
          color: BRAND.ink,
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 14px 30px rgba(43,27,18,0.10)",
        }}
        aria-label="Open waitlist form"
      >
        When will your pup’s tail wag a little happier?
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(43,27,18,0.35)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 999,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "min(520px, 100%)",
              background: "#FFF6E9",
              border: `1px solid ${BRAND.line}`,
              borderRadius: 18,
              padding: 18,
              boxShadow: "0 30px 80px rgba(43,27,18,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <div>
                <div style={{ fontSize: "1.15rem", fontWeight: 900 }}>
                  Leave your email
                </div>
                <div style={{ opacity: 0.8, marginTop: 6, lineHeight: 1.4 }}>
                  Be the first to know when Petscream arrives. Extra joy. On
                  purpose.
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  background: "transparent",
                  border: `1px solid ${BRAND.line}`,
                  borderRadius: 12,
                  padding: "8px 10px",
                  cursor: "pointer",
                  fontWeight: 800,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {status === "success" ? (
              <div
                style={{
                  marginTop: 14,
                  background: "#FFFFFF",
                  border: `1px solid ${BRAND.line}`,
                  borderRadius: 16,
                  padding: 14,
                  textAlign: "left",
                }}
              >
                <div style={{ fontWeight: 900 }}>You’re on the list.</div>
                <div style={{ marginTop: 6, opacity: 0.85 }}>
                  Thanks for joining. We’ll email you when we launch.
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    marginTop: 12,
                    padding: "10px 14px",
                    borderRadius: 12,
                    background: "#2B1B12",
                    color: "#FFF6E9",
                    border: "none",
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: 14 }}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    autoComplete="email"
                    style={{
                      flex: "1 1 240px",
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: `1px solid ${BRAND.line}`,
                      background: "#FFFFFF",
                      color: BRAND.ink,
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: "#2B1B12",
                      color: "#FFF6E9",
                      border: "none",
                      fontWeight: 900,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      opacity: status === "loading" ? 0.75 : 1,
                      minWidth: 140,
                    }}
                  >
                    {status === "loading" ? "Sending..." : "Notify me"}
                  </button>
                </div>

                {status === "error" && (
                  <div
                    style={{
                      marginTop: 10,
                      color: "#7A2E1E",
                      fontWeight: 700,
                    }}
                  >
                    {errorMsg || "Please try again."}
                  </div>
                )}

                <div style={{ marginTop: 10, opacity: 0.7, fontSize: 13 }}>
                  We only email for launch updates. No spam.
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
