import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CreateAd.module.scss';

import { memo } from 'react';

interface CreateAdProps {
    className?: string;
}

const CreateAd = memo((props: CreateAdProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.CreateAd, {}, [className])}>

        </div>
    );
});
export default CreateAd;
