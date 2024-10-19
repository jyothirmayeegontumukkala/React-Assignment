import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { Container } from '@mui/material';

const App: React.FC = () => {
    return (
        <Container>
            <Header />
            <ProductList />
        </Container>
    );
};

export default App;
