import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AutoSearch.module.scss';

import { memo, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';

interface AutoSearchProps {
    className?: string;
}

const items:ListBoxItem[] = [
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

export const AutoSearch = memo((props: AutoSearchProps) => {
    const { className } = props;

    const onChangeBrandAuto = useCallback(() => {

    }, []);

    return (
        <div className={'container'}>
            <Card className={classNames(cls.AutoSearch, {}, [className])}>
                <ListBox defaultValue={'Марка автомобиля'} onChange={onChangeBrandAuto} items={items}/>

            </Card>
        </div>
    );
});
