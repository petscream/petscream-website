import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: (c) => c.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) } }
  );

  const { data: { user } } = await supabase.auth.getUser();

  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      user_id: user?.id || null,
      customer_name: body.customer_name,
      customer_email: body.customer_email,
      customer_phone: body.customer_phone,
      delivery_type: body.delivery_type || "delivery",
      delivery_date: body.delivery_date,
      delivery_time_slot: body.delivery_time_slot,
      street_address: body.street_address,
      borough: body.borough,
      apt: body.apt,
      delivery_note: body.delivery_note,
      subtotal: body.subtotal,
      discount_amount: body.discount_amount || 0,
      coupon_code: body.coupon_code || null,
      total: body.total,
      payment_method: body.payment_method || "cash",
      payment_status: body.payment_status || "pending",
      stripe_payment_intent_id: body.stripe_payment_intent_id || null,
      status: "pending",
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await supabase.from("order_items").insert(
    body.items.map((item: any) => ({
      order_id: order.id,
      product_id: item.id,
      product_name: item.name,
      quantity: item.quantity,
      unit_price: item.price,
      total_price: item.price * item.quantity,
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

  await resend.emails.send({
    from: "PetsCream <orders@petscreamnyc.com>",
    to: body.customer_email,
    subject: `Order confirmed! ${order.order_number}`,
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px;">
        <h1 style="color:#2B1B12">🐾 Order Received!</h1>
        <p>Hi ${body.customer_name}, your order <strong>${order.order_number}</strong> has been placed.</p>
        <div style="background:#FFF6E9;border-radius:12px;padding:16px;margin:16px 0;">
          ${itemsList}
          <hr style="border:1px solid #ecdccb;margin:12px 0"/>
          <strong>Total: $${body.total.toFixed(2)}</strong>
        </div>
        <p>Delivery: <strong>${body.delivery_time_slot}</strong></p>
        <p style="color:#8a6a5a;font-size:13px;">We'll notify you when your order is on the way!</p>
      </div>
    `,
  });

  await resend.emails.send({
    from: "PetsCream <orders@petscreamnyc.com>",
    to: "petscreamnyc@gmail.com",
    subject: `New order: ${order.order_number} — $${body.total.toFixed(2)}`,
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px;">
        <h1>New Order: ${order.order_number}</h1>
        <p><strong>Customer:</strong> ${body.customer_name} (${body.customer_email})</p>
        <p><strong>Phone:</strong> ${body.customer_phone}</p>
        <p><strong>Address:</strong> ${body.street_address}, ${body.borough}</p>
        <p><strong>Delivery:</strong> ${body.delivery_time_slot}</p>
        <div style="background:#f9f3ea;border-radius:12px;padding:16px;margin:16px 0;">
          ${itemsList}
          <hr style="border:1px solid #ecdccb;margin:12px 0"/>
          <strong>Total: $${body.total.toFixed(2)}</strong>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ success: true, order });
}
