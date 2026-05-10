export type Product = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  price: number;
  href: string;
  ctaLabel: string;
};
export const products: Product[] = [
  {
    id: "heart-pop",
    name: "Heart Pop",
    subtitle: "Blueberry & Banana",
    image: "/images/heart-pop.png",
    price: 12,
    href: "/shop",
    ctaLabel: "Add to box",
  },
  {
    id: "paw-pop",
    name: "Paw Pop",
    subtitle: "Blueberry & Banana",
    image: "/images/paw-pop.png",
    price: 12,
    href: "/shop",
    ctaLabel: "Add to box",
  },
  {
    id: "mini-pop",
    name: "Mini Pop",
    subtitle: "Blueberry & Banana",
    image: "/images/mini-pop.png",
    price: 6,
    href: "/shop",
    ctaLabel: "Add to box",
  },
  {
    id: "mini-paw-treats",
    name: "Mini Paw Treats",
    subtitle: "Blueberry & Banana",
    image: "/images/mini-paw-treats.png",
    price: 6,
    href: "/shop",
    ctaLabel: "Add to box",
  },
  {
    id: "mini-bone-treats",
    name: "Mini Bone Treats",
    subtitle: "Blueberry & Banana",
    image: "/images/mini-bone-treats.png",
    price: 6,
    href: "/shop",
    ctaLabel: "Add to box",
  },
];
