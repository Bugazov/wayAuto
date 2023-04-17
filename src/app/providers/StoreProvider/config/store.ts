import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { createReducerManager } from './reducerManager';
export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
    navigate?:(to: To, options?: NavigateOptions) => void
) {
    const rootReducers = {
        ...asyncReducers

    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArgs: ThunkExtraArg = {
        api: $api,
        navigate
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        })
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
