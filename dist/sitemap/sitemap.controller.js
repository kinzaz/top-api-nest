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
exports.SitemapController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const date_fns_1 = require("date-fns");
const top_page_service_1 = require("../top-page/top-page.service");
const xml2js_1 = require("xml2js");
const sitemap_consts_1 = require("./sitemap.consts");
let SitemapController = class SitemapController {
    constructor(topPageService, configService) {
        this.topPageService = topPageService;
        this.configService = configService;
        this.domain = this.configService.get('DOMAIN') ?? '';
    }
    async sitemap() {
        const formatString = "yyyy-MM-dd'T'HH:mm:00.000xxx";
        let response = [
            {
                loc: `${this.domain}`,
                lastmod: (0, date_fns_1.format)((0, date_fns_1.addDays)(new Date(), -1), formatString),
                changefreq: 'daily',
                priority: '1.0',
            },
        ];
        const pages = await this.topPageService.findAll();
        response = response.concat(pages.map((page) => ({
            loc: `${this.domain}/${sitemap_consts_1.CATEGORY_URL[page.firstCategory]}/${page.alias}`,
            lastmod: (0, date_fns_1.format)(new Date(), formatString),
            changefreq: 'weekly',
            priority: '0.7',
        })));
        const builder = new xml2js_1.Builder({
            xmldec: { version: '1.0', encoding: 'UTF-8' },
        });
        return builder.buildObject({
            urlset: {
                $: {
                    xmls: 'http://www.sitemaps.org/schemas/sitemap',
                },
                url: response,
            },
        });
    }
};
exports.SitemapController = SitemapController;
__decorate([
    (0, common_1.Get)('xml'),
    (0, common_1.Header)('content-type', 'text/xml'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitemapController.prototype, "sitemap", null);
exports.SitemapController = SitemapController = __decorate([
    (0, common_1.Controller)('sitemap'),
    __metadata("design:paramtypes", [top_page_service_1.TopPageService,
        config_1.ConfigService])
], SitemapController);
//# sourceMappingURL=sitemap.controller.js.map