"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/users.service");
const jwt_service_1 = require("./jwt.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = class AuthService {
    constructor(tokenService, usersService) {
        this.tokenService = tokenService;
        this.usersService = usersService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user || !user.password) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        return user;
    }
    async login(email, password) {
        const user = await this.validateUser(email, password);
        const { accessToken, refreshToken } = this.tokenService.generateTokens(user._id);
        const userData = await this.usersService.findById(user._id);
        return {
            accessToken,
            refreshToken,
            user: userData,
        };
    }
    async register(createUserDto) {
        return await this.usersService.create(createUserDto);
    }
    async refreshTokens(refreshToken) {
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
    async generateTokensWithUser(userId) {
        const user = await this.usersService.findById(userId);
        const { accessToken, refreshToken } = this.tokenService.generateTokens(userId);
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.TokenService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map