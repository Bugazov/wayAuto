
export interface Brand{
    id:string,
    name:string,
    logo:string,
}

export interface BrandsSchema{
    isLoading:boolean,
    data?:Brand[],
    error?:string
}
