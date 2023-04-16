import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { memo } from 'react';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>

        </div>
    );
});

export default MainPage;
