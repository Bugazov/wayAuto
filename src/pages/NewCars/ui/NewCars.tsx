import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NewCars.module.scss';

import { memo } from 'react';
import { NewCarsList } from 'features/NewCarsList';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Container } from 'shared/ui/Container/Container';
import Text, { TextTheme } from 'shared/ui/Text/Text';

interface NewCarsProps {
    className?: string;
}

const NewCars = memo((props: NewCarsProps) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.NewCars, {}, [className])}>
            <Container>
                <HStack gap={'8'}>
                    <AppLink to={'/'}>{'Главная >'}</AppLink>
                    <Text theme={TextTheme.INVERTED} text={'Новые автомобили'}/>
                </HStack>
                <NewCarsList/>
            </Container>
        </Page>
    );
});

export default NewCars;
