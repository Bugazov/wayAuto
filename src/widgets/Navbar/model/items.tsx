import { NavBarItemType } from '@/widgets/Navbar/model/types/navbar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import SellCarsIcon from '@/shared/assets/icons/sellCarsIcon.svg';
export const navBarItemsList:NavBarItemType[] = [
    {
        Icon: SellCarsIcon,
        text: 'Продать авто',
        path: RoutePath.createAd
    },
    {
        Icon: SellCarsIcon,
        text: 'Избранное',
        path: RoutePath.favorites
    }

];
