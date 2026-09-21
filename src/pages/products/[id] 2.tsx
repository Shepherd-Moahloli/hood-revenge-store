import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProductById } from '../../lib/api';
import ProductCard from '../../components/ProductCard';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const getProduct = async () => {
                try {
                    const data = await fetchProductById(id);
                    setProduct(data);
                } catch (err) {
                    setError('Failed to load product');
                } finally {
                    setLoading(false);
                }
            };
            getProduct();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {product ? (
                <ProductCard product={product} />
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default ProductPage;