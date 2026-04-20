import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Petscream | Frozen Treats for Happy Tails",
  description:
    "Frozen treats made with real ingredients. Extra joy. On purpose.",
};

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[#2B1B12] focus:shadow-md"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]"
      >
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row md:px-10 md:py-24">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2FB7B5]">
              Frozen Treats
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
              Extra joy. On purpose.
            </h1>

            <p className="mt-4 text-base text-[#5c4638] md:text-lg">
              Frozen treats made with real ingredients.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/shop"
                aria-label="Browse Petscream frozen treats in the shop"
                className="inline-block rounded-full bg-[#2FB7B5] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                Shop treats
              </Link>

              <Link
                href="/whats-in-it"
                className="inline-block rounded-full border border-[#d8c7b6] px-6 py-3 text-base font-semibold text-[#2B1B12] transition hover:bg-white"
              >
                What’s in it
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-center md:w-1/2">
            <div className="overflow-hidden rounded-[24px] shadow-lg">
              <Image
                src="/images/mini-bone-treats.png"
                alt="Blueberry and Banana Mini Bone Treats by Petscream"
                width={420}
                height={525}
                priority
                className="h-auto w-[320px] object-cover md:w-[420px]"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
