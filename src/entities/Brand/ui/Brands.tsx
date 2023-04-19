import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Brands.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { brandsReducer, getBrands } from '../model/slices/BrandsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchBrandsData } from '../model/services/fetchBrandsData';
import { useSelector } from 'react-redux';
import { BrandsItem } from 'entities/Brand/ui/BrandsItem/BrandsItem';

interface BrandsProps {
    className?: string;
}

const reducers :ReducersList = {
    brands: brandsReducer
};

export const Brands = ({ className }: BrandsProps) => {
    const dispatch = useAppDispatch();
    const brands = useSelector(getBrands.selectAll);

    useEffect(() => {
        dispatch(fetchBrandsData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className='container'>
                <div className={classNames(cls.Brands, {}, [className])}>
                    <div className={cls.brandsItems}>
                        {brands.map((item) => (
                            <BrandsItem item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};
