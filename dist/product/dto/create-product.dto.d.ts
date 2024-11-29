export declare class CreateProductDto {
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    credit: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    categories: string[];
    tags: string[];
    characteristics: ProductCharacteristicDto[];
}
declare class ProductCharacteristicDto {
    name: string;
    value: string;
}
export {};
