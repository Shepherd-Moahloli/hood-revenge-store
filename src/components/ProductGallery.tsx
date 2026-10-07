import {useRef, useState} from 'react';
import type {Product} from '../lib/catalog';
import Garment from './Garment';

export default function ProductGallery({product}:{product:Product}) {
  const track = useRef<HTMLDivElement>(null);
  const [active,setActive] = useState(0);
  const photos = product.photos || [];
  const count = photos.length || 2;
  function show(index:number) {
    const element = track.current;
    if (!element) return;
    element.scrollTo({left: Math.max(0,Math.min(count-1,index)) * element.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  return <div className="product-gallery">
    <div className="detail-art">
      <div ref={track} className="product-gallery-track" role="region" aria-label={`${product.title} image gallery`} tabIndex={0}
        onScroll={event=>{const el=event.currentTarget;if(el.clientWidth) setActive(Math.round(el.scrollLeft/el.clientWidth));}}
        onKeyDown={event => {if(event.key === 'ArrowLeft' || event.key === 'ArrowRight'){event.preventDefault(); show(active+(event.key === 'ArrowRight' ? 1 : -1));}}}>
        {Array.from({length:count},(_,index)=><div className="product-gallery-slide" key={photos[index]?.src || index}>
          {photos[index] ? <img className="product-model-photo" src={photos[index].src} alt={photos[index].alt} width={900} height={1200} loading={index===0?'eager':'lazy'}/> : <Garment product={product} back={index===1}/>}
        </div>)}
      </div>
    </div>
    <div className="product-thumbnails" role="group" aria-label="Choose product angle">
      {Array.from({length:count},(_,index)=><button type="button" key={photos[index]?.src || index} aria-label={photos[index] ? `Show ${photos[index].alt}` : `Show ${index===0?'front':'back'} illustration`} aria-pressed={index===active} onClick={()=>show(index)}>
        {photos[index] ? <img src={photos[index].src} alt="" width={90} height={120} loading="lazy"/> : <Garment product={product} back={index===1}/>}
      </button>)}
    </div>
  </div>;
}
