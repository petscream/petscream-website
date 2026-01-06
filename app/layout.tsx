import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.petscream.com"),
  title: "Petscream",
  description: "Extra joy. On purpose.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.petscream.com",
    title: "Petscream",
    description: "Extra joy. On purpose.",
    images: [{ url: "/og.png", width: 1500, height: 800, alt: "Petscream" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petscream",
    description: "Extra joy. On purpose.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
        <Header />
        {children}
      </body>
    </html>
  );
}
