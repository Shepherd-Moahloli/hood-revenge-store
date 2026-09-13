import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">HOOD REVENGE</Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link href="/account">Account</Link>
                    </li>
                    <li>
                        <Link href="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;