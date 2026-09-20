import Link from 'next/link';
import {money,type Product} from '../lib/catalog';
import Garment from './Garment';
export default function ProductCard({product}:{product:Product}){return <Link className="product-card group" href={`/products/${product.id}`}><div className="product-art"><span className="art-label">CONCEPT / 001</span><Garment product={product}/><span className="product-arrow group-hover:bg-orange-600 group-hover:text-white">↗</span></div><div className="product-meta"><div><p className="eyebrow">{product.category}</p><h3>{product.title}</h3></div><span>{money(product.price)}</span></div></Link>}
