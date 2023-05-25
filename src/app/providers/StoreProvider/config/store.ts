import { StateSchema, ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { createReducerManager } from './reducerManager';
import { brandsReducer } from '@/entities/Brand/model/slices/BrandsSlice';
import { rtkApi } from '@/shared/api/rtkApi';
export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>
) {
    const rootReducers = {
        ...asyncReducers,
        brands: brandsReducer,
        [rtkApi.reducerPath]: rtkApi.reducer

    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArgs: ThunkExtraArg = {
        api: $api
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        }).concat(rtkApi.middleware)
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
