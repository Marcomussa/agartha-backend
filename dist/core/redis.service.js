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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("./config");
let RedisService = class RedisService {
    constructor() {
        this.client = new ioredis_1.default({
            host: config_1.CONFIG.REDIS.HOST,
            port: config_1.CONFIG.REDIS.PORT,
            password: config_1.CONFIG.REDIS.PASSWORD,
            db: config_1.CONFIG.REDIS.DB,
            retryStrategy: (times) => {
                const delay = Math.min(times * 50, 2000);
                return delay;
            },
        });
        this.client.on("error", (err) => {
            console.error("[Redis Error]:", err);
        });
        this.client.on("connect", () => {
            console.log("[Redis]: Connected successfully");
        });
    }
    async onModuleInit() {
        // La conexión se establece automáticamente al crear la instancia
    }
    async onModuleDestroy() {
        await this.client.quit();
    }
    getClient() {
        return this.client;
    }
    async set(key, value, ttlSeconds) {
        if (ttlSeconds) {
            await this.client.setex(key, ttlSeconds, value);
        }
        else {
            await this.client.set(key, value);
        }
    }
    async get(key) {
        return await this.client.get(key);
    }
    async del(key) {
        return await this.client.del(key);
    }
    async exists(key) {
        return await this.client.exists(key);
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisService);
//# sourceMappingURL=redis.service.js.map