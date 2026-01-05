import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import HowToOrder from '../components/HowToOrder';

const HomePage = () => {
    return (
        <>
            <Hero />
            <ProductList />
            <HowToOrder />
        </>
    );
};

export default HomePage;
