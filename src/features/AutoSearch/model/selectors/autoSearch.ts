import { StateSchema } from '@/app/providers/StoreProvider';

export const getAutoSearchBrand = (state:StateSchema) => state.autoSearch?.brand || '';
export const getAutoSearchBrandCars = (state:StateSchema) => state.autoSearch?.cars;
export const getAutoSearchBrandSelectedCars = (state:StateSchema) => state.autoSearch?.selectedCar || '';
