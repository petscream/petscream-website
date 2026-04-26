import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Petscream | Frozen Treats for Happy Tails",
  description: "Frozen treats made with real ingredients. Extra joy. On purpose.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
