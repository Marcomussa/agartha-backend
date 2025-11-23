import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AuthService } from "../infrastructure/services/auth.service";
import { AuthDtoInput } from "../dto/auth.dto.input";
import { NewUserDtoInput } from "../dto/auth.dto.input";
import { UserResponseDto } from "../../users/dto/user.dto.response";
import { AuthResponseDto } from "../dto/auth.dto.response";
import {
  REFRESH_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_OPTIONS,
} from "../infrastructure/constants/auth.constants";
import { Public } from "../jwt/public.decorator";
import { plainToInstance } from "class-transformer";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("login")
  @HttpCode(200)
  async login(
    @Body() body: AuthDtoInput,
    @Res({ passthrough: true }) res: Response
  ): Promise<AuthResponseDto> {
    const { email, password } = body;
    const {
      accessToken,
      refreshToken,
      user: userData,
    } = await this.authService.login(email, password);

    res.cookie(
      REFRESH_TOKEN_COOKIE_NAME,
      refreshToken,
      REFRESH_TOKEN_COOKIE_OPTIONS
    );

    return plainToInstance(AuthResponseDto, {
      accessToken,
      user: userData,
    });
  }

  @Public()
  @Post("refresh")
  @HttpCode(200)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ): Promise<AuthResponseDto> {
    const refreshToken = req.cookies?.refresh_token;
    if (!refreshToken) {
      throw new UnauthorizedException("No refresh token provided");
    }

    const {
      accessToken,
      refreshToken: newRefreshToken,
      user,
    } = await this.authService.refreshTokens(refreshToken);

    res.cookie(
      REFRESH_TOKEN_COOKIE_NAME,
      newRefreshToken,
      REFRESH_TOKEN_COOKIE_OPTIONS
    );

    return plainToInstance(AuthResponseDto, {
      accessToken,
      user,
    });
  }

  @Public()
  @Post("new")
  @HttpCode(201)
  async newUser(@Body() body: NewUserDtoInput): Promise<UserResponseDto> {
    return await this.authService.register(body);
  }
}
