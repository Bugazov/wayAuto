import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BrandsItem.module.scss';
import { Brand } from '../../model/types/brands';
import { VStack } from '@/shared/ui/Stack';

interface BrandsItemProps {
    className?: string;
    item:Brand
}

export const BrandsItem = ({ className, item }: BrandsItemProps) => {
    return (
        <VStack align={'center'} justify={'between'} className={classNames(cls.BrandsItem, {}, [className])}>
            <div className={cls.logo}>
                <img src={`${__API__}/images/${item.logo}`} alt=""/>
            </div>
            <div className={cls.name}>
                {item.name}
            </div>

        </VStack>
    );
};
