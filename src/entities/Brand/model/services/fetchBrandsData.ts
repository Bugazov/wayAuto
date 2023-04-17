import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Brand } from 'entities/Brand/model/types/brands';

export const fetchBrandsData = createAsyncThunk<Brand[], string, ThunkConfig<string>>(
    'brands/fetchBrandsData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Brand[]>('/brands');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(`${error}`);
        }
    }
);
