import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://petscream.com"),
  title: {
    default: "Petscream",
    template: "%s | Petscream",
  },
  description: "Extra joy. On purpose.",
  applicationName: "Petscream",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://petscream.com",
    siteName: "Petscream",
    title: "Petscream",
    description: "Extra joy. On purpose.",
    images: [
      {
        url: "/petscream-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Petscream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petscream",
    description: "Extra joy. On purpose.",
    images: ["/petscream-logo.jpg"],
  },
  icons: {
    icon: "/petscream-logo.jpg",
    apple: "/petscream-logo.jpg",
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
