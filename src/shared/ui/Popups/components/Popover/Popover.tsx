import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
    open:boolean
}

export function Popover (props: PopoverProps) {
    const {
        className, trigger, direction = 'bottom right', children, open
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >

            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            {open && (
                <HPopover.Panel
                    static
                    className={classNames(cls.panel, {}, menuClasses)}
                >
                    {children}
                </HPopover.Panel>

            )}
        </HPopover>
    );
}
