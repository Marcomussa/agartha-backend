import { JwtService } from "@nestjs/jwt";
export declare class TokenService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateAccessToken(userId: string): string;
    generateRefreshToken(userId: string): string;
    generateTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    verifyToken(token: string): any;
    verifyAccessToken(token: string): any;
    verifyRefreshToken(token: string): any;
}
//# sourceMappingURL=jwt.service.d.ts.map