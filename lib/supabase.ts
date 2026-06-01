import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const ORDER_STATUS = {
  pending:          { label: "Order Received",    emoji: "📋", color: "#F4A63A" },
  preparing:        { label: "Preparing",          emoji: "🧊", color: "#2FB7B5" },
  out_for_delivery: { label: "Out for Delivery",   emoji: "🚚", color: "#6c63ff" },
  delivered:        { label: "Delivered",          emoji: "🐾", color: "#22c55e" },
  cancelled:        { label: "Cancelled",          emoji: "✕",  color: "#ef4444" },
} as const;

export type OrderStatus = keyof typeof ORDER_STATUS;