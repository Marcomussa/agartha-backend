import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./presentation/auth.controller";
import { AuthService } from "./infrastructure/services/auth.service";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";
import { TokenService } from "./infrastructure/services/jwt.service";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "15m",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService, JwtStrategy, JwtAuthGuard],
  exports: [AuthService, JwtAuthGuard, TokenService],
})
export class AuthModule {}
