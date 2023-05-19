import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NewCars.module.scss';

import { memo } from 'react';

interface NewCarsProps {
    className?: string;
}

const NewCars = memo((props: NewCarsProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NewCars, {}, [className])}>

        </div>
    );
});

export default NewCars;
