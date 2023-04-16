import { lazy } from 'react';

export const CreateAdAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./CreateAd'));
}));
