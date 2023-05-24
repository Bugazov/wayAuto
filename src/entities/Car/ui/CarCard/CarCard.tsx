import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CarCard.module.scss';
import { Car } from '../../model/types/car';
import Text, { TextSize, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card/Card';
import watchIcon from 'shared/assets/icons/watch.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useCallback, useMemo } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface CarCardProps {
    className?: string;
    item:Car
}

export const CarCard = (props:CarCardProps) => {
    const {
        className,
        item
    } = props;
    return (
        <Card className={classNames(cls.CarCard, {}, [className])}>
            <VStack gap={'8'}>
                <div className={cls.photo}><img src={`${__API__}/images/models/${item?.photo}`} alt=""/></div>
                <Text theme={TextTheme.INVERTED} size={TextSize.S} title={`${item?.brand.name} ${item?.name}`}/>
                <HStack align={'start'} gap={'4'}>
                    <Icon className={cls.iconWatch} Svg={watchIcon}/>
                    <Text theme={TextTheme.GRAY} size={TextSize.XS} text={`Год выпуска: ${item.year}`}/>
                </HStack>
                <HStack gap={'8'}>
                    <Text theme={TextTheme.GRAY} size={TextSize.XS} text={'Кузов:'}/>
                    <Text theme={TextTheme.PRIMARY} size={TextSize.XS} text={item.body}/>
                </HStack>
                <HStack align={'end'} gap={'4'}>
                    <Text theme={TextTheme.GRAY} size={TextSize.XS} text={'От'}/>
                    <HStack align={'end'} gap={'4'}>
                        <Text theme={TextTheme.INVERTED} size={TextSize.M} title={item.price}/>
                        <Text theme={TextTheme.GRAY} size={TextSize.XS} text={'р.'}/>
                    </HStack>
                </HStack>
                <Button className={cls.btn}>
                    Подробнее
                </Button>
            </VStack>
        </Card>
    )
}
