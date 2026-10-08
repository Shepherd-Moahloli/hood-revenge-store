import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import SignupPopup from '../components/SignupPopup';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {CartProvider} from '../lib/cart';
import '../styles/globals.css';
export default function App({Component,pageProps}:AppProps){
const router = useRouter();
const [showWelcome, setShowWelcome] = useState(() => router.pathname === '/');
useEffect(() => {
  const leave = () => setShowWelcome(false);
  router.events.on('routeChangeStart', leave);
  return () => router.events.off('routeChangeStart', leave);
}, [router.events]);
return <CartProvider><Head><title>HOOD REVENGE — Make your own way</title><meta name="description" content="Explore the HOOD REVENGE streetwear concept collection. Storefront preview; orders are not yet available."/><meta name="viewport" content="width=device-width, initial-scale=1"/></Head><a className="skip-link" href="#main">Skip to content</a><Header/><Component {...pageProps}/><Footer/>{showWelcome && <SignupPopup/>}</CartProvider>}
