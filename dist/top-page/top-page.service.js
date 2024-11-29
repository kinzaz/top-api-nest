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
exports.TopPageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TopPageService = class TopPageService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) {
        return this.prismaService.topPage.create({
            data: dto,
        });
    }
    async findById(id) {
        return this.prismaService.topPage.findFirst({ where: { id } });
    }
    async delete(id) {
        return this.prismaService.topPage.delete({ where: { id } });
    }
    async patch(id, dto) {
        return this.prismaService.topPage.update({
            where: { id },
            data: dto,
        });
    }
    async findByAlias(alias) {
        return this.prismaService.topPage.findFirst({ where: { alias } });
    }
    async findByCategory(firstCategory) {
        return this.prismaService.topPage.findMany({
            where: { firstCategory },
            select: { alias: true, title: true, secondaryCategory: true },
        });
    }
    async findAll() {
        return this.prismaService.topPage.findMany();
    }
};
exports.TopPageService = TopPageService;
exports.TopPageService = TopPageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TopPageService);
//# sourceMappingURL=top-page.service.js.map