import { classNames } from '@/shared/lib/classNames/classNames';
import {
    memo, ReactNode
} from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;
    return (
        <main
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
        </main>
    );
});
