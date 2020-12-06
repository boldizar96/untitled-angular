import { IProductBase } from './iproductbase';

export interface IProduct extends IProductBase {
    categories: any;
    condition: number;
    description: string;
    imageName: any;
    latitude: number;
    longitude: number;
    offerer: string;
    price: number;
    productId: number;
    productName: string;
}