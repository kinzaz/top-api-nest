import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(dto: CreateReviewDto): Promise<{
        name: string;
        title: string;
        description: string;
        id: string;
        rating: number;
        productId: string;
    }>;
    delete(id: string): Promise<void>;
    getByProduct(productId: string): Promise<{
        name: string;
        title: string;
        description: string;
        id: string;
        rating: number;
        productId: string;
    }[]>;
    deleteByProduct(productId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
