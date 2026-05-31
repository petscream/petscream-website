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
      "A heart-shaped frozen pop crafted with a creamy goat dairy blend, real fruit, and a touch of peanut butter. Three wholesome ingredients — endless tail wags.",
    ingredients: ["Goat Dairy Blend", "Blueberry & Banana", "Peanut Butter"],
    weightG: 75,
    weightOz: 2.6,
    count: "1 piece",
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
      "A paw-shaped frozen pop made with a rich goat dairy blend, fresh fruit, and creamy peanut butter. Simple ingredients, serious happiness.",
    ingredients: ["Goat Dairy Blend", "Blueberry & Banana", "Peanut Butter"],
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
      "The everyday treat your dog deserves. A light, refreshing frozen pop made with goat dairy blend, real fruit, and peanut butter — perfect for any occasion.",
    ingredients: ["Goat Dairy Blend", "Blueberry & Banana", "Peanut Butter"],
    weightG: 35,
    weightOz: 1.2,
    count: "1 piece",
  },
  {
    id: "mini-mix",
    name: "Mini Bone & Paw Mix",
    subtitle: "Blueberry & Banana",
    image: "/images/pawbone-bites.png",
    price: 6,
    href: "/shop/mini-mix",
    ctaLabel: "Add to cart",
    description:
      "Bite-sized bone and paw shaped treats packed with goat dairy blend, real fruit, and peanut butter. Great for training, sharing, or just spoiling.",
    ingredients: ["Goat Dairy Blend", "Blueberry & Banana", "Peanut Butter"],
    weightG: 50,
    weightOz: 1.8,
    count: "Assorted mix",
  },
];
