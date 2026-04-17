"use client";

import { useState } from "react";

const products = [
  { id: "p1", name: "5-Pack Popsicles", price: 18 },
  { id: "p2", name: "8-Pack Popsicles", price: 27 },
  { id: "p3", name: "10-Pack Popsicles", price: 32 },
  { id: "p4", name: "Big Paw (2-Pack)", price: 14 },
  { id: "p5", name: "Big Heart (2-Pack)", price: 14 },
  { id: "p6", name: "Mini Treat Box (4-Pack)", price: 8 },
];

export default function ShopPage() {
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);

  const addToCart = (id: string) => {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Petscream Shop</h1>

      <p>
        Home made daily icecream for dogs 🐾 <br />
        Freshly made for delivery days.
      </p>

      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <strong>{p.name}</strong> - ${p.price}
          <button
            onClick={() => addToCart(p.id)}
            style={{ marginLeft: 10 }}
          >
            Add
          </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => {
        const product = products.find((p) => p.id === item.id);
        return (
          <div key={item.id}>
            {product?.name} x {item.qty}
          </div>
        );
      })}

      <h2>Delivery</h2>
      <p>Wednesday 7–11 PM</p>
      <p>Saturday 12–6 PM</p>
      <p>Sunday 12–6 PM</p>

      <button style={{ marginTop: 20 }}>
        Continue to checkout
      </button>
    </div>
  );
}
