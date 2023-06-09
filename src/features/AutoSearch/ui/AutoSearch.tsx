import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AutoSearch.module.scss';

import { memo, useCallback, useEffect, useMemo } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { ListBox, ListBoxItem } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getAutoSearchBrand,
    getAutoSearchBrandCars,
    getAutoSearchBrandSelectedCars
} from '../model/selectors/autoSearch';
import { autoSearchActions, autoSearchReducer } from '../model/slices/autoSearchSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import Text, { TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';

import { fetchModelAuto } from '../model/services/fetchModelAuto/fetchModelAuto';
import { getBrands } from '@/entities/Brand/model/slices/BrandsSlice';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface AutoSearchProps {
    className?: string;
}

const reducers:ReducersList = {
    autoSearch: autoSearchReducer

};

export const AutoSearch = memo((props: AutoSearchProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const brands = useSelector(getBrands.selectAll);
    const brand = useSelector(getAutoSearchBrand);
    const cars = useSelector(getAutoSearchBrandCars);
    const selectedCar = useSelector(getAutoSearchBrandSelectedCars);

    const onChangeBrandAuto = useCallback((value:string) => {
        dispatch(autoSearchActions.setBrand(value));
        dispatch(autoSearchActions.setSelectedCar(''));
    }, [dispatch]);
    const onChangeModelAuto = useCallback((value:string) => {
        dispatch(autoSearchActions.setSelectedCar(value));
    }, [dispatch]);

    const BrandsItems = useMemo(() => {
        const resultsItems:ListBoxItem[] = [];
        for (const brand of brands) {
            resultsItems.push({
                value: brand._id,
                content: brand.name
            });
        }
        return resultsItems;
    }, [brands]);

    const CarsItems = useMemo(() => {
        if (cars) {
            const resultsItems: ListBoxItem[] = [];
            for (const car of cars) {
                resultsItems.push({
                    value: car._id,
                    content: car.name
                });
            }
            return resultsItems;
        }
    }, [cars]);

    useEffect(() => {
        if (brand) {
            const brandID = BrandsItems.find((item) => item.content === brand);
            if (brandID) {
                dispatch(fetchModelAuto(brandID.value));
            }
        }
    }, [brand, BrandsItems, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={'container'}>
                <Card className={classNames(cls.AutoSearch, {}, [className])}>
                    <Text
                        className={cls.title}
                        align={TextAlign.CENTER}
                        title={'Подбор автомобиля по параметрам'}
                        theme={TextTheme.INVERTED}
                    />
                    <HStack justify={'between'} className={cls.btn_wrapper}>
                        <HStack gap={'16'} >
                            <ListBox
                                defaultValue={'Марка автомобиля'}
                                value={brand}
                                onChange={onChangeBrandAuto}
                                items={BrandsItems}/>
                            <ListBox
                                defaultValue={'Модель автомобиля'}
                                value={selectedCar}
                                onChange={onChangeModelAuto}
                                items={CarsItems}/>
                        </HStack>
                        <Button theme={ButtonTheme.BACKGROUND}>Показать автомобили</Button>
                    </HStack>
                </Card>
            </div>
        </DynamicModuleLoader>
    );
});
