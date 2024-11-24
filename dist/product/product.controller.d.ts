import { Product } from '@prisma/client';
import { FindProduct } from './dto/find-product.dto';
export declare class ProductController {
    create(dto: Omit<Product, 'id'>): Promise<void>;
    get(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: Product): Promise<void>;
    find(dto: FindProduct): Promise<void>;
}
