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
exports.FindTopPageDto = void 0;
const class_validator_1 = require("class-validator");
const create_top_page_dto_1 = require("./create-top-page.dto");
class FindTopPageDto {
}
exports.FindTopPageDto = FindTopPageDto;
__decorate([
    (0, class_validator_1.IsEnum)(create_top_page_dto_1.TopLevelCategory),
    __metadata("design:type", Number)
], FindTopPageDto.prototype, "firstCategory", void 0);
//# sourceMappingURL=find-top-page.dto.js.map