"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("../core/config");
const redis_module_1 = require("../core/redis.module");
const entries_module_1 = require("../modules/entries/entries.module");
const categories_module_1 = require("../modules/categories/categories.module");
const auth_module_1 = require("../modules/auth/auth.module");
const payments_module_1 = require("../modules/payments/payments.module");
const jwt_auth_guard_1 = require("../modules/auth/jwt/jwt-auth.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(config_1.CONFIG.MONGODB_URI),
            redis_module_1.RedisModule,
            entries_module_1.EntriesModule,
            categories_module_1.CategoriesModule,
            auth_module_1.AuthModule,
            payments_module_1.PaymentsModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map