import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { UserResponseDto } from "../users/dto/user.dto.response";
import { NewUserDtoInput } from "./dto/auth.dto.input";
import * as bcrypt from "bcrypt";
import { IUser } from "../users/users.types";
import { TokenService } from "./jwt/jwt.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly usersService: UsersService
  ) {}

  async validateUser(email: string, password: string): Promise<IUser> {
    const user = await this.usersService.findByEmail(email);

    if (!user || !user.password) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user;
  }

  async refreshTokens(refreshToken: string) {
    const payload = this.tokenService.verifyRefreshToken(refreshToken);
    const userId = payload.sub as string;

    const user = await this.usersService.findById(userId);

    const { accessToken, refreshToken: newRefreshToken } =
      this.tokenService.generateTokens(userId);

    return {
      accessToken,
      refreshToken: newRefreshToken,
      user,
    };
  }

  async createUser(body: NewUserDtoInput): Promise<UserResponseDto> {
    return await this.usersService.create(body);
  }

  async generateTokensWithUser(userId: string) {
    const user = await this.usersService.findById(userId);
    const { accessToken, refreshToken } =
      this.tokenService.generateTokens(userId);

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
}
