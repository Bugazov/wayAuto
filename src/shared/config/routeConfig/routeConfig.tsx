import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NewCars } from 'pages/NewCars';

export type AppRoutesProps = RouteProps & {
    authOnly?:boolean
}
export enum AppRoutes {
    MAIN = 'main',
    NEWCARS = 'newcars'

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NEWCARS]: '/new-cars'

};

export const routeConfig:Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.NEWCARS]: {
        path: RoutePath.newcars,
        element: <NewCars/>
    }

};
