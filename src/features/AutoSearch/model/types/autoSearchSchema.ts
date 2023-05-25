import { Brand } from '@/entities/Brand/model/types/brands';

export interface Cars {
    _id:string;
    name:string,
    brand:Brand
    transmission:string,
    engine:string,
    volume:string,
    power:number,
    color:string,
    price:number,
    availability:number,
    photo:string
}
export interface AutoSearchSchema {
    isLoading:boolean;
    error?:string;
    brand?:string
    cars?:Cars[],
    selectedCar?:string,

}
