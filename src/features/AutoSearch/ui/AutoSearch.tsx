import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AutoSearch.module.scss';

import { memo, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAutoSearchBrand, getAutoSearchModel } from 'features/AutoSearch/model/selectors/autoSearch';
import { autoSearchActions, autoSearchReducer } from 'features/AutoSearch/model/slices/autoSearchSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';

interface AutoSearchProps {
    className?: string;
}

const brandsItems:ListBoxItem[] = [
    {
        value: 'toyota',
        content: 'Toyota'
    },
    {
        value: 'bmw',
        content: 'Bmw'
    },
    {
        value: 'mercedes',
        content: 'Mercedes'
    },
    {
        value: 'audi',
        content: 'Audi'
    }

];

const reducers:ReducersList = {
    autoSearch: autoSearchReducer

};

export const AutoSearch = memo((props: AutoSearchProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const brand = useSelector(getAutoSearchBrand);
    const model = useSelector(getAutoSearchModel);

    const onChangeBrandAuto = useCallback((value:string) => {
        dispatch(autoSearchActions.setBrand(value));
    }, [dispatch]);
    const onChangeModelAuto = useCallback((value:string) => {
        dispatch(autoSearchActions.setModel(value));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={'container'}>
                <Card className={classNames(cls.AutoSearch, {}, [className])}>

                    <Text
                        align={TextAlign.CENTER}
                        title={'Подбор автомобиля по параметрам'}
                        theme={TextTheme.INVERTED}
                    />
                    <HStack gap={'16'}>
                        <ListBox
                            defaultValue={'Марка автомобиля'}
                            value={brand}
                            onChange={onChangeBrandAuto}
                            items={brandsItems}/>
                        <ListBox
                            defaultValue={'Модель автомобиля'}
                            value={model}
                            onChange={onChangeModelAuto}
                            items={brandsItems}/>
                    </HStack>
                </Card>
            </div>
        </DynamicModuleLoader>
    );
});
