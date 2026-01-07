"use client";

import { useMemo, useState } from "react";

export default function WaitlistButton() {
  const FORM_ENDPOINT = "https://formspree.io/f/xzdznbwq";

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [showPop, setShowPop] = useState(false);

  const isValidEmail = useMemo(() => {
    const v = email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [email]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail) return;

    try {
      setStatus("loading");

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) throw new Error("Form submit failed");

      setStatus("success");
      setEmail("");

      // POP göster
      setShowPop(true);
      // kısa süre sonra kapat
      window.setTimeout(() => setShowPop(false), 2600);
      // formu da kapat (istersen kapatmayalım, ama temiz duruyor)
      window.setTimeout(() => setOpen(false), 900);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {/* POP */}
      {showPop && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            left: "50%",
            top: "84px",
            transform: "translateX(-50%)",
            zIndex: 50,
            width: "min(520px, 92vw)",
            background: "#FFFFFF",
            border: "1px solid rgba(43,27,18,0.14)",
            borderRadius: "18px",
            boxShadow: "0 18px 55px rgba(43,27,18,0.18)",
            padding: "14px 14px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            animation: "popIn 220ms ease-out",
          }}
        >
          {/* Mini animasyon */}
          <div
            aria-hidden="true"
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "16px",
              background: "#FFF6E9",
              display: "grid",
              placeItems: "center",
              border: "1px solid rgba(43,27,18,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "26px",
                lineHeight: 1,
                animation: "bob 700ms ease-in-out infinite",
              }}
              title="Pup + ice cream"
            >
              🐶🍦
            </div>
          </div>

          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 800, fontSize: "14px" }}>
              Teşekkürler, listemize eklendin!
            </div>
            <div style={{ fontSize: "13px", opacity: 0.82, marginTop: "2px" }}>
              İlk siz bilgilendirileceksiniz, şüpheniz olmasın.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowPop(false)}
            aria-label="Close"
            style={{
              marginLeft: "auto",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "18px",
              opacity: 0.65,
            }}
          >
            ×
          </button>

          {/* Animasyon CSS */}
          <style jsx global>{`
            @keyframes popIn {
              from {
                opacity: 0;
                transform: translateX(-50%) translateY(-10px) scale(0.98);
              }
              to {
                opacity: 1;
                transform: translateX(-50%) translateY(0) scale(1);
              }
            }
            @keyframes bob {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-2px);
              }
              100% {
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}

      {!open ? (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setStatus("idle");
          }}
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(43,27,18,0.18)",
            background: "#FFFFFF",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(43,27,18,0.10)",
          }}
        >
          When will your pup’s tail wag a little happier?
        </button>
      ) : (
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            gap: "10px",
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
              width: "260px",
              maxWidth: "78vw",
              padding: "10px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(43,27,18,0.18)",
              background: "#FFF",
              outline: "none",
              fontSize: "14px",
            }}
          />

          <button
            type="submit"
            disabled={!isValidEmail || status === "loading"}
            style={{
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(43,27,18,0.18)",
              background:
                !isValidEmail || status === "loading" ? "#F2EBE6" : "#FFFFFF",
              fontWeight: 700,
              cursor:
                !isValidEmail || status === "loading" ? "not-allowed" : "pointer",
              boxShadow: "0 10px 25px rgba(43,27,18,0.10)",
            }}
          >
            {status === "loading" ? "Sending..." : "Notify me"}
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setStatus("idle");
              setEmail("");
            }}
            style={{
              padding: "10px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(43,27,18,0.12)",
              background: "transparent",
              fontWeight: 600,
              cursor: "pointer",
              opacity: 0.8,
            }}
          >
            Cancel
          </button>

          <div style={{ width: "100%", marginTop: "6px" }}>
            {status === "error" && (
              <div style={{ fontSize: "13px", opacity: 0.9 }}>
                Something went wrong. Please try again.
              </div>
            )}
            {status !== "error" && (
              <div style={{ fontSize: "13px", opacity: 0.75 }}>
                Leave your email and be the first to know when Petscream arrives.
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
