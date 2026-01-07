"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdznbwq";

export default function WaitlistButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "grid", gap: 12, justifyItems: "center" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          border: "1px solid rgba(43,27,18,0.18)",
          background: "#FFF",
          borderRadius: 14,
          padding: "10px 14px",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 10px 24px rgba(43,27,18,0.10)",
        }}
      >
        When will your pup’s tail wag a little happier?
      </button>

      {open ? (
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          style={{
            width: "min(520px, 92vw)",
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            background: "#FFF",
            border: "1px solid rgba(43,27,18,0.12)",
            borderRadius: 16,
            padding: 14,
            boxShadow: "0 16px 40px rgba(43,27,18,0.10)",
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            style={{
              flex: "1 1 240px",
              minWidth: 220,
              padding: "12px 12px",
              borderRadius: 12,
              border: "1px solid rgba(43,27,18,0.16)",
              outline: "none",
              fontSize: "1rem",
            }}
          />

          <input type="hidden" name="source" value="petscream.com homepage" />
          <input type="hidden" name="type" value="waitlist" />

          <button
            type="submit"
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(43,27,18,0.18)",
              background: "#F4A63A",
              color: "#2B1B12",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Notify me
          </button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(43,27,18,0.12)",
              background: "#FFF",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Close
          </button>

          <p
            style={{
              margin: 0,
              width: "100%",
              fontSize: "0.92rem",
              opacity: 0.85,
              textAlign: "center",
            }}
          >
            Leave your email and be the first to know when Petscream arrives.
          </p>
        </form>
      ) : null}
    </div>
  );
}
