import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavbarItems.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import FavoriteIcon from 'shared/assets/icons/favorite.svg';
import LkIcon from 'shared/assets/icons/lk.svg';
import LetterIcon from 'shared/assets/icons/letter.svg';
import PhoneIcon from 'shared/assets/icons/phone.svg';

interface NavbarItemProps {
    className?: string;

}

export const NavbarItems = ({ className }: NavbarItemProps) => {
    return (
        <>
            <div className={classNames(cls.NavbarItem, {}, [className])}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.favorites}
                    className={classNames(cls.item, { })}
                >
                    <FavoriteIcon className={cls.icon} />
                    <span className={cls.link}>
                        Избранное
                    </span>
                </AppLink>
            </div>

            <div className={classNames(cls.item, { })}>
                <LkIcon className={cls.icon} />
                <span className={cls.link}>
                    Личный кабинет
                </span>
            </div>
            <div className={classNames(cls.item, { })}>
                <LetterIcon className={cls.icon} />
            </div>
            <div className={classNames(cls.item, { })}>
                < PhoneIcon className={cls.icon} />
                <span className={cls.phone}>
                    + 7929 000 27 07
                </span>
            </div>

        </>
    );
};
