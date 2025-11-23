import { Injectable, Inject } from "@nestjs/common";
import { IMercadoPagoApiPort } from "../ports/mercado-pago-api.port";
import { UsersRepository } from "../../../users/users.repository";
import { CONFIG } from "../../../../core/config";

@Injectable()
export class AuthorizeUserUseCase {
  constructor(
    @Inject("IMercadoPagoApiPort")
    private readonly mercadoPagoApi: IMercadoPagoApiPort,
    @Inject(UsersRepository)
    private readonly usersRepository: UsersRepository
  ) {}

  async execute(userId: string, code: string): Promise<void> {
    const tokenRequest = {
      grant_type: "authorization_code" as const,
      code,
      redirect_uri: CONFIG.MERCADOPAGO.REDIRECT_URI,
      client_id: CONFIG.MERCADOPAGO.CLIENT_ID,
      client_secret: CONFIG.MERCADOPAGO.CLIENT_SECRET,
    };

    const tokenResponse = await this.mercadoPagoApi.exchangeCodeForTokens(
      tokenRequest
    );

    await this.usersRepository.updateMercadoPagoTokens(
      userId,
      tokenResponse.access_token,
      tokenResponse.refresh_token
    );
  }
}
