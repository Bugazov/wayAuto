import React, { memo, Suspense, useCallback } from 'react';
import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
        const element = (
            <Suspense fallback={<div>....</div>}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
