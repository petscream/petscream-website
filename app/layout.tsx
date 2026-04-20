import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petscream",
  description: "Frozen treats made with real ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
