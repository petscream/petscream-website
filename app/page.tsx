import Image from "next/image";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2FB7B5]">
            Frozen Treats
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Launch Collection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5c4638] md:text-lg">
            Blueberry & Banana favorites, made the Petscream way.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(43,27,18,0.08)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full bg-[#F9F3EA]">
                <Image
                  src={product.image}
                  alt={`${product.subtitle} ${product.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 md:p-6">
                <p className="text-sm font-medium text-[#2FB7B5]">
                  {product.subtitle}
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-[#2B1B12]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm text-[#6b5648]">
                  Not ice cream. Petscream.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
