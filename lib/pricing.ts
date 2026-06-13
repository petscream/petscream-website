import { products } from "../app/data/products";

export type IncomingItem = { id: string; quantity: number };

// İstemciden gelen sepete GÜVENMEDEN, sunucudaki gerçek fiyatlarla yeniden hesaplar.
export function computeServerTotals(
  items: IncomingItem[],
  paymentMethod: "cash" | "card"
) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("No items provided");
  }

  let subtotal = 0;
  const lineItems = items.map((it) => {
    const product = products.find((p) => p.id === it.id);
    if (!product) throw new Error(`Unknown product: ${it.id}`);
    const qty = Math.max(1, Math.min(99, Math.floor(Number(it.quantity) || 0)));
    const lineTotal = product.price * qty;
    subtotal += lineTotal;
    return {
      product_id: product.id,
      product_name: product.name,
      quantity: qty,
      unit_price: product.price,
      total_price: lineTotal,
    };
  });

  subtotal = parseFloat(subtotal.toFixed(2));
  const stripeFee =
    paymentMethod === "card"
      ? parseFloat((subtotal * 0.029 + 0.3).toFixed(2))
      : 0;
  const total = parseFloat((subtotal + stripeFee).toFixed(2));

  return { lineItems, subtotal, stripeFee, total };
}
