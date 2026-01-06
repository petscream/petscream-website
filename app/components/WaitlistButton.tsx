"use client";

import { useMemo, useState } from "react";

type Props = {
  buttonText?: string;
  formTitle?: string;
  subtitle?: string;
};

export default function WaitlistButton({
  buttonText = "Notify me",
  formTitle = "When will your pup’s tail wag a little happier?",
  subtitle = "Leave your email and be the first to know when Petscream arrives.",
}: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  // Formspree endpoint (senin ekran görüntüsündeki)
  const actionUrl = useMemo(() => "https://formspree.io/f/xzdznbwq", []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setStatus("loading");

      const res = await fetch(actionUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Button */}
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setOpen(true);
        }}
        style={{
          border: "1px solid rgba(43,27,18,0.18)",
          background: "#FFF6E9",
          color: "#2B1B12",
          borderRadius: 999,
          padding: "10px 16px",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        }}
      >
        {buttonText}
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 9999,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "min(520px, 100%)",
              background: "#FFF6E9",
              borderRadius: 20,
              border: "1px solid rgba(43,27,18,0.18)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
              padding: 18,
            }}
            onClick={(ev) => ev.stopPropagation()}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: "#FFFFFF",
                  border: "1px solid rgba(43,27,18,0.10)",
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
                aria-hidden="true"
              >
                {/* Logo path sabit: /app/public/petscream-logo.jpg */}
                <img
                  src="/petscream-logo.jpg"
                  alt="Petscream"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#2B1B12",
                    lineHeight: 1.2,
                  }}
                >
                  {formTitle}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                    color: "rgba(43,27,18,0.80)",
                  }}
                >
                  {subtitle}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 18,
                  cursor: "pointer",
                  color: "rgba(43,27,18,0.70)",
                  padding: 6,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                marginTop: 14,
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                style={{
                  flex: 1,
                  height: 44,
                  borderRadius: 12,
                  border: "1px solid rgba(43,27,18,0.18)",
                  padding: "0 12px",
                  background: "#FFFFFF",
                  outline: "none",
                }}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  height: 44,
                  borderRadius: 12,
                  border: "1px solid rgba(43,27,18,0.18)",
                  background: "#2B1B12",
                  color: "#FFF6E9",
                  padding: "0 14px",
                  fontWeight: 800,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? "Sending..." : "Notify me"}
              </button>
            </form>

            <div style={{ marginTop: 10, minHeight: 18 }}>
              {status === "success" && (
                <div style={{ color: "#1f7a3a", fontWeight: 700, fontSize: 13 }}>
                  You are on the list. Thank you.
                </div>
              )}
              {status === "error" && (
                <div style={{ color: "#a11b1b", fontWeight: 700, fontSize: 13 }}>
                  Something went wrong. Please try again.
                </div>
              )}
              {status === "idle" && (
                <div style={{ color: "rgba(43,27,18,0.70)", fontSize: 12 }}>
                  We will email you only for Petscream updates.
                </div>
              )}
            </div>

            {/* Hidden fallback: İstersen JS çalışmazsa formspree action ile gitsin diye burada tutuyoruz.
               Şu an handleSubmit fetch kullandığı için bu alan gerekmiyor, ama zararsız.
            */}
            <form action={actionUrl} method="POST" style={{ display: "none" }}>
              <input type="email" name="email" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
