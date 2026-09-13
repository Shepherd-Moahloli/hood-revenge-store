import { useState, useEffect } from "react";
import { Product } from "../types";
import { getProductBySlug } from "../../lib/api";

export default function useProduct(slug?: string) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    getProductBySlug(slug)
      .then((p) => {
        if (mounted) setProduct(p);
      })
      .catch(() => {
        if (mounted) setProduct(null);
      });
    return () => {
      mounted = false;
    };
  }, [slug]);

  return { product };
}
