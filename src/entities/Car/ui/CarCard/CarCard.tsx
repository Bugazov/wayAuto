import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CarCard.module.scss';

interface CarCardProps {
    className?: string;
}

export const CarCard = (props:CarCardProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CarCard, {}, [className])}>

        </div>
    );
};
