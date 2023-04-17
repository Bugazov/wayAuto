import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchBrandsData } from '../services/fetchBrandsData';
import { Brand, BrandsSchema } from '../types/brands';

const initialState: BrandsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined

};

export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrandsData.fulfilled, (state, action:PayloadAction<Brand[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchBrandsData.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchBrandsData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { reducer: brandsReducer } = brandsSlice;
