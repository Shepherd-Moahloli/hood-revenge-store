import type {GetServerSideProps} from 'next';
import Link from 'next/link';
import {paygate, testId, verify} from '../lib/paygate-test';
export default function PaymentResult({message}:{message:string}) {
  return <main id="main" className="section checkout"><p className="eyebrow">PayGate test checkout</p><h1 className="page-title">Test result</h1><p role="status">{message}</p><p>No real order has been placed. Your bag is kept so you can test again.</p><Link className="button button-outline" href="/cart">Back to bag</Link></main>;
}
export const getServerSideProps:GetServerSideProps = async ({query,res}) => {
  res.setHeader('Cache-Control','no-store');
  res.setHeader('Referrer-Policy','no-referrer');
  let message = 'The payment result could not be verified. Return to your bag to try again.';
  try {
    if(typeof query.token !== 'string' || typeof query.id !== 'string' || !/^[a-zA-Z0-9-]{20,64}$/.test(query.id)) throw new Error();
    const data = verify(query.token);
    const result = await paygate('query', {PAYGATE_ID:testId, PAY_REQUEST_ID:query.id, REFERENCE:data.reference});
    if(result.REFERENCE !== data.reference || result.PAY_REQUEST_ID !== query.id || Number(result.AMOUNT) !== data.amount || result.CURRENCY !== 'ZAR') throw new Error();
    message = result.TRANSACTION_STATUS === '1' ? 'Test payment approved.' : result.TRANSACTION_STATUS === '2' ? 'Test payment declined. You can try again.' : result.TRANSACTION_STATUS === '3' ? 'Test payment cancelled.' : 'Test payment is pending or has not been completed.';
  } catch {}
  return {props:{message}};
};
