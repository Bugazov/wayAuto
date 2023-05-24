import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CarsList.module.scss';

import { memo } from 'react';
import { Car } from '../../model/types/car';
import { CarCard } from 'entities/Car/ui/CarCard/CarCard';
import { HStack } from 'shared/ui/Stack';

interface CarsListProps {
    className?: string;
    cars:Car[]
}

export const CarsList = memo((props: CarsListProps) => {
    const { className, cars } = props;

    if (!cars) {
        return (
            <div>....</div>
        );
    }

    return (
        <HStack gap={'32'} className={classNames(cls.CarsList, {}, [className])}>
            {cars.map((item) => {
                return (
                    <CarCard item={item}/>
                );
            })}

        </HStack>
    );
});
