"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const oauth_controller_1 = require("./presentation/oauth.controller");
const authorize_user_use_case_1 = require("./domain/use-cases/authorize-user.use-case");
const mercado_pago_api_adapter_1 = require("./infrastructure/adapters/mercado-pago-api.adapter");
const pkce_service_1 = require("./infrastructure/services/pkce.service");
const users_module_1 = require("../users/users.module");
let PaymentsModule = class PaymentsModule {
};
exports.PaymentsModule = PaymentsModule;
exports.PaymentsModule = PaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule],
        controllers: [oauth_controller_1.OAuthController],
        providers: [
            authorize_user_use_case_1.AuthorizeUserUseCase,
            pkce_service_1.PkceService,
            {
                provide: "IMercadoPagoApiPort",
                useClass: mercado_pago_api_adapter_1.MercadoPagoApiAdapter,
            },
        ],
        exports: ["IMercadoPagoApiPort"],
    })
], PaymentsModule);
//# sourceMappingURL=payments.module.js.map