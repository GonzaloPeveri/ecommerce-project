import { Header } from '../../components/Header.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('api/products')
            setProducts(response.data);
        };

        getHomeData();
    }, []);

    return (
        <>
            <Header cart={cart} />

            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href='home-favicon.png' />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>

    );
}