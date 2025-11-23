import { Controller, Get, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { CurrentUser } from "../../auth/jwt/current-user.decorator";
import { Public } from "../../auth/jwt/public.decorator";
import { AuthorizeUserUseCase } from "../domain/use-cases/authorize-user.use-case";
import { OAuthCallbackDto } from "../application/dto/oauth-callback.dto.input";
import { CONFIG } from "../../../core/config";
import { MERCADOPAGO_ENDPOINTS } from "../infrastructure/constants/mercado-pago.constants";

//TODO: Add PKCE and Redis Implementation
// import { PkceService } from "../infrastructure/services/pkce.service";
// import { RedisService } from "../../../core/redis.service";

@Controller("oauth")
export class OAuthController {
  constructor(private readonly authorizeUserUseCase: AuthorizeUserUseCase) {}

  @Get("mercadopago")
  async initiateOAuth(
    @CurrentUser() user: { userId: string },
    @Res() res: Response
  ): Promise<void> {
    const authUrl = new URL(
      MERCADOPAGO_ENDPOINTS.AUTHORIZATION,
      CONFIG.MERCADOPAGO.AUTH_BASE_URL
    );

    authUrl.searchParams.append("client_id", CONFIG.MERCADOPAGO.CLIENT_ID);
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append(
      "redirect_uri",
      CONFIG.MERCADOPAGO.REDIRECT_URI
    );
    authUrl.searchParams.append("state", user.userId);

    res.redirect(authUrl.toString());
  }

  @Public()
  @Get("callback")
  async handleCallback(
    @Query() query: OAuthCallbackDto,
    @Res() res: Response
  ): Promise<void> {
    try {
      if (!query.state) {
        res.status(400).json({ message: "Missing state parameter" });
        return;
      }

      await this.authorizeUserUseCase.execute(query.state, query.code);
      res.status(200).json({ message: "Mercado Pago connected successfully" });
    } catch (error: any) {
      console.error("[OAuth Error]:", error);
      res.status(500).json({ message: "Failed to connect Mercado Pago" });
    }
  }
}
