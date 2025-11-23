"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoApiAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../../../core/config");
const httpClient_1 = require("../../../../core/httpClient");
const mercado_pago_constants_1 = require("../constants/mercado-pago.constants");
let MercadoPagoApiAdapter = class MercadoPagoApiAdapter {
    constructor() {
        this.httpClient = (0, httpClient_1.createHttpClient)(config_1.CONFIG.MERCADOPAGO.API_BASE_URL);
    }
    async exchangeCodeForTokens(request) {
        const response = await this.httpClient.post(mercado_pago_constants_1.MERCADOPAGO_ENDPOINTS.OAUTH_TOKEN, {
            grant_type: request.grant_type,
            code: request.code,
            redirect_uri: request.redirect_uri,
            client_id: request.client_id,
            client_secret: request.client_secret,
        });
        return response.data;
    }
};
exports.MercadoPagoApiAdapter = MercadoPagoApiAdapter;
exports.MercadoPagoApiAdapter = MercadoPagoApiAdapter = __decorate([
    (0, common_1.Injectable)()
], MercadoPagoApiAdapter);
//# sourceMappingURL=mercado-pago-api.adapter.js.map