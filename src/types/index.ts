export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  address?: string;
};

export type CheckoutDetails = {
  user: User;
  cart: Cart;
  paymentMethod: string;
};