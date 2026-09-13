import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">© {new Date().getFullYear()} HOOD REVENGE. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="/terms" className="hover:underline">Terms of Service</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/contact" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;