"use client";

import { useState, useEffect } from "react";
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
    if (error) { setError(error.message || "Payment failed"); setLoading(false); }
    else { onSuccess(); }
  };

  return (
    <div>
      <PaymentElement options={{
  layout: "tabs",
  wallets: { applePay: "never", googlePay: "never" },
}} />
      {error && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 8 }}>{error}</p>}
      <button onClick={handleSubmit} disabled={loading || !stripe} style={{
        width: "100%", marginTop: 16, background: "#2FB7B5", color: "white",
        border: "none", borderRadius: 999, padding: "14px 0", fontSize: 16,
        fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1,
      }}>
        {loading ? "Processing..." : "Pay now"}
      </button>
    </div>
  );
}

export default function StripePayment({ amount, onSuccess }: { amount: number; onSuccess: (paymentIntentId: string) => void }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setClientSecret(data.clientSecret);
      })
      .catch(() => setError("Failed to load payment form"));
  }, [amount]);

  if (error) return <p style={{ color: "#ef4444", fontSize: 13 }}>Payment error: {error}</p>;
  if (!clientSecret) return <p style={{ color: "#8a6a5a", fontSize: 13 }}>Loading payment form...</p>;

  return (
    <Elements stripe={stripePromise} options={{ 
  clientSecret, 
  locale: "en",
  appearance: { theme: "stripe" },
}}>
      <CheckoutForm onSuccess={() => onSuccess(clientSecret)} />
    </Elements>
  );
}
