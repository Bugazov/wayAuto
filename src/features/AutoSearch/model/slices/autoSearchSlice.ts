import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutoSearchSchema, Cars } from 'features/AutoSearch/model/types/autoSearchSchema';
import { fetchModelAuto } from '../../model/services/fetchModelAuto/fetchModelAuto';

const initialState: AutoSearchSchema = {
    isLoading: false,
    error: undefined,
    brand: undefined,
    cars: [],
    selectedCar: undefined
};

export const autoSearchSlice = createSlice({
    name: 'autoSearch',
    initialState,
    reducers: {
        setBrand: (state, action:PayloadAction<string>) => {
            state.brand = action.payload;
        },
        setSelectedCar: (state, action:PayloadAction<string>) => {
            state.selectedCar = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchModelAuto.fulfilled, (state, action:PayloadAction<Cars[]>) => {
                state.isLoading = false;
                state.cars = action.payload;
            })
            .addCase(fetchModelAuto.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchModelAuto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: autoSearchActions } = autoSearchSlice;
export const { reducer: autoSearchReducer } = autoSearchSlice;
