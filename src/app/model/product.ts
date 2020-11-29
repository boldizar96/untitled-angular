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
}