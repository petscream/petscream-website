import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const brandFont = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Petscream",
  description: "Not essential. Intentional. Beyond basics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={brandFont.className}>{children}</body>
    </html>
  );
}
