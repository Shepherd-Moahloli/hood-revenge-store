import {useRef} from 'react';
import type {Product} from '../lib/catalog';
import Garment from './Garment';

export default function ProductGallery({product}:{product:Product}) {
  const track = useRef<HTMLDivElement>(null);
  function show(index:number) {
    const element = track.current;
    if (!element) return;
    element.scrollTo({left: index * element.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  return <div className="detail-art product-gallery">
    <div ref={track} className="product-gallery-track" role="region" aria-label={`${product.title} front and back views`} tabIndex={0}
      onKeyDown={event => {if(event.key === 'ArrowLeft' || event.key === 'ArrowRight'){event.preventDefault(); show(event.key === 'ArrowRight' ? 1 : 0);}}}>
      {[false, true].map(back => <div className="product-gallery-slide" key={back ? 'back' : 'front'}><Garment product={product} back={back}/></div>)}
    </div>

  </div>;
}
