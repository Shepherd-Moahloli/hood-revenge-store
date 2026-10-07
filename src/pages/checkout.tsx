import Link from 'next/link';
import {useRef, useState} from 'react';
import {useCart} from '../lib/cart';
import {products, money} from '../lib/catalog';
export default function Checkout() {
  const {items,ready} = useCart();
  const [busy,setBusy] = useState(false), [error,setError] = useState('');
  const lock = useRef(false);
  const total = items.reduce((sum,item)=>sum+(products.find(p=>p.id===item.id)?.price || 0)*item.quantity,0);
  return <main id="main" className="section checkout"><p className="eyebrow">PayGate · test mode only</p><h1 className="page-title">Test checkout</h1>
    <p>Sample products. No real payment or order will be created. Use only PayGate test card details.</p>
    {!ready ? <p>Loading bag…</p> : !items.length ? <Link href="/products">Your bag is empty. Shop sample products →</Link> : <>
    <p>Test total: <strong>{money(total)}</strong> ZAR</p><p>Shipping and taxes are not included in this test.</p>
    <form className="test-checkout-form" onSubmit={async event=>{
      event.preventDefault(); if(lock.current) return; lock.current=true; setBusy(true); setError('');
      const email = String(new FormData(event.currentTarget).get('email') || '');
      try {
        const response = await fetch('/api/paygate/initiate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,items})});
        const data = await response.json(); if(!response.ok) throw new Error(data.error || 'Checkout unavailable.');
        const form = document.createElement('form'); form.method='POST'; form.action='https://secure.paygate.co.za/payweb3/process.trans';
        for(const [name,value] of Object.entries({PAY_REQUEST_ID:data.requestId,CHECKSUM:data.checksum})) {
          const input=document.createElement('input'); input.type='hidden'; input.name=name; input.value=String(value); form.appendChild(input);
        }
        document.body.appendChild(form); form.submit();
      } catch(error) {setError(error instanceof Error ? error.message : 'Please try again.'); setBusy(false); lock.current=false;}
    }}><label htmlFor="checkout-email">Email for PayGate test confirmation</label><input id="checkout-email" name="email" type="email" required maxLength={254} autoComplete="email"/>
      <button className="button button-outline" disabled={busy} type="submit">{busy?'Opening PayGate…':'Continue to PayGate test payment →'}</button></form>
      <p role="alert">{error}</p><p>Test Visa: 4000 0000 0000 0002. Use a future expiry date and any test CVV.</p>
    </>}<Link className="text-link" href="/cart">Back to bag</Link></main>;
}
