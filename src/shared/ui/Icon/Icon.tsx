import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    onClick?:()=> void
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, onClick } = props;

    return (
        <Svg onClick={onClick} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
});
