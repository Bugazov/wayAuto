import { StateSchema } from 'app/providers/StoreProvider';

export const getAutoSearchBrand = (state:StateSchema) => state.autoSearch?.brand;
export const getAutoSearchModel = (state:StateSchema) => state.autoSearch?.model;
