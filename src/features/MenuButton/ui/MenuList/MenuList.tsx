import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MenuList.module.scss';
import { memo } from 'react';
import { MenuItemsList } from '../../model/MenuItemsList/menuItemList';
import { MenuItem } from '@/features/MenuButton/ui/MenuItem/MenuItem';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
interface MenuListProps {
    className?: string;
    onClose:()=> void
}

export const MenuList = memo((props: MenuListProps) => {
    const { className, onClose } = props;

    return (
        <div className={classNames(cls.MenuList, {}, [className])}>
            <Overlay onClick={onClose}/>
            <div className={cls.content}>
                {MenuItemsList.map((item, index) => {
                    if (index < 3) {
                        return <MenuItem onClick={onClose} grayCls={true} item={item}/>;
                    } else {
                        return (
                            <MenuItem onClick={onClose} item={item}/>
                        );
                    }
                })}
            </div>

        </div>
    );
});
