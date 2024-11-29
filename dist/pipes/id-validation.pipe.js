"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const cuid_1 = require("cuid");
let IdValidationPipe = class IdValidationPipe {
    transform(value, metadata) {
        if (metadata.type != 'param') {
            return value;
        }
        if (!(0, cuid_1.isCuid)(value)) {
            throw new common_1.BadRequestException('id не валиден');
        }
        return value;
    }
};
exports.IdValidationPipe = IdValidationPipe;
exports.IdValidationPipe = IdValidationPipe = __decorate([
    (0, common_1.Injectable)()
], IdValidationPipe);
//# sourceMappingURL=id-validation.pipe.js.map