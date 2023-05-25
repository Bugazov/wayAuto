import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { memo } from 'react';
import { Brands } from '@/entities/Brand';
import { AutoSearch } from '@/features/AutoSearch';
import { CarCard } from '@/entities/Car/ui/CarCard/CarCard';
import { Container } from '@/shared/ui/Container/Container';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <Container className={classNames(cls.MainPage, {}, [className])}>
            <Brands/>
            <AutoSearch/>
        </Container>
    );
});

export default MainPage;
