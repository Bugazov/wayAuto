import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Brands.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { brandsReducer, getBrands } from '../model/slices/BrandsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchBrandsData } from '../model/services/fetchBrandsData';
import { useSelector } from 'react-redux';
import { BrandsItem } from '../ui/BrandsItem/BrandsItem';
import { getBrandsIsloading } from '../model/selectors/brands';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack } from 'shared/ui/Stack';

interface BrandsProps {
    className?: string;
}

const reducers :ReducersList = {
    brands: brandsReducer
};

export const Brands = ({ className }: BrandsProps) => {
    const dispatch = useAppDispatch();
    const brands = useSelector(getBrands.selectAll);
    const loading = useSelector(getBrandsIsloading);
    useEffect(() => {
        dispatch(fetchBrandsData());
    }, [dispatch]);

    if (loading) {
        return (
            <HStack justify={'center'}>
                <Loader/>
            </HStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className='container'>
                <div className={classNames(cls.Brands, {}, [className])}>
                    <div className={cls.brandsItems}>
                        {brands.map((item) => (
                            <BrandsItem key={item._id} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};
