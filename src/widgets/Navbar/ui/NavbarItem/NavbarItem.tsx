import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavbarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { NavBarItemType } from 'widgets/Navbar/model/types/navbar';

interface NavbarItemProps {
    className?: string;
    item:NavBarItemType
}

export const NavbarItem = ({ className, item }: NavbarItemProps) => {
    return (
        <div className={classNames(cls.NavbarItem, {}, [className])}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(cls.item, { })}
            >
                <img src={item.Icon} className={cls.icon} />
                <span className={cls.link}>
                    {item.text}
                </span>
            </AppLink>
        </div>
    );
};
