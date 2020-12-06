import { IProductBase } from './iproductbase';

export class Product implements IProductBase {
    ProductId: number;
    ProductName: string;
    Category: number;
    Offerer: string;
    Description: string;
    Price: number;
    Active: number;
    Image?: string;
    City?: string;
    // API
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