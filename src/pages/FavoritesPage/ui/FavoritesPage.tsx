import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FavoritesPage.module.scss';

import { memo } from 'react';

interface FavoritesPageProps {
    className?: string;
}

const FavoritesPage = memo((props: FavoritesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.FavoritesPage, {}, [className])}>

        </div>
    );
});

export default FavoritesPage;
