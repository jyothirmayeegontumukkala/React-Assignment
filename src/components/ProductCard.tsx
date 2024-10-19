import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface ProductCardProps {
    title: string;
    image: string;
    price: number;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, onAddToCart }) => {
    return (
        <Card>
            <CardMedia component="img" height="500" image={image} alt={title} />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">${price}</Typography>
                {/* <Button variant="contained" onClick={onAddToCart}>Add to Cart</Button> */}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
