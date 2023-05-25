import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MenuItem.module.scss';
import { memo } from 'react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { MenuItemType } from '../../model/types/menuitem';

interface MenuItemProps {
    className?: string;
    item:MenuItemType,
    grayCls?:boolean
    onClick:()=> void
}

export const MenuItem = memo((props: MenuItemProps) => {
    const { className, item, grayCls, onClick } = props;
    const Mods = {
        [cls.MenuItemGray]: grayCls
    };

    return (
        <AppLink
            to={item.path}>
            <div onClick={onClick} className={classNames(cls.MenuItem, Mods, [className])}>{item.text}</div>
        </AppLink>
    );
});
