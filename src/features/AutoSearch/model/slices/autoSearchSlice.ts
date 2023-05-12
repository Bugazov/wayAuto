import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutoSearchSchema } from 'features/AutoSearch/model/types/autoSearchSchema';

const initialState: AutoSearchSchema = {
    isLoading: false,
    error: undefined,
    brand: undefined,
    model: undefined
};

export const autoSearchSlice = createSlice({
    name: 'autoSearch',
    initialState,
    reducers: {
        setBrand: (state, action:PayloadAction<string>) => {
            state.brand = action.payload;
        },
        setModel: (state, action:PayloadAction<string>) => {
            state.model = action.payload;
        }
    }
});

export const { actions: autoSearchActions } = autoSearchSlice;
export const { reducer: autoSearchReducer } = autoSearchSlice;
