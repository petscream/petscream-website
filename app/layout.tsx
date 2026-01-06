import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Petscream",
  description: "Extra joy. On purpose.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Petscream",
    description: "Extra joy. On purpose.",
    url: "https://www.petscream.com",
    siteName: "Petscream",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Petscream",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petscream",
    description: "Extra joy. On purpose.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
