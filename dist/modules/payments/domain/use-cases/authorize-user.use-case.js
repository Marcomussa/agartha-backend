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
exports.AuthorizeUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../../../users/users.repository");
const config_1 = require("../../../../core/config");
let AuthorizeUserUseCase = class AuthorizeUserUseCase {
    constructor(mercadoPagoApi, usersRepository) {
        this.mercadoPagoApi = mercadoPagoApi;
        this.usersRepository = usersRepository;
    }
    async execute(userId, code) {
        const tokenRequest = {
            grant_type: "authorization_code",
            code,
            redirect_uri: config_1.CONFIG.MERCADOPAGO.REDIRECT_URI,
            client_id: config_1.CONFIG.MERCADOPAGO.CLIENT_ID,
            client_secret: config_1.CONFIG.MERCADOPAGO.CLIENT_SECRET,
        };
        const tokenResponse = await this.mercadoPagoApi.exchangeCodeForTokens(tokenRequest);
        await this.usersRepository.updateMercadoPagoTokens(userId, tokenResponse.access_token, tokenResponse.refresh_token);
    }
};
exports.AuthorizeUserUseCase = AuthorizeUserUseCase;
exports.AuthorizeUserUseCase = AuthorizeUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("IMercadoPagoApiPort")),
    __param(1, (0, common_1.Inject)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [Object, users_repository_1.UsersRepository])
], AuthorizeUserUseCase);
//# sourceMappingURL=authorize-user.use-case.js.map