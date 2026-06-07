import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { email, order_number } = await req.json();
  if (!email || !order_number) return NextResponse.json({ error: "Email and order number required" }, { status: 400 });

  const { data: order, error } = await supabase
    .from("orders")
    .select("*, order_items(*)")
    .eq("customer_email", email.toLowerCase().trim())
    .eq("order_number", order_number.trim())
    .single();

  if (error || !order) return NextResponse.json({ error: "Order not found. Please check your email and order number." }, { status: 404 });

  return NextResponse.json({ order });
}
