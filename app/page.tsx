<section className="flex flex-col md:flex-row items-center justify-between py-20">

  <div className="max-w-xl">
    <h1 className="text-5xl font-extrabold">
      Extra joy. On purpose.
    </h1>

    <p className="mt-4 text-lg text-[#5c4638]">
      Frozen treats made with real ingredients.
    </p>

    <a
      href="/shop"
      className="inline-block mt-6 rounded-full bg-[#2FB7B5] px-6 py-3 text-white font-semibold"
    >
      Shop treats
    </a>
  </div>

  <div className="mt-10 md:mt-0">
    <img src="/images/mini-bone-treats.png" />
  </div>

</section>
  import Image from "next/image";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF6E9] text-[#2B1B12]">
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

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[28px] border border-[#f1e3d3] bg-white shadow-[0_10px_30px_rgba(43,27,18,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(43,27,18,0.12)]"
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
