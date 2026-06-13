import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { computeServerTotals } from "../../../../lib/pricing";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Fiyatları İSTEMCİYE GÜVENMEDEN sunucuda hesapla
  let pricing;
  try {
    pricing = computeServerTotals(body.items, body.payment_method === "card" ? "card" : "cash");
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Invalid items" }, { status: 400 });
  }

  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      user_id: body.user_id || null,
      customer_name: body.customer_name,
      customer_email: body.customer_email,
      customer_phone: body.customer_phone,
      delivery_type: body.delivery_type || "delivery",
      delivery_date: body.delivery_date || null,
      delivery_time_slot: body.delivery_time_slot,
      street_address: body.street_address,
      borough: body.borough,
      apt: body.apt || null,
      delivery_note: body.delivery_note || null,
      subtotal: pricing.subtotal,
      discount_amount: body.discount_amount || 0,
      coupon_code: body.coupon_code || null,
      total: pricing.total,
      payment_method: body.payment_method || "cash",
      payment_status: body.payment_status || "pending",
      stripe_payment_intent_id: body.stripe_payment_intent_id || null,
      status: "pending",
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await supabase.from("order_items").insert(
    pricing.lineItems.map((item) => ({
      order_id: order.id,
      ...item,
    }))
  );

  await supabase.from("order_status_history").insert({
    order_id: order.id,
    status: "pending",
    note: "Order placed",
  });

  const itemsList = body.items
    .map((i: any) => `${i.name} x${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`)
    .join("<br/>");

  try {
    await resend.emails.send({
      from: "PetsCream <onboarding@resend.dev>",
      to: body.customer_email,
      subject: `Order confirmed! ${order.order_number}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px;">
          <h1 style="color:#2B1B12">🐾 Order Received!</h1>
          <p>Hi ${body.customer_name}, your order <strong>${order.order_number}</strong> has been placed.</p>
          <div style="background:#FFF6E9;border-radius:12px;padding:16px;margin:16px 0;">
            ${itemsList}
            <hr style="border:1px solid #ecdccb;margin:12px 0"/>
            <strong>Total: $${pricing.total.toFixed(2)}</strong>
          </div>
          <p>Delivery: <strong>${body.delivery_time_slot}</strong></p>
          <p style="color:#8a6a5a;font-size:13px;">We'll notify you when your order is on the way!</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "PetsCream <onboarding@resend.dev>",
      to: "petscreamnyc@gmail.com",
      subject: `New order: ${order.order_number} — $${pricing.total.toFixed(2)}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px;">
          <h1>New Order: ${order.order_number}</h1>
          <p><strong>Customer:</strong> ${body.customer_name} (${body.customer_email})</p>
          <p><strong>Phone:</strong> ${body.customer_phone}</p>
          <p><strong>Address:</strong> ${body.street_address}${body.apt ? ` ${body.apt}` : ""}, ${body.borough}</p>
          <p><strong>Delivery:</strong> ${body.delivery_time_slot}</p>
          <div style="background:#f9f3ea;border-radius:12px;padding:16px;margin:16px 0;">
            ${itemsList}
            <hr style="border:1px solid #ecdccb;margin:12px 0"/>
            <strong>Total: $${pricing.total.toFixed(2)}</strong>
          </div>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("Email error:", emailError);
  }

  if (body.user_id) {
    await supabase.from("profiles").update({
      full_name: body.customer_name,
      phone: body.customer_phone,
    }).eq("id", body.user_id);
  }

  return NextResponse.json({ success: true, order });
}