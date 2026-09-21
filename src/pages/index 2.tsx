import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Hood Revenge Store</h1>
                <p>Your one-stop shop for all things revenge!</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;