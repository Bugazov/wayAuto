import { rtkApi } from '@/shared/api/rtkApi';
import { Car } from '@/entities/Car';

const newCarsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNewCarsList: build.query<Car[], null >({
            query: () => ({
                url: '/cars'
            })
        })
    })

});

export const useNewCarsList = newCarsListApi.useGetNewCarsListQuery;
