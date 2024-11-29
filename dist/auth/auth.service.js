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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_consts_1 = require("./auth.consts");
let AuthService = class AuthService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const user = {
            email: dto.login,
            password: (0, crypto_1.hash)(dto.password, salt),
        };
        return this.prismaService.user.create({
            data: user,
        });
    }
    async findUser(email) {
        return this.prismaService.user.findFirst({
            where: { email },
        });
    }
    async validateUser(email, password) {
        const user = await this.findUser(email);
        if (!user) {
            throw new common_1.UnauthorizedException(auth_consts_1.USER_NOT_FOUND);
        }
        const isCorrectPassword = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isCorrectPassword) {
            throw new common_1.UnauthorizedException(auth_consts_1.USER_NOT_FOUND);
        }
        return { email: user.email };
    }
    async login(email) {
        const payload = { email };
        return {
            acess_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map