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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_constants_1 = require("../constants/auth.constants");
let TokenService = class TokenService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    generateAccessToken(userId) {
        return this.jwtService.sign({ sub: userId }, { expiresIn: auth_constants_1.ACCESS_TOKEN_EXPIRATION_TIME });
    }
    generateRefreshToken(userId) {
        return this.jwtService.sign({ sub: userId }, { expiresIn: auth_constants_1.REFRESH_TOKEN_EXPIRATION_TIME });
    }
    generateTokens(userId) {
        return {
            accessToken: this.generateAccessToken(userId),
            refreshToken: this.generateRefreshToken(userId),
        };
    }
    verifyToken(token) {
        try {
            return this.jwtService.verify(token);
        }
        catch (err) {
            if (err instanceof jwt_1.TokenExpiredError) {
                throw new common_1.UnauthorizedException("Token expired");
            }
            if (err instanceof jwt_1.NotBeforeError) {
                throw new common_1.ForbiddenException("Token not valid yet");
            }
            if (err instanceof jwt_1.JsonWebTokenError) {
                throw new common_1.UnauthorizedException("Invalid token");
            }
            throw new common_1.UnauthorizedException("Unknown token error");
        }
    }
    verifyAccessToken(token) {
        return this.verifyToken(token);
    }
    verifyRefreshToken(token) {
        return this.verifyToken(token);
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], TokenService);
//# sourceMappingURL=jwt.service.js.map