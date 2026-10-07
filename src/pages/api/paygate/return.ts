import type {NextApiRequest, NextApiResponse} from 'next';
import {verify} from '../../../lib/paygate-test';
export default function handler(req:NextApiRequest,res:NextApiResponse) {
  res.setHeader('Cache-Control','no-store');
  if(req.method !== 'POST' && req.method !== 'GET') {res.setHeader('Allow','GET, POST'); return res.status(405).end();}
  try {
    const token = req.query.token;
    const id = req.method === 'POST' ? req.body?.PAY_REQUEST_ID : req.query.PAY_REQUEST_ID;
    if(typeof token !== 'string' || typeof id !== 'string' || !/^[a-zA-Z0-9-]{20,64}$/.test(id)) throw new Error();
    verify(token);
    res.redirect(303, `/payment-result?token=${encodeURIComponent(token)}&id=${encodeURIComponent(id)}`);
  } catch {res.redirect(303, '/payment-result');}
}
