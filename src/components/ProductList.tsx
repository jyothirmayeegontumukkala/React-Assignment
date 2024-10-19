import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Grid, CircularProgress, Typography } from '@mui/material';
import SearchBar from './SearchBar';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {filteredProducts.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            onAddToCart={() => console.log(`${product.title} added to cart`)}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
