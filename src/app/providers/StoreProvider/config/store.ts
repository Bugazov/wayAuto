import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>
) {
    const reducers = {

    };

    const store = configureStore({
        reducer: reducers
    });
    return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
