import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { memo } from 'react';
import { Brands } from 'entities/Brand';
import { AutoSearch } from 'features/AutoSearch';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Brands/>
            <AutoSearch/>

        </div>
    );
});

export default MainPage;
