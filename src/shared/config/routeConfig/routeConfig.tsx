import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CreateAd } from 'pages/CreateAd';
import FavoritesPage from 'pages/FavoritesPage/ui/FavoritesPage';

export type AppRoutesProps = RouteProps & {
    authOnly?:boolean
}
export enum AppRoutes {
    MAIN = 'main',
    FAVORITES = 'favorites',
    CREATEAD = 'createAd'

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.CREATEAD]: '/create-ad'

};

export const routeConfig:Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.CREATEAD]: {
        path: RoutePath.createAd,
        element: <CreateAd/>
    },
    [AppRoutes.FAVORITES]: {
        path: RoutePath.favorites,
        element: <FavoritesPage/>
    }
};
