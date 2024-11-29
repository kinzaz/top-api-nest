import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopPageDto, TopLevelCategory } from './dto/create-top-page.dto';

@Injectable()
export class TopPageService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateTopPageDto) {
    return this.prismaService.topPage.create({
      data: dto,
    });
  }

  async findById(id: string) {
    return this.prismaService.topPage.findFirst({ where: { id } });
  }

  async delete(id: string) {
    return this.prismaService.topPage.delete({ where: { id } });
  }

  async patch(id: string, dto: CreateTopPageDto) {
    return this.prismaService.topPage.update({
      where: { id },
      data: dto,
    });
  }

  async findByAlias(alias: string) {
    return this.prismaService.topPage.findFirst({ where: { alias } });
  }

  async findByCategory(firstCategory: TopLevelCategory) {
    return this.prismaService.topPage.findMany({
      where: { firstCategory },
      select: { alias: true, title: true, secondaryCategory: true },
    });
  }

  async findAll() {
    return this.prismaService.topPage.findMany();
  }
}
