import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "./data/products";

export const metadata: Metadata = {
  title: "Petscream | Frozen Treats for Happy Tails",
  description:
    "Discover Petscream frozen treats made with real ingredients. Blueberry & Banana favorites, playful shapes, and extra joy on purpose.",
};

export default function HomePage() {
  const hasProducts = products.length > 0;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[#2B1B12] focus:shadow-md"
      >
        Skip to main content
      </a>

      <main id="main-content" className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]">
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
                className="inline-block rounded-full bg-[#2FB7B5] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2FB7B5] focus:ring-offset-2"
              >
                Shop treats
              </Link>

              <Link
                href="/whats-in-it"
                className="inline-block rounded-full border border-[#d8c7b6] px-6 py-3 text-base font-semibold text-[#2B1B12] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2FB7B5] focus:ring-offset-2"
              >
                What’s in it
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-center md:w-1/2">
            <div className="relative w-[320px] overflow-hidden rounded-[24px] shadow-lg md:w-[420px]">
              <Image
                src="/images/mini-bone-treats.png"
                alt="Blueberry and Banana Mini Bone Treats by Petscream"
                width={420}
                height={525}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 320px, 420px"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2FB7B5]">
              Frozen Treats
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              Our Launch Collection
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#5c4638] md:text-lg">
              Blueberry & Banana favorites, made the Petscream way.
            </p>
          </div>

          {!hasProducts ? (
            <div className="rounded-[28px] border border-[#f1e3d3] bg-white p-10 text-center shadow-[0_10px_30px_rgba(43,27,18,0.08)]">
              <h3 className="text-2xl font-extrabold text-[#2B1B12]">
                Treats are on the way
              </h3>
              <p className="mt-3 text-[#6b5648]">
                We’re getting the collection ready. Please check back soon.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-full bg-[#2FB7B5] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Visit shop
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-[28px] border border-[#f1e3d3] bg-white shadow-[0_10px_30px_rgba(43,27,18,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(43,27,18,0.12)]"
                >
                  <Link
                    href={product.href}
                    className="group block focus:outline-none focus:ring-2 focus:ring-[#2FB7B5] focus:ring-offset-2"
                    aria-label={`View ${product.subtitle} ${product.name}`}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F9F3EA]">
                      <Image
                        src={product.image}
                        alt={`${product.subtitle} ${product.name}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority={product.id === "heart-pop"}
                      />
                    </div>
                  </Link>

                  <div className="p-5 md:p-6">
                    <p className="text-sm font-medium text-[#2FB7B5]">
                      {product.subtitle}
                    </p>

                    <div className="mt-1 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-extrabold text-[#2B1B12]">
                        {product.name}
                      </h3>
                      <p className="shrink-0 text-lg font-bold text-[#2B1B12]">
                        ${product.price}
                      </p>
                    </div>

                    <p className="mt-3 text-sm text-[#6b5648]">
                      Not ice cream. Petscream.
                    </p>

                    <div className="mt-5 flex gap-3">
                      <Link
                        href={product.href}
                        className="inline-flex items-center justify-center rounded-full bg-[#2FB7B5] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2FB7B5] focus:ring-offset-2"
                        aria-label={`${product.ctaLabel} ${product.name}`}
                      >
                        {product.ctaLabel}
                      </Link>

                      <Link
                        href={product.href}
                        className="inline-flex items-center justify-center rounded-full border border-[#d8c7b6] px-5 py-2.5 text-sm font-semibold text-[#2B1B12] transition hover:bg-[#FFF6E9] focus:outline-none focus:ring-2 focus:ring-[#2FB7B5] focus:ring-offset-2"
                        aria-label={`Learn more about ${product.name}`}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
