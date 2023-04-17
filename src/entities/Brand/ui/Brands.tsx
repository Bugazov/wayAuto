import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Brands.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { brandsReducer } from 'entities/Brand/model/slices/BrandsSlice';

interface BrandsProps {
    className?: string;
}

const reducers :ReducersList = {
    brands: brandsReducer
};

export const Brands = ({ className }: BrandsProps) => {
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.Brands, {}, [className])}>

            </div>
        </DynamicModuleLoader>
    );
};
