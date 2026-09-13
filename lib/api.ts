import { Product } from "../src/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/api/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return (await res.json()) as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const res = await fetch(
    `${API_BASE}/api/products/${encodeURIComponent(slug)}`,
  );
  if (!res.ok) throw new Error("Product not found");
  return (await res.json()) as Product;
}

export async function searchProducts(q: string): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(q)}`);
  if (!res.ok) return [];
  return (await res.json()) as Product[];
}
