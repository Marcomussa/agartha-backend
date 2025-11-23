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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../infrastructure/services/auth.service");
const auth_dto_input_1 = require("../application/dto/auth.dto.input");
const auth_dto_input_2 = require("../application/dto/auth.dto.input");
const auth_dto_response_1 = require("../application/dto/auth.dto.response");
const auth_constants_1 = require("../infrastructure/constants/auth.constants");
const public_decorator_1 = require("../jwt/public.decorator");
const class_transformer_1 = require("class-transformer");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(body, res) {
        const { email, password } = body;
        const { accessToken, refreshToken, user: userData, } = await this.authService.login(email, password);
        res.cookie(auth_constants_1.REFRESH_TOKEN_COOKIE_NAME, refreshToken, auth_constants_1.REFRESH_TOKEN_COOKIE_OPTIONS);
        return (0, class_transformer_1.plainToInstance)(auth_dto_response_1.AuthResponseDto, {
            accessToken,
            user: userData,
        });
    }
    async refresh(req, res) {
        const refreshToken = req.cookies?.refresh_token;
        if (!refreshToken) {
            throw new common_1.UnauthorizedException("No refresh token provided");
        }
        const { accessToken, refreshToken: newRefreshToken, user, } = await this.authService.refreshTokens(refreshToken);
        res.cookie(auth_constants_1.REFRESH_TOKEN_COOKIE_NAME, newRefreshToken, auth_constants_1.REFRESH_TOKEN_COOKIE_OPTIONS);
        return (0, class_transformer_1.plainToInstance)(auth_dto_response_1.AuthResponseDto, {
            accessToken,
            user,
        });
    }
    async newUser(body) {
        return await this.authService.register(body);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_input_1.AuthDtoInput, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("refresh"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_input_2.NewUserDtoInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "newUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map