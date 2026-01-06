"use client";

import { useState } from "react";

export default function WaitlistButton() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/xzdznbwq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      setEmail("");
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div
        style={{
          marginTop: "16px",
          padding: "12px 18px",
          borderRadius: "999px",
          background: "#fff",
          boxShadow: "0 10px 25px rgba(43,27,18,0.15)",
          fontWeight: 500,
        }}
      >
        🐾 You’re on the list. We’ll be in touch.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "12px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "12px 16px",
          borderRadius: "999px",
          border: "1px solid #ddd",
          fontSize: "0.95rem",
          minWidth: "220px",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "12px 22px",
          borderRadius: "999px",
          border: "none",
          background: "#2B1B12",
          col
