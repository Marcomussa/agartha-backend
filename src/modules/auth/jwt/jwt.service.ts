import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import {
  JsonWebTokenError,
  JwtService,
  NotBeforeError,
  TokenExpiredError,
} from "@nestjs/jwt";
import {
  ACCESS_TOKEN_EXPIRATION_TIME,
  REFRESH_TOKEN_EXPIRATION_TIME,
} from "../auth.constants";

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(userId: string): string {
    return this.jwtService.sign(
      { sub: userId },
      { expiresIn: ACCESS_TOKEN_EXPIRATION_TIME }
    );
  }

  generateRefreshToken(userId: string): string {
    return this.jwtService.sign(
      { sub: userId },
      { expiresIn: REFRESH_TOKEN_EXPIRATION_TIME }
    );
  }

  generateTokens(userId: string) {
    return {
      accessToken: this.generateAccessToken(userId),
      refreshToken: this.generateRefreshToken(userId),
    };
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw new UnauthorizedException("Token expired");
      }

      if (err instanceof NotBeforeError) {
        throw new ForbiddenException("Token not valid yet");
      }

      if (err instanceof JsonWebTokenError) {
        throw new UnauthorizedException("Invalid token");
      }

      throw new UnauthorizedException("Unknown token error");
    }
  }

  verifyAccessToken(token: string) {
    return this.verifyToken(token);
  }

  verifyRefreshToken(token: string) {
    return this.verifyToken(token);
  }
}
