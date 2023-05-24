import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NewCarsList.module.scss';

import { memo } from 'react';
import { useNewCarsList } from '../../api/newCarsListApi';
import { CarsList } from 'entities/Car';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { Container } from 'shared/ui/Container/Container';

interface NewCarsListProps {
    className?: string;
}

export const NewCarsList = memo((props: NewCarsListProps) => {
    const { className } = props;
    const { data, isLoading } = useNewCarsList(null);
    console.log(data);

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    if (!data) {
        return <Text title={'В наличии нет'}/>;
    }

    return (

        <Container className={classNames(cls.NewCarsList, {}, [className])}>
            <CarsList cars={data}/>
        </Container>

    );
});
