import { Brand } from 'entities/Brand/model/types/brands';

export interface Car {
    _id:string;
    name:string,
    brand:Brand
    transmission?:string,
    engine?:string,
    volume?:string,
    power?:number,
    color?:string,
    price?:string,
    availability?:number,
    photo:string,
    year:number,
    body:string
}
