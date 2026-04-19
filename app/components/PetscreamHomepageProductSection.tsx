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
  id: "blueberry-banana-heart",
  name: "Blueberry Banana Heart",
  subtitle: "Beyond Basics.",
  flavor: "Blueberry & Banana with peanut butter",
  image: "/images/petscream-blueberry-banana-hero.png",
  price: "From $10",
  description:
    "A small-batch frozen treat made with real ingredients and a clean, playful Petscream vibe.",
  badge: "Featured Flavor",
};

export default function PetscreamHomepageProductSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#FFF6E9",
        color: "#2B1B12",
        padding: "48px 24px 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              display: "inline-block",
              background: "#ffffff",
              border: "1px solid rgba(43,27,18,0.08)",
              borderRadius: "999px",
              padding: "8px 14px",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "18px",
              boxShadow: "0 6px 18px rgba(43,27,18,0.06)",
            }}
          >
            {featuredProduct.badge}
          </div>

          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6C63B5",
              fontWeight: 700,
              marginBottom: "14px",
            }}
          >
            Frozen Treats
          </div>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.05,
              margin: "0 0 14px 0",
              fontWeight: 800,
            }}
          >
            {featuredProduct.name}
          </h1>

          <p
            style={{
              fontSize: "28px",
              lineHeight: 1.2,
              margin: "0 0 22px 0",
              color: "#5A493F",
              fontStyle: "italic",
            }}
          >
            {featuredProduct.subtitle}
          </p>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.4,
              margin: "0 0 14px 0",
              color: "#4A382F",
            }}
          >
            {featuredProduct.flavor}
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              margin: "0 0 26px 0",
              color: "#5A493F",
              maxWidth: "620px",
            }}
          >
            {featuredProduct.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <a
              href="/shop"
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
              Shop now
            </a>

            <a
              href="/build-your-box"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 24px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#2B1B12",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                border: "1px solid rgba(43,27,18,0.12)",
              }}
            >
              Build your box
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                background: "#ffffff",
                borderRadius: "999px",
                padding: "10px 14px",
                fontSize: "14px",
                border: "1px solid rgba(43,27,18,0.08)",
                boxShadow: "0 6px 18px rgba(43,27,18,0.05)",
              }}
            >
              Made with real ingredients
            </span>

            <span
              style={{
                background: "#ffffff",
                borderRadius: "999px",
                padding: "10px 14px",
                fontSize: "14px",
                border: "1px solid rgba(43,27,18,0.08)",
                boxShadow: "0 6px 18px rgba(43,27,18,0.05)",
              }}
            >
              Not ice cream. Petscream.
            </span>
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#F4A63A",
            }}
          >
            {featuredProduct.price}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              overflow: "hidden",
              borderRadius: "32px",
              background: "#ffffff",
              boxShadow: "0 20px 60px rgba(43,27,18,0.10)",
              border: "1px solid rgba(43,27,18,0.06)",
            }}
          >
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
