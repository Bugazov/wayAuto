import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Container.module.scss';
import { ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children:ReactNode
}

export const Container = (props: ContainerProps) => {
    const { className, children } = props;
    return (
        <div className={cls.container}>
            {children}
        </div>
    );
};
