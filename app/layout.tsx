import "./globals.css";
import type { ReactNode } from "react";
import Header from "./components/Header";

export const metadata = {
  title: "Petscream",
  description: "Extra joy. On purpose.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#FFF6E9", color: "#2B1B12" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
