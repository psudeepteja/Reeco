import { createSlice } from '@reduxjs/toolkit';
import mockData from '../data/mockData';

const orderSlice = createSlice({
    name: 'order',
    initialState: mockData.order,
    reducers: {
        updateProductStatus: (state, action) => {
            const { productId, status } = action.payload;
            const product = state.products.find((p) => p.id === productId);
            if (product) {
                product.status = status;
            }
        },
    },
});

export const { updateProductStatus } = orderSlice.actions;

export default orderSlice.reducer;
