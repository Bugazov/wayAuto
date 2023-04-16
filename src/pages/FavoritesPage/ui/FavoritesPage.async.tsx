import { lazy } from 'react';

export const FavoritesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./FavoritesPage'));
}));
