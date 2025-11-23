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
exports.RefreshTokensUseCase = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/users.service");
const jwt_service_1 = require("../../infrastructure/services/jwt.service");
let RefreshTokensUseCase = class RefreshTokensUseCase {
    constructor(tokenService, usersService) {
        this.tokenService = tokenService;
        this.usersService = usersService;
    }
    async execute(refreshToken) {
        const payload = this.tokenService.verifyRefreshToken(refreshToken);
        const userId = payload.sub;
        const user = await this.usersService.findById(userId);
        const { accessToken, refreshToken: newRefreshToken } = this.tokenService.generateTokens(userId);
        return {
            accessToken,
            refreshToken: newRefreshToken,
            user,
        };
    }
};
exports.RefreshTokensUseCase = RefreshTokensUseCase;
exports.RefreshTokensUseCase = RefreshTokensUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.TokenService,
        users_service_1.UsersService])
], RefreshTokensUseCase);
//# sourceMappingURL=refresh-tokens.use-case.js.map