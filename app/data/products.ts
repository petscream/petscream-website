export type Product = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  price: number;
  href: string;
  ctaLabel: string;
  // ── Detay sayfası için ──
  description: string;       // Kısa açıklama
  ingredients: string[];     // İçindekiler listesi
  weightG: number;           // Gramaj (g)
  weightOz: number;          // Gramaj (oz)
  count?: string;            // Kaç adet (opsiyonel, örn. "4 pieces")
  badge?: string;            // Rozet (opsiyonel, örn. "Best Seller")
};

export const products: Product[] = [
  {
    id: "heart-pop",
    name: "Heart Pop",
    subtitle: "Blueberry & Banana",
    image: "/images/heart-pop.png",
    price: 12,
    href: "/shop/heart-pop",
    ctaLabel: "Add to cart",
    description:
      "A heart-shaped frozen treat made with goat milk, fresh blueberries, and banana. Perfect for spoiling your pup with a wholesome, handcrafted snack.",
    ingredients: ["Goat Milk", "Blueberry", "Banana"],
    weightG: 75,
    weightOz: 2.6,
    count: "1 piece",
    badge: "Best Seller",
  },
  {
    id: "paw-pop",
    name: "Paw Pop",
    subtitle: "Blueberry & Banana",
    image: "/images/paw-pop.png",
    price: 12,
    href: "/shop/paw-pop",
    ctaLabel: "Add to cart",
    description:
      "A paw-shaped frozen pop bursting with blueberry and banana flavor. Made fresh daily with just three simple, natural ingredients.",
    ingredients: ["Goat Milk", "Blueberry", "Banana"],
    weightG: 75,
    weightOz: 2.6,
    count: "1 piece",
  },
  {
    id: "everyday-pop",
    name: "Everyday Pop",
    subtitle: "Blueberry & Banana",
    image: "/images/mini-pop.png",
    price: 6,
    href: "/shop/everyday-pop",
    ctaLabel: "Add to cart",
    description:
      "A classic stick pop for everyday happiness. Light, refreshing, and made with the same three natural ingredients your dog already loves.",
    ingredients: ["Goat Milk", "Blueberry", "Banana"],
    weightG: 35,
    weightOz: 1.2,
    count: "1 piece",
  },
  {
    id: "mini-mix",
    name: "Mini Bone & Paw Mix",
    subtitle: "Blueberry & Banana",
    image: "/images/mini-paw-treats.png",
    price: 6,
    href: "/shop/mini-mix",
    ctaLabel: "Add to cart",
    description:
      "Bite-sized bone and paw shaped treats — great for training, sharing, or just because. Same great taste, mini size.",
    ingredients: ["Goat Milk", "Blueberry", "Banana"],
    weightG: 50,
    weightOz: 1.8,
    count: "Assorted mix",
  },
];
