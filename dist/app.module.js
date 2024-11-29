"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const product_module_1 = require("./product/product.module");
const review_module_1 = require("./review/review.module");
const top_page_module_1 = require("./top-page/top-page.module");
const prisma_module_1 = require("./prisma/prisma.module");
const files_module_1 = require("./files/files.module");
const sitemap_module_1 = require("./sitemap/sitemap.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            top_page_module_1.TopPageModule,
            product_module_1.ProductModule,
            review_module_1.ReviewModule,
            config_1.ConfigModule.forRoot(),
            prisma_module_1.PrismaModule,
            files_module_1.FilesModule,
            sitemap_module_1.SitemapModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map