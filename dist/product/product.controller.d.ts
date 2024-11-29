import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<{
        image: string;
        title: string;
        price: number;
        oldPrice: number | null;
        credit: number;
        description: string;
        advantages: string;
        disAdvantages: string;
        categories: string[];
        tags: string[];
        characteristics: import("@prisma/client/runtime/library").JsonValue;
        id: string;
    }>;
    get(id: string): Promise<{
        image: string;
        title: string;
        price: number;
        oldPrice: number | null;
        credit: number;
        description: string;
        advantages: string;
        disAdvantages: string;
        categories: string[];
        tags: string[];
        characteristics: import("@prisma/client/runtime/library").JsonValue;
        id: string;
    }>;
    delete(id: string): Promise<{
        image: string;
        title: string;
        price: number;
        oldPrice: number | null;
        credit: number;
        description: string;
        advantages: string;
        disAdvantages: string;
        categories: string[];
        tags: string[];
        characteristics: import("@prisma/client/runtime/library").JsonValue;
        id: string;
    }>;
    patch(id: string, dto: CreateProductDto): Promise<{
        image: string;
        title: string;
        price: number;
        oldPrice: number | null;
        credit: number;
        description: string;
        advantages: string;
        disAdvantages: string;
        categories: string[];
        tags: string[];
        characteristics: import("@prisma/client/runtime/library").JsonValue;
        id: string;
    }>;
    find(dto: FindProductDto): Promise<{
        reviews: {
            name: string;
            title: string;
            description: string;
            id: string;
            rating: number;
            productId: string;
        }[];
        image: string;
        title: string;
        price: number;
        oldPrice: number | null;
        credit: number;
        description: string;
        advantages: string;
        disAdvantages: string;
        categories: string[];
        tags: string[];
        characteristics: import("@prisma/client/runtime/library").JsonValue;
        id: string;
    }[]>;
}
