"use client";

import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/petscreamnyc/";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.75-.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: "rgba(255,246,233,0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(43,27,18,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#2B1B12",
            minWidth: 180,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
              border: "1px solid rgba(43,27,18,0.10)",
              background: "rgba(255,255,255,0.35)",
              flex: "0 0 auto",
            }}
          >
            <Image
              src="/petscream-logo.jpg"
              alt="Petscream logo"
              width={42}
              height={42}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>

          <span
            style={{
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 0.4,
              color: "#2B1B12",
              textShadow: "1px 1px 0 rgba(244,166,58,0.55)",
            }}
          >
            Petscream
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/about"
            style={{
              textDecoration: "none",
              color: "#2B1B12",
              padding: "10px 12px",
              borderRadius: 12,
              fontWeight: 650,
            }}
          >
            This is where it began
          </Link>

          <Link
            href="/faqs"
            style={{
              textDecoration: "none",
              color: "#2B1B12",
              padding: "10px 12px",
              borderRadius: 12,
              fontWeight: 650,
            }}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#2B1B12",
              padding: "10px 12px",
              borderRadius: 12,
              fontWeight: 650,
            }}
          >
            Chat with us
          </Link>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              color: "#2B1B12",
              padding: "10px 14px",
              borderRadius: 14,
              fontWeight: 750,
              border: "1px solid rgba(43,27,18,0.18)",
              background: "rgba(255,255,255,0.45)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
            }}
          >
            <InstagramIcon />
            Share the joy
          </a>
        </nav>
      </div>
    </header>
  );
}
