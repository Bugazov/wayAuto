import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Brand } from 'entities/Brand/model/types/brands';
import { Cars } from '../../types/autoSearchSchema';

export const fetchModelAuto = createAsyncThunk<Cars[], string, ThunkConfig<string>>(
    'autoSearch/fetchModelAuto',
    async (idBrand, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Cars[]>(`/brand/${idBrand}/cars`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(`${error}`);
        }
    }
);
