import React from 'react';

const ProductGallery: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentImage, setCurrentImage] = React.useState(images[0]);

    const handleImageClick = (image: string) => {
        setCurrentImage(image);
    };

    return (
        <div className="product-gallery">
            <div className="main-image">
                <img src={currentImage} alt="Product" />
            </div>
            <div className="thumbnail-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                        className={currentImage === image ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;