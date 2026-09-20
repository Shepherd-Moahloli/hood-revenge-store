import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {useCart} from '../lib/cart';

export default function Header() {
  const {items} = useCart();
  const {asPath} = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setMenuOpen(false); }, [asPath]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (media.matches) setMenuOpen(false); };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);
  return <>
    <div className="announcement">INDEPENDENT SPIRIT. EVERYDAY UNIFORM. <span>STOREFRONT PREVIEW — SAMPLE PRODUCTS</span></div>
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <Link href="/" className="wordmark" aria-label="Hood Revenge home">HOOD<br/>REVENGE<span>®</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/products">Shop all</Link>
        <Link href="/products?category=Hoodies">Hoodies</Link>
        <Link href="/products?category=Tees">Tees</Link>
      </nav>
      <div className="header-actions">
        <Link href="/cart" className="bag">Bag <span>{items.reduce((n,x) => n+x.quantity,0)}</span></Link>
        <button ref={menuButton} className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="m6 6 12 12M6 18 18 6"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen} onClick={() => setMenuOpen(false)}>
        <Link href="/">Home</Link>
        <Link href="/products">Shop all</Link>
        <Link href="/products?category=Hoodies">Hoodies</Link>
        <Link href="/products?category=Tees">Tees</Link>
        <Link href="/products?category=Accessories">Accessories</Link>
        <Link href="/cart">Your bag</Link>
      </nav>
    </header>
  </>;
}
