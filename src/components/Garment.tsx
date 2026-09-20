import type { Product } from '../lib/catalog';
export default function Garment({product,hero=false}:{product:Product;hero?:boolean}) {
 const hoodie=product.category==='Hoodies', beanie=product.category==='Accessories';
 return <svg viewBox="0 0 400 420" role="img" aria-label={`${product.title} concept illustration`} className={hero?'garment hero-garment':'garment'}>
 <ellipse cx="200" cy="382" rx="112" ry="12" fill="#000" opacity=".12"/>
 {beanie ? <><path d="M99 260V204C99 69 301 69 301 204V260Z" fill={product.color}/><path d="M95 245H305V319Q200 338 95 319Z" fill={product.color} stroke="#ffffff" strokeOpacity=".12" strokeWidth="3"/><path d="M133 143V244M158 122V244M184 113V244M210 113V244M237 122V244M263 143V244" stroke="#fff" strokeOpacity=".09" strokeWidth="4"/><rect x="165" y="269" width="70" height="36" fill={product.ink}/><text x="200" y="293" textAnchor="middle" fontSize="16" fontWeight="900" fill={product.color}>HR®</text></> : <>
 {hoodie && <path d="M144 114Q129 27 200 27Q273 27 257 114L227 142H173Z" fill={product.color} stroke="#000" strokeOpacity=".2" strokeWidth="6"/>}
 <path d="M139 100L96 119L36 238L91 271L124 211L117 360Q200 374 283 360L276 211L309 271L364 238L304 119L261 100Q200 137 139 100Z" fill={product.color} stroke="#000" strokeOpacity=".18" strokeWidth="3"/>
 <path d="M144 103Q200 166 256 103" fill="none" stroke="#000" strokeOpacity=".25" strokeWidth="8"/>
 <path d="M125 343Q200 354 277 343M85 247L48 227M315 247L352 227" stroke="#fff" strokeOpacity=".12" strokeWidth="4" fill="none"/>
 <text x="200" y="205" textAnchor="middle" fill={product.ink} fontFamily="Arial Black,Arial,sans-serif" fontSize="28" fontWeight="900" letterSpacing="-1">HOOD</text>
 <text x="200" y="229" textAnchor="middle" fill={product.ink} fontFamily="Arial Black,Arial,sans-serif" fontSize="23" fontWeight="900" letterSpacing="-1">REVENGE</text>
 <text x="200" y="248" textAnchor="middle" fill={product.ink} fontFamily="monospace" fontSize="7" letterSpacing="2">MAKE YOUR OWN WAY</text>
 {hoodie && <><path d="M151 285L137 323Q200 335 263 323L249 285Z" fill="none" stroke="#fff" strokeOpacity=".12" strokeWidth="2"/><path d="M176 129L171 178M224 129L229 178" stroke={product.ink} strokeWidth="2"/></>}
 </>}
 </svg>;
}
