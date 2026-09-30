import Link from 'next/link';
import {useState} from 'react';
import {money,type Product} from '../lib/catalog';
import Garment from './Garment';

export default function ProductCard({product}:{product:Product}) {
  const [back, setBack] = useState(false);
  return <article className="product-card group" onPointerEnter={event => {if(event.pointerType === 'mouse') setBack(true);}} onPointerLeave={event => {if(event.pointerType === 'mouse') setBack(false);}}>
    <div className="product-art">
      <Link href={`/products/${product.id}`} className="product-image-link" aria-label={`View ${product.title}`}>
        <span className="art-label">CONCEPT / {back ? 'BACK' : 'FRONT'}</span>
        <Garment product={product} back={back}/>
        <span className="product-arrow" aria-hidden="true">↗</span>
      </Link>
      <button type="button" className="product-view-toggle" aria-label={`Show ${back ? 'front' : 'back'} of ${product.title}`} aria-pressed={back} onClick={() => setBack(value => !value)}>{back ? 'View front' : 'View back'}</button>
    </div>
    <Link href={`/products/${product.id}`} className="product-meta"><div><p className="eyebrow">{product.category}</p><h3>{product.title}</h3></div><span>{money(product.price)}</span></Link>
  </article>;
}
