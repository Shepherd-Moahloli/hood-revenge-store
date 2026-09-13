import type { NextApiRequest, NextApiResponse } from "next";
import { Cart, CartItem } from "../../src/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let cart: Cart = { items: [], total: 0 };

  // typed reduce/filter callbacks
  cart.total = cart.items.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0,
  );
  cart.items = cart.items.filter((item: CartItem) => item.id !== "SOME_ID");

  res.status(200).json(cart);
}
