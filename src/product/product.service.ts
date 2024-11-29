import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateProductDto) {
    return this.prismaService.product.create({
      data: { ...dto, characteristics: JSON.stringify(dto.characteristics) },
    });
  }

  async findById(id: string) {
    return this.prismaService.product.findFirst({ where: { id } });
  }

  async delete(id: string) {
    return this.prismaService.product.delete({ where: { id } });
  }

  async patch(id: string, dto: CreateProductDto) {
    return this.prismaService.product.update({
      data: { ...dto, characteristics: JSON.stringify(dto.characteristics) },
      where: { id },
    });
  }

  async findWithReviews(dto: FindProductDto) {
    const products = await this.prismaService.product.findMany({
      where: {
        categories: { has: dto.category },
      },
    });
    const reviews = await this.prismaService.review.findMany();

    const result = products.map((product) => ({
      ...product,
      reviews: reviews
        .filter((review) => review.productId === product.id)
        .map((review) => ({
          ...review,
        })),
    }));

    return result;
  }
}
