import axios from 'axios';
import { Header } from '../../components/Header.jsx'
import { useState, useEffect, Fragment } from 'react';
import './OrdersPage.css'
import { Link } from 'react-router';
import { formatMoney } from '../../utils/money.js';
import dayjs from 'dayjs';
import { OrdersGrid } from './ordersGrid.jsx';

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        };

        getOrdersData();
    }, []);



    return (
        <>
            <Header cart={cart} />
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href='../orders-favicon.png' />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders} />
            </div>
        </>
    );

}