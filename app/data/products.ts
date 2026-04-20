export type Product = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "heart-pop",
    name: "Heart Pop",
    subtitle: "Blueberry & Banana",
    image: "/products/heart-pop.png",
  },
  {
    id: "paw-pop",
    name: "Paw Pop",
    subtitle: "Blueberry & Banana",
    image: "/products/paw-pop.png",
  },
  {
    id: "mini-pop",
    name: "Mini Pop",
    subtitle: "Blueberry & Banana",
    image: "/products/mini-pop.png",
  },
  {
    id: "mini-paw-treats",
    name: "Mini Paw Treats",
    subtitle: "Blueberry & Banana",
    image: "/products/mini-paw-treats.png",
  },
  {
    id: "mini-bone-treats",
    name: "Mini Bone Treats",
    subtitle: "Blueberry & Banana",
    image: "/products/mini-bone-treats.png",
  },
];
