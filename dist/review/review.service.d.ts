import { Prisma, Review } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateReviewDto): Promise<Review>;
    delete(id: string): Promise<Review | null>;
    findByProductId(productId: string): Promise<Review[] | null>;
    deleteByProductId(productId: string): Promise<Prisma.BatchPayload>;
}
