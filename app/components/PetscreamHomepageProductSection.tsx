type Product = {
  id: string;
  name: string;
  subtitle: string;
  flavor: string;
  image: string;
  price: string;
  description: string;
  badge?: string;
};

export const featuredProduct: Product = {
  id: 'blueberry-banana-heart',
  name: 'Blueberry Banana Heart',
  subtitle: 'Beyond Basics.',
  flavor: 'Blueberry & Banana with peanut butter',
  image: '/images/petscream-blueberry-banana-hero.png',
  price: 'From $6',
  description:
    'A small-batch frozen treat made with real ingredients and a clean, playful Petscream vibe.',
  badge: 'Featured Flavor',
};

export default function PetscreamHomepageProductSection() {
  return (
    <section className="bg-[#FFF6E9] text-[#2B1B12]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20">
        <div className="order-2 lg:order-1">
          <div className="mb-4 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium shadow-sm ring-1 ring-black/5">
            {featuredProduct.badge}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6C63B5]">
            Frozen Treats
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {featuredProduct.name}
          </h1>

          <p className="mt-4 text-xl italic text-[#5A493F]">{featuredProduct.subtitle}</p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4A382F]">
            {featuredProduct.flavor}
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#5A493F]">
            {featuredProduct.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#2FB7B5] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Shop now
            </a>
            <a
              href="/build-your-box"
              className="inline-flex items-center justify-center rounded-full border border-[#2B1B12]/15 bg-white px-6 py-3 text-sm font-semibold text-[#2B1B12] transition hover:bg-[#FFF1DA]"
            >
              Build your box
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#5A493F]">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
              Made with real ingredients
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
              Not ice cream. Petscream.
            </span>
          </div>

          <p className="mt-8 text-2xl font-semibold text-[#F4A63A]">{featuredProduct.price}</p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(43,27,18,0.10)] ring-1 ring-black/5">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-full max-w-[520px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
