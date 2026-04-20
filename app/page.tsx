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
    <main className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2FB7B5]">
              Frozen Treats
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Extra joy. On purpose.
            </h1>

            <p className="mt-5 text-base leading-7 text-[#5c4638] md:text-lg">
              Frozen treats made with real ingredients, playful shapes, and
              simple recipes dogs love.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#2FB7B5] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                Shop treats
              </Link>

              <Link
                href="/whats-in-it"
                className="inline-flex items-center justify-center rounded-full border border-[#d8c7b6] px-6 py-3 text-base font-semibold text-[#2B1B12] transition hover:bg-white"
              >
                What’s in it
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[32px] bg-white p-4 shadow-[0_20px_50px_rgba(43,27,18,0.12)]">
              <Image
                src="/images/mini-bone-treats.png"
                alt="Petscream Mini Bone Treats"
                width={520}
                height={650}
                priority
                className="h-auto w-full max-w-[420px] rounded-[24px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
