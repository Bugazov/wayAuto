import { StateSchema } from '@/app/providers/StoreProvider';

export const getBrandsIsloading = (state:StateSchema) => state.brands?.isLoading;
