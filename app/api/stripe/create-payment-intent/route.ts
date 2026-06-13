import Stripe from "stripe";
import { NextResponse } from "next/server";
import { computeServerTotals } from "../../../../lib/pricing";

export async function POST(req: Request) {
  try {
    const { items, paymentMethod = "card", currency = "usd", metadata } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe key missing" }, { status: 500 });
    }

    // Tutar İSTEMCİDEN DEĞİL, sunucudaki gerçek fiyatlardan hesaplanır.
    const { total } = computeServerTotals(items, paymentMethod === "cash" ? "cash" : "card");
    if (total <= 0) return NextResponse.json({ error: "Invalid amount" }, { status: 400 });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100),
      currency,
      metadata,
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("Stripe error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
