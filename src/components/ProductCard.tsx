import React from 'react';

interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl, onAddToCart }) => {
    return (
        <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-black">{title}</h2>
                <p className="text-xl font-bold text-black">${price.toFixed(2)}</p>
                <button 
                    onClick={onAddToCart} 
                    className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;