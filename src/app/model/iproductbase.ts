export interface IProductBase {
    ProductId: number;
    ProductName: string;
    Category: number;
    Offerer: string;
    Description: string;
    Price: number;
    Active: number;
    Image?: string;
}

// kategóriák: 0 - smartphone, 1 - notebook, 2 - asztali gép