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
exports.OAuthController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../auth/jwt/current-user.decorator");
const public_decorator_1 = require("../../auth/jwt/public.decorator");
const authorize_user_use_case_1 = require("../domain/use-cases/authorize-user.use-case");
const oauth_callback_dto_input_1 = require("../application/dto/oauth-callback.dto.input");
const config_1 = require("../../../core/config");
const mercado_pago_constants_1 = require("../infrastructure/constants/mercado-pago.constants");
//TODO: Add PKCE and Redis Implementation
// import { PkceService } from "../infrastructure/services/pkce.service";
// import { RedisService } from "../../../core/redis.service";
let OAuthController = class OAuthController {
    constructor(authorizeUserUseCase) {
        this.authorizeUserUseCase = authorizeUserUseCase;
    }
    async initiateOAuth(user, res) {
        const authUrl = new URL(mercado_pago_constants_1.MERCADOPAGO_ENDPOINTS.AUTHORIZATION, config_1.CONFIG.MERCADOPAGO.AUTH_BASE_URL);
        authUrl.searchParams.append("client_id", config_1.CONFIG.MERCADOPAGO.CLIENT_ID);
        authUrl.searchParams.append("response_type", "code");
        authUrl.searchParams.append("redirect_uri", config_1.CONFIG.MERCADOPAGO.REDIRECT_URI);
        authUrl.searchParams.append("state", user.userId);
        res.redirect(authUrl.toString());
    }
    async handleCallback(query, res) {
        try {
            if (!query.state) {
                res.status(400).json({ message: "Missing state parameter" });
                return;
            }
            await this.authorizeUserUseCase.execute(query.state, query.code);
            res.status(200).json({ message: "Mercado Pago connected successfully" });
        }
        catch (error) {
            console.error("[OAuth Error]:", error);
            res.status(500).json({ message: "Failed to connect Mercado Pago" });
        }
    }
};
exports.OAuthController = OAuthController;
__decorate([
    (0, common_1.Get)("mercadopago"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OAuthController.prototype, "initiateOAuth", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)("callback"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [oauth_callback_dto_input_1.OAuthCallbackDto, Object]),
    __metadata("design:returntype", Promise)
], OAuthController.prototype, "handleCallback", null);
exports.OAuthController = OAuthController = __decorate([
    (0, common_1.Controller)("oauth"),
    __metadata("design:paramtypes", [authorize_user_use_case_1.AuthorizeUserUseCase])
], OAuthController);
//# sourceMappingURL=oauth.controller.js.map