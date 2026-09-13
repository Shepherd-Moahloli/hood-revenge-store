import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "../types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { searchProducts } from "../../lib/api"; // use searchProducts

const SearchPage: React.FC = () => {
  const router = useRouter();
  const rawQuery = router.query?.query;
  const query = Array.isArray(rawQuery) ? rawQuery[0] : (rawQuery ?? "");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let mounted = true;
    if (query) {
      const fetchData = async () => {
        try {
          const results = await searchProducts(String(query));
          if (!mounted) return;
          setProducts(results);
        } catch {
          if (!mounted) return;
          setProducts([]);
        }
      };
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, [query]);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for "{query}"
        </h1>
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p>No products found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
