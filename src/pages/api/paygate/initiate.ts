import type {NextApiRequest, NextApiResponse} from 'next';
import {randomUUID} from 'node:crypto';
import {paygate, sign, testId, totalFor} from '../../../lib/paygate-test';
export const config = {api: {bodyParser: {sizeLimit: '16kb'}}};
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  res.setHeader('Cache-Control','no-store');
  if(req.method !== 'POST') {res.setHeader('Allow','POST'); return res.status(405).end();}
  const base = process.env.CHECKOUT_BASE_URL;
  if(!base) return res.status(503).json({error:'Test checkout is not configured.'});
  if(req.headers.origin !== new URL(base).origin) return res.status(403).json({error:'Invalid checkout origin.'});
  let amount:number;
  const email = req.body?.email;
  try {
    amount = totalFor(req.body?.items);
    if(typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error();
  } catch {return res.status(400).json({error:'Check your email address and bag items.'});}
  try {
    const reference = 'HR-TEST-' + randomUUID();
    const token = sign({reference, amount, expires:Date.now()+60*60*1000});
    const result = await paygate('initiate', {PAYGATE_ID:testId, REFERENCE:reference, AMOUNT:String(amount), CURRENCY:'ZAR',
      RETURN_URL:`${base}/api/paygate/return?token=${encodeURIComponent(token)}`,
      TRANSACTION_DATE:new Date().toISOString().slice(0,19).replace('T',' '), LOCALE:'en-za', COUNTRY:'ZAF', EMAIL:email});
    if(result.REFERENCE !== reference || !result.PAY_REQUEST_ID) throw new Error();
    return res.status(200).json({requestId:result.PAY_REQUEST_ID, checksum:result.CHECKSUM});
  } catch {return res.status(502).json({error:'Unable to start PayGate test checkout. Please try again.'});}
}
