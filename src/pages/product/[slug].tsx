import React from "react";
import { GetServerSideProps } from "next";
import { Product } from "../../types";
import { getProductBySlug } from "../../../lib/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGallery from "../../components/ProductGallery";

type Props = { product: Product | null };

export default function ProductPage({ product }: Props) {
  // rely on server-side fetched product; if your Product type is missing fields, cast to any for rendering
  if (!product) {
    return (
      <div>
        <Header />
        <main>Product not found</main>
        <Footer />
      </div>
    );
  }

  const p = product as any;

  return (
    <div>
      <Header />
      <main>
        {Array.isArray(p.images) && p.images.length > 0 && (
          <div className="product-gallery">
            {p.images.map((src: string, i: number) => (
              <img key={i} src={src} alt={p.name ?? p.title ?? "product"} />
            ))}
          </div>
        )}

        <h1>{p.name ?? p.title}</h1>
        <p>{p.description ?? p.shortDescription ?? ""}</p>
        <span>${p.price ?? p.amount ?? "0"}</span>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const raw = context.params?.slug;
  const slug = Array.isArray(raw) ? raw[0] : (raw ?? "");

  try {
    const product = await getProductBySlug(String(slug));
    return { props: { product } };
  } catch {
    return { props: { product: null } };
  }
};
