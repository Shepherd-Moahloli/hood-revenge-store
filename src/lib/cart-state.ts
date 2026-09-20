import {products} from './catalog';
export type CartItem = {id: string; size: string; quantity: number};
const validVariant = (id: string, size: string) => products.some(p => p.id === id && p.sizes.includes(size));
export function restoreCart(saved: unknown): CartItem[] {
  if (!Array.isArray(saved)) return [];
  const result: CartItem[] = [];
  for (const item of saved) {
    if (!item || typeof item !== 'object' || !validVariant(item.id, item.size) || !Number.isInteger(item.quantity) || item.quantity < 1) continue;
    const existing = result.find(x => x.id === item.id && x.size === item.size);
    if (existing) existing.quantity = Math.min(10, existing.quantity + item.quantity);
    else result.push({id: item.id, size: item.size, quantity: Math.min(10, item.quantity)});
  }
  return result;
}
export function addItem(items: CartItem[], id: string, size: string): CartItem[] {
  if (!validVariant(id, size)) return items;
  return items.some(x => x.id === id && x.size === size)
    ? items.map(x => x.id === id && x.size === size ? {...x, quantity: Math.min(10, x.quantity + 1)} : x)
    : [...items, {id, size, quantity: 1}];
}
export function updateItem(items: CartItem[], id: string, size: string, quantity: number): CartItem[] {
  if (!Number.isInteger(quantity)) return items;
  return items.map(x => x.id === id && x.size === size ? {...x, quantity: Math.max(0, Math.min(10, quantity))} : x).filter(x => x.quantity > 0);
}
