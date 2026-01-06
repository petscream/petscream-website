import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Petscream",
  description: "Extra joy. On purpose.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#FFF6E9",
          color: "#2B1B12",
        }}
      >
        {children}
      </body>
    </html>
  );
}
