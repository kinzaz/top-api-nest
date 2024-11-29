"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtConfig = void 0;
const getJwtConfig = async (configServie) => {
    return {
        secret: configServie.get('JWT_SECRET'),
    };
};
exports.getJwtConfig = getJwtConfig;
//# sourceMappingURL=jwt.config.js.map