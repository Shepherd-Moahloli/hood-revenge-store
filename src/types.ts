import type { NextPage } from 'next';

export type Product = {
  id: string;
  sku?: string;
  name?: string;
  title?: string;
  slug?: string;
  images?: string[];
  image?: string;
  description?: string;
  shortDescription?: string;
  price?: number;
  amount?: number;
  currency?: string;
  [key: string]: unknown;
};

export type CartItem = {
  id: string;
  title?: string;
  name?: string;
  price: number;
  quantity: number;
  image?: string;
  [key: string]: unknown;
};

const Home: NextPage = () => {
  return (
    <div style={{ padding: 40 }}>
      <h1>Next dev serving /</h1>
    </div>
  );
};

export default Home;
