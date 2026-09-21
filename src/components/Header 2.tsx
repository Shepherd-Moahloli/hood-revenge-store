import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Hood Revenge Store</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;