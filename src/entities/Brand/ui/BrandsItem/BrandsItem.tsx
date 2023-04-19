import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BrandsItem.module.scss';
import { Brand } from '../../model/types/brands';

interface BrandsItemProps {
    className?: string;
    item:Brand
}

export const BrandsItem = ({ className, item }: BrandsItemProps) => {
    return (
        <div className={classNames(cls.BrandsItem, {}, [className])}>
            <div className={cls.logo}>
                <img src={`${__API__}/images/${item.logo}`} alt=""/>
            </div>
            <div className={cls.name}>
                {item.name}
            </div>

        </div>
    );
};
