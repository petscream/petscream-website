import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Shop | Petscream",
  description: "Shop Petscream frozen treats made with real ingredients.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2FB7B5]">
            Shop all treats
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Frozen treats for happy tails
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5c4638] md:text-lg">
            Explore our launch collection and pick your Petscream favorites.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[28px] border border-[#ecdccb] bg-white shadow-[0_12px_32px_rgba(43,27,18,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(43,27,18,0.12)]"
            >
              <div className="bg-[#F9F3EA] p-5">
                <div className="flex justify-center">
                  <Image
                    src={product.image}
                    alt={`${product.subtitle} ${product.name}`}
                    width={500}
                    height={625}
                    priority={product.id === "heart-pop"}
                    className="h-auto w-full max-w-[340px] rounded-[22px] object-contain"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-[#2FB7B5]">
                  {product.subtitle}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-extrabold leading-tight text-[#2B1B12]">
                    {product.name}
                  </h2>

                  <p className="shrink-0 text-xl font-bold text-[#2B1B12]">
                    ${product.price}
                  </p>
                </div>

                <p className="mt-3 text-sm text-[#6b5648]">
                  Not ice cream. Petscream.
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full bg-[#2FB7B5] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {product.ctaLabel}
                  </Link>

                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full border border-[#d8c7b6] px-5 py-2.5 text-sm font-semibold text-[#2B1B12] transition hover:bg-[#FFF6E9]"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
