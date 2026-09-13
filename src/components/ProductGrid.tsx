import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product: Product) => (
        // spread a single any‑cast object so TS won't complain about differing prop names
        <ProductCard
          key={product.id}
          {...({ product, item: product } as any)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
