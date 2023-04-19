import { EntityState } from '@reduxjs/toolkit';

export interface Brand{
    _id:string,
    name:string,
    logo:string,
}

export interface BrandsSchema extends EntityState<Brand> {
    isLoading: boolean,
    data?: Brand[],
    error?: string
}
