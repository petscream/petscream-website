import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Petscream | Extra joy. On purpose.",
  description:
    "Petscream creates simple, clean treats made with care. Extra joy. On purpose. Join the waitlist to be the first to know when we launch.",
  metadataBase: new URL("https://petscream.com"),
  openGraph: {
    title: "Petscream | Extra joy. On purpose.",
    description:
      "Simple choices. Clean ingredients. No unnecessary extras. Join the waitlist for launch updates.",
    url: "https://petscream.com",
    siteName: "Petscream",
    images: [
      {
        url: "/petscream-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Petscream – clean, mindful treats for dogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petscream | Extra joy. On purpose.",
    description:
      "Simple choices. Clean ingredients. No unnecessary extras. Join the waitlist for launch updates.",
    images: ["/petscream-logo.jpg"],
  },
  icons: {
    icon: "/petscream-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#FFF6E9",
          color: "#2B1B12",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
