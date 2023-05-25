import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MenuButton.module.scss';
import { memo, useCallback, useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon/Icon';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import { MenuList } from '../MenuList/MenuList';
import { Overlay } from '@/shared/ui/Overlay/Overlay';

interface MenuButtonProps {
    className?: string;
}

export const MenuButton = memo((props: MenuButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className={classNames(cls.MenuButton, {}, [className])}>
            <Popover
                open={isOpen}
                direction={'bottom right'}
                trigger={ <Icon onClick={() => setIsOpen(!isOpen)} className={cls.menuIcon} Svg={MenuIcon}/>}>
                <div className={cls.content}>
                    <MenuList onClose={onClose}/>
                </div>

            </Popover>

        </div>
    );
});
