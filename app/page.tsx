"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const products = [
  { id: "heart-pop", name: "Heart Pop", subtitle: "Blueberry & Banana", image: "/images/heart-pop.png" },
  { id: "mini-bone-treats", name: "Mini Bone Treats", subtitle: "Blueberry & Banana", image: "/images/mini-bone-treats.png" },
  { id: "mini-paw-treats", name: "Mini Paw Treats", subtitle: "Blueberry & Banana", image: "/images/mini-paw-treats.png" },
  { id: "mini-pop", name: "Mini Pop", subtitle: "Blueberry & Banana", image: "/images/mini-pop.png" },
  { id: "paw-pop", name: "Paw Pop", subtitle: "Blueberry & Banana", image: "/images/paw-pop.png" },
];

const dogNames = [
  "Lycan","Nellie","Lilou","Wendell","Penny","Bode","Rio","Zizi","Summer","Roxy",
  "Pati","Rolex","Denali","Cyrus","Bal","Rossie","Thor","Masky","Jeff","Max","Bella","Luna","Nilou",
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const allNames = [...dogNames, ...dogNames];

  return (
    <main className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-block rounded-full bg-[#FDE8C8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B05A00]">
              Frozen Treats for Dogs
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Extra joy.<br />On purpose.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#6b4c3b] md:text-lg">
              No added sugar. The fruit takes care of it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#2FB7B5] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                Make tails wag
              </Link>
              <Link
                href="/whats-in-it"
                className="inline-flex items-center justify-center rounded-full border border-[#d8c7b6] px-6 py-3 text-base font-semibold text-[#2B1B12] transition hover:bg-white"
              >
                See what's inside
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-2xl font-extrabold text-[#2B1B12]">3</div>
                <div className="text-xs text-[#8a6a5a]">Real ingredients</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#2B1B12]">0</div>
                <div className="text-xs text-[#8a6a5a]">Added sugar</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#2B1B12]">100%</div>
                <div className="text-xs text-[#8a6a5a]">Real fruit</div>
              </div>
            </div>
          </div>

          {/* Right — Product Carousel */}
          <div className="flex flex-col items-center gap-5">
            <div className="w-full max-w-[340px] rounded-[32px] bg-[#F4E4C8] p-5 text-center">
              <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_24px_rgba(43,27,18,0.1)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={products[current].image}
                    alt={products[current].name}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="340px"
                    priority={current === 0}
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2FB7B5]">
                  {products[current].subtitle}
                </p>
                <h2 className="mt-1 text-lg font-extrabold text-[#2B1B12]">
                  {products[current].name}
                </h2>
                <p className="mt-1 text-xs text-[#8a6a5a]">Not ice cream. Petscream.</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#2FB7B5]" : "w-2 bg-[#d8c7b6]"
                  }`}
                  aria-label={`Show product ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-t border-[#ecdccb] bg-[#FFF6E9] py-5 overflow-hidden">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a5a]">
          Tried &amp; tail-wagged by
        </p>
        <div className="overflow-hidden">
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 30s linear infinite",
            }}
          >
            {allNames.map((name, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "white",
                  border: "1.5px solid #f1e3d3",
                  borderRadius: 999,
                  padding: "6px 16px",
                  marginRight: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#2B1B12",
                  whiteSpace: "nowrap",
                }}
              >
                🐾 {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
