import { PortableTextBlock } from "sanity";

export interface ProductType{
    title: string,
    _id: string,
    isNew: boolean,
    isDiscount: boolean,
    _type: string,
    description: string,
    _rev: string,
    image: [
        {
            _type: any,
            _key: number,
            asset: {
                _ref: string,
                _type: string
            }
        } ],
    quantity: number,
    instock:number,
    _createdAt: string,
    originalPrice: number,
    discountPercentage:number,
    categoryname?: string,
    productby: string,
    winetype?:string,
    rating:number,
    slug: { current: string, _type: string },
    _updatedAt: string,
    body: PortableTextBlock,
    totalPrice?: number | 0;
}

export interface StoreProductType{
    plpWine: {
        productData:ProductType[]
    }
}