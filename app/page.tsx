import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/petscreamnyc/";
const EMAIL = "mailto:info@petscream.com";
const PHONE = "tel:7189732552";

export default function Home() {
  return (
    <main className="container">
      <section className="card hero">
        <div>
          <div className="pill">NYC dog park energy • small batch • made with care</div>

          <h1 className="h1">Not essential. Intentional.</h1>
          <p className="sub"><b>Beyond basics.</b></p>

          <p className="sub" style={{ marginTop: 10 }}>
            Our signature blend is goat milk + yogurt + peanut butter + fruit.
            Simple ingredients, thoughtfully picked, and made for happy tails and purrs.
          </p>

          <div className="btnRow">
            <a className="btnPrimary" href={INSTAGRAM} target="_blank" rel="noreferrer">
              Bring the joy
            </a>

            <a className="btnGhost" href={INSTAGRAM} target="_blank" rel="noreferrer">
              Share the joy with your pet 🐾
            </a>

            <a className="btnGhost" href={EMAIL}>Email us</a>
            <a className="btnGhost" href={PHONE}>Call 718-973-2552</a>
          </div>

          <p className="sub" style={{ marginTop: 14 }}>
            Got thoughts, photos, or a “my pet went crazy for this” moment? DM us on Instagram.
          </p>
        </div>

        <div style={{ display: "grid", placeItems: "center", padding: 10 }}>
          <Image
            src="/petscream-logo.jpg"
            alt="Petscream logo"
            width={520}
            height={520}
            priority
            style={{ maxWidth: "100%", height: "auto", borderRadius: 22, boxShadow: "var(--shadow)" }}
          />
        </div>
      </section>
    </main>
  );
}
