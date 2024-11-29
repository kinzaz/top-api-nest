"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) {
        return this.prismaService.product.create({
            data: { ...dto, characteristics: JSON.stringify(dto.characteristics) },
        });
    }
    async findById(id) {
        return this.prismaService.product.findFirst({ where: { id } });
    }
    async delete(id) {
        return this.prismaService.product.delete({ where: { id } });
    }
    async patch(id, dto) {
        return this.prismaService.product.update({
            data: { ...dto, characteristics: JSON.stringify(dto.characteristics) },
            where: { id },
        });
    }
    async findWithReviews(dto) {
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
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map