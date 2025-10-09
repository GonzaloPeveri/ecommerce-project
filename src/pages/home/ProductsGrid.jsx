import { formatMoney } from '../../utils/money';
import axios from 'axios';
import { useState } from "react";
import { Product } from './Product';

export function ProductsGrid({ products, loadCart }) {

    return (
        <div className="products-grid">
            {products.map((product) => {

                return (
                    <Product key={product.id} product={product} loadCart={loadCart} />
                )
            })}
        </div>
    );
}