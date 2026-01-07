import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Petscream | Extra joy. On purpose.",
  description: "Simple choices. Clean ingredients. No unnecessary extras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
          background: "#FFF6E9",
          color: "#2B1B12",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
