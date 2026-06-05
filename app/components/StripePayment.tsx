"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm({ onSuccess }: { onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!stripe || !elements) return;
    setLoading(true);
    setError("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin + "/checkout/success" },
      redirect: "if_required",
    });

    if (error) {
      setError(error.message || "Payment failed");
      setLoading(false);
    } else {
      onSuccess();
    }
  };

  return (
    <div>
      <PaymentElement />
      {error && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 8 }}>{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading || !stripe}
        style={{
          width: "100%", marginTop: 16, background: "#2FB7B5", color: "white",
          border: "none", borderRadius: 999, padding: "14px 0", fontSize: 16,
          fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.5 : 1,
        }}
      >
        {loading ? "Processing..." : "Pay now"}
      </button>
    </div>
  );
}

export default function StripePayment({ amount, onSuccess }: { amount: number; onSuccess: (paymentIntentId: string) => void }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    if (clientSecret) return;
    setLoading(true);
    const res = await fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
    setLoading(false);
  };

  if (!clientSecret) {
    init();
    return <p style={{ color: "#8a6a5a", fontSize: 13 }}>Loading payment form...</p>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: "stripe" } }}>
      <CheckoutForm onSuccess={() => onSuccess(clientSecret)} />
    </Elements>
  );
}
