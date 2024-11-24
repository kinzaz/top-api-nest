import { Injectable } from '@nestjs/common';
import { Prisma, Review } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    return this.prisma.review.create({
      data: dto,
    });
  }

  async delete(id: string): Promise<Review | null> {
    return this.prisma.review.delete({ where: { id } });
  }

  async findByProductId(productId: string): Promise<Review[] | null> {
    return this.prisma.review.findMany({ where: { productId } });
  }

  async deleteByProductId(productId: string): Promise<Prisma.BatchPayload> {
    return this.prisma.review.deleteMany({ where: { productId } });
  }
}
