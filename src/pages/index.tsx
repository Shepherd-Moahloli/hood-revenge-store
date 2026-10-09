import Link from "next/link";
import { products } from "../lib/catalog";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
export default function Home() {
  return (
    <main id="main">
      <h1 className="sr-only">HOOD REVENGE streetwear collection</h1>
      <section className="hero">
        <div className="hero-art hero-photo">
          <Image
            src="/images/Felix Brady - Dolly.gif"
            alt="Looping cinematic scene from Quentin Tarantino’s 1990s films"
            width={540}
            height={340}
            unoptimized
            sizes="100vw"
            preload
            className="hero-model-image"
          />
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" key={group}>
              {[0, 1].map((repeat) => (
                <div className="ticker-phrase" key={repeat}>
                  <span>NO PERMISSION NEEDED.</span>
                  <span className="ticker-symbol">✳</span>
                  <span>MAKE YOUR OWN WAY.</span>
                  <span className="ticker-symbol">✳</span>
                  <span>HOOD REVENGE.</span>
                  <span className="ticker-symbol">✳</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE FIRST CHAPTER</p>
            <h2>THE ROTATION.</h2>
          </div>
          <Link href="/products" className="text-link">
            Shop all pieces ↗
          </Link>
        </div>
        <div className="product-grid grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
