import React from 'react';
import { useDispatch } from 'react-redux';
import { updateProductStatus } from '../store/orderSlice';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleStatusUpdate = (status) => {
        dispatch(updateProductStatus({ productId: product.id, status }));
    };

    return (
        <div>
            <p>{product.name}</p>
            <p>Status: {product.status}</p>
            <button onClick={() => handleStatusUpdate('Approved')}>Approve</button>
            <button onClick={() => handleStatusUpdate('Missing')}>Mark Missing</button>
        </div>
    );
}

export default ProductItem;
