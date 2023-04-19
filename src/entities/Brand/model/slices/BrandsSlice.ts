import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchBrandsData } from '../services/fetchBrandsData';
import { Brand, BrandsSchema } from '../types/brands';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

const initialState: BrandsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}

};
const brandsAdapter = createEntityAdapter<Brand>({
    selectId: (brand) => brand._id
});

export const getBrands = brandsAdapter.getSelectors<StateSchema>(
    (state) => state.brands || brandsAdapter.getInitialState()
);

export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrandsData.fulfilled, (state, action:PayloadAction<Brand[]>) => {
                state.isLoading = false;
                brandsAdapter.setAll(state, action.payload);
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
