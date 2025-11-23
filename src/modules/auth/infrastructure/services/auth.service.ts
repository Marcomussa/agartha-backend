import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../../../users/users.service";
import { IUser } from "../../../users/users.types";
import { TokenService } from "./jwt.service";
import { UserResponseDto } from "../../../users/dto/user.dto.response";
import { NewUserDtoInput } from "../../dto/auth.dto.input";
import * as bcrypt from "bcrypt";

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

  async login(
    email: string,
    password: string
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    user: UserResponseDto;
  }> {
    const user = await this.validateUser(email, password);

    const { accessToken, refreshToken } = this.tokenService.generateTokens(
      user._id
    );

    const userData = await this.usersService.findById(user._id);

    return {
      accessToken,
      refreshToken,
      user: userData,
    };
  }

  async register(createUserDto: NewUserDtoInput): Promise<UserResponseDto> {
    return await this.usersService.create(createUserDto);
  }

  async refreshTokens(refreshToken: string): Promise<{
    accessToken: string;
    refreshToken: string;
    user: UserResponseDto;
  }> {
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

  async generateTokensWithUser(userId: string): Promise<{
    accessToken: string;
    refreshToken: string;
    user: UserResponseDto;
  }> {
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
