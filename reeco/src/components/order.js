import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './productItem';

function Order() {
    const order = useSelector((state) => state.order);

    return (
        <div>
            <h2>Order Number: {order.orderNumber}</h2>
            <p>Order Date: {order.orderDate}</p>
            <div>
                {order.products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Order;
