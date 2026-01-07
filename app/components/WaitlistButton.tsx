"use client";

import { useMemo, useState } from "react";

export default function WaitlistButton() {
  const FORM_ENDPOINT = "https://formspree.io/f/xzdznbwq";

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

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
      // İstersen 2 saniye sonra kapanacak:
      // setTimeout(() => setOpen(false), 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
              background: !isValidEmail || status === "loading" ? "#F2EBE6" : "#FFFFFF",
              fontWeight: 700,
              cursor: !isValidEmail || status === "loading" ? "not-allowed" : "pointer",
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
            {status === "success" && (
              <div style={{ fontSize: "13px", opacity: 0.9 }}>
                Thanks, you’re on the list.
              </div>
            )}
            {status === "error" && (
              <div style={{ fontSize: "13px", opacity: 0.9 }}>
                Something went wrong. Please try again.
              </div>
            )}
            {status === "idle" && (
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
