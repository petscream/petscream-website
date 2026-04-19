type Product = {
  id: string;
  name: string;
  subtitle: string;
  flavor: string;
  image: string;
  price: string;
  weight: string;
  description: string;
  badge?: string;
};

const bannerProduct = {
  title: "Our Signature Treat",
  subtitle: "Small batch. Big joy.",
  image: "/images/petscream-blueberry-banana-hero.png",
  cta: "Shop now",
  href: "/shop",
};

const products: Product[] = [
  {
    id: "blueberry-banana-heart",
    name: "Blueberry Banana Heart",
    subtitle: "Beyond Basics.",
    flavor: "Blueberry & Banana with peanut butter",
    image: "/images/petscream-blueberry-banana-hero.png",
    price: "$10",
    weight: "Approx. 90–120g",
    description:
      "A small-batch frozen treat made with real ingredients and a clean, playful Petscream vibe.",
    badge: "Signature",
  },
  {
    id: "blueberry-banana-mini-pop",
    name: "Blueberry Banana Mini Pop",
    subtitle: "Everyday Joy.",
    flavor: "Blueberry & Banana with peanut butter",
    image: "/images/petscream-mini-pop.png",
    price: "$5",
    weight: "Approx. 45–60g",
    description:
      "A small-batch frozen treat made with real ingredients. Perfect for quick, everyday joy.",
    badge: "Quick Treat",
  },
  {
    id: "big-paw-pop",
    name: "Big Paw Pop",
    subtitle: "Playful Treat.",
    flavor: "Blueberry & Banana with peanut butter",
    image: "/images/petscream-blueberry-banana-hero.png",
    price: "$8",
    weight: "Approx. 70–90g",
    description:
      "A fun-shaped frozen treat with the same clean Petscream base and a playful presentation.",
    badge: "Fun Shape",
  },
  {
    id: "big-heart-pop",
    name: "Big Heart Pop",
    subtitle: "Share the Joy.",
    flavor: "Blueberry & Banana with peanut butter",
    image: "/images/petscream-blueberry-banana-hero.png",
    price: "$10",
    weight: "Approx. 90–120g",
    description:
      "A heart-shaped frozen treat made for gifting, special moments, and happy tails.",
    badge: "Favorite",
  },
  {
    id: "mini-treat-box",
    name: "Mini Treat Box",
    subtitle: "Little Bites.",
    flavor: "Blueberry & Banana with peanut butter",
    image: "/images/petscream-mini-pop.png",
    price: "$8",
    weight: "4-piece pack",
    description:
      "Small frozen bites made with real ingredients, perfect for little rewards and lighter portions.",
    badge: "Pack",
  },
];

export default function PetscreamShopSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#FFF6E9",
        color: "#2B1B12",
        padding: "40px 24px 56px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 32px",
          background: "#FFFFFF",
          borderRadius: "32px",
          overflow: "hidden",
          boxShadow: "0 16px 40px rgba(43,27,18,0.08)",
          border: "1px solid rgba(43,27,18,0.06)",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#FFF6E9",
              color: "#6C63B5",
              borderRadius: "999px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Featured in shop
          </div>

          <h2
            style={{
              fontSize: "42px",
              lineHeight: 1.05,
              margin: "0 0 14px 0",
              fontWeight: 800,
            }}
          >
            {bannerProduct.title}
          </h2>

          <p
            style={{
              fontSize: "24px",
              lineHeight: 1.2,
              margin: "0 0 18px 0",
              color: "#5A493F",
              fontStyle: "italic",
            }}
          >
            {bannerProduct.subtitle}
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              margin: "0 0 24px 0",
              color: "#5A493F",
              maxWidth: "520px",
            }}
          >
            Explore Petscream favorites, quick treats, playful shapes, and bundle-ready picks made with real ingredients.
          </p>

          <a
            href={bannerProduct.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 24px",
              borderRadius: "999px",
              background: "#2FB7B5",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            {bannerProduct.cta}
          </a>
        </div>

        <div
          style={{
            background: "#FFF6E9",
            height: "100%",
          }}
        >
          <img
            src={bannerProduct.image}
            alt={bannerProduct.title}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px 0",
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6C63B5",
              fontWeight: 700,
            }}
          >
            Shop all treats
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "44px",
              lineHeight: 1.05,
              color: "#2B1B12",
            }}
          >
            Frozen treats for happy tails
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(43,27,18,0.08)",
                boxShadow: "0 12px 32px rgba(43,27,18,0.06)",
              }}
            >
              <div
                style={{
                  background: "#FFF6E9",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "18px",
                }}
              >
                {product.badge ? (
                  <div
                    style={{
                      display: "inline-block",
                      background: "#FFF6E9",
                      color: "#6C63B5",
                      borderRadius: "999px",
                      padding: "6px 10px",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {product.badge}
                  </div>
                ) : null}

                <h3
                  style={{
                    margin: "0 0 6px 0",
                    fontSize: "24px",
                    lineHeight: 1.15,
                    color: "#2B1B12",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: "16px",
                    color: "#5A493F",
                    fontStyle: "italic",
                  }}
                >
                  {product.subtitle}
                </p>

                <p
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "15px",
                    color: "#4A382F",
                  }}
                >
                  {product.flavor}
                </p>

                <p
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#5A493F",
                    minHeight: "72px",
                  }}
                >
                  {product.description}
                </p>

                <p
                  style={{
                    margin: "0 0 14px 0",
                    fontSize: "13px",
                    color: "#7A675D",
                  }}
                >
                  Avg. weight: {product.weight}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "28px",
                      color: "#F4A63A",
                    }}
                  >
                    {product.price}
                  </strong>

                  <a
                    href="/shop"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      background: "#2FB7B5",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    Add to box
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
