import {createHash, createHmac, timingSafeEqual} from 'node:crypto';
import {products,productColors} from './catalog';
// Deliberately fixed to PayGate's published sandbox account. No live mode.
export const testId = '10011072130';
const testKey = 'secret';
export function checksum(fields: Record<string,string>) { return createHash('md5').update(Object.values(fields).join('') + testKey).digest('hex'); }
export function totalFor(items: unknown) {
  if (!Array.isArray(items) || !items.length || items.length > 100) throw new Error('Invalid bag');
  const seen = new Set<string>();
  return items.reduce((total, item) => {
    const product = products.find(p => p.id === item?.id);
    if (!product || !product.sizes.includes(item.size) || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 10) throw new Error('Invalid bag');
    const color = item.color ?? 'original';
    if (!productColors(product).some(c=>c.id===color)) throw new Error('Invalid color');
    const key = item.id + ':' + item.size + ':' + color;
    if (seen.has(key)) throw new Error('Duplicate item');
    seen.add(key);
    return total + Math.round(product.price * 100) * item.quantity;
  }, 0);
}
function signingKey() {
  const key = process.env.CHECKOUT_SIGNING_SECRET;
  if (!key || key.length < 32) throw new Error('Checkout configuration missing');
  return key;
}
export function sign(data: Record<string, string | number>) {
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url');
  return payload + '.' + createHmac('sha256', signingKey()).update(payload).digest('hex');
}
export function verify(token: string) {
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !/^[a-f0-9]{64}$/.test(signature)) throw new Error('Invalid checkout');
  const expected = createHmac('sha256', signingKey()).update(payload).digest();
  if (!timingSafeEqual(expected, Buffer.from(signature, 'hex'))) throw new Error('Invalid checkout');
  const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
  if (!data.expires || data.expires < Date.now()) throw new Error('Checkout expired');
  return data;
}
export async function paygate(endpoint: 'initiate' | 'query', fields: Record<string,string>) {
  const response = await fetch(`https://secure.paygate.co.za/payweb3/${endpoint}.trans`, {
    method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({...fields, CHECKSUM: checksum(fields)}), signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error('PayGate unavailable');
  const result = Object.fromEntries(new URLSearchParams(await response.text()));
  const {CHECKSUM, ...values} = result;
  if (!CHECKSUM || checksum(values) !== CHECKSUM.toLowerCase() || result.PAYGATE_ID !== testId) throw new Error('PayGate response could not be verified');
  return result;
}
