import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { BrandsSchema } from 'entities/Brand';
import { AutoSearchSchema } from 'features/AutoSearch/model/types/autoSearchSchema';

export interface StateSchema {
    brands?:BrandsSchema
    autoSearch?:AutoSearchSchema

}

export type StateSchemaKey = keyof StateSchema
export interface ReducerManager {
    getReducerMap:()=> ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>,
    add:(key:StateSchemaKey, reducer:Reducer)=>void,
    remove:(key:StateSchemaKey)=> void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance,
    navigate?:(to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T>{
    rejectValue: T,
    extra:ThunkExtraArg,
    state:StateSchema

}
