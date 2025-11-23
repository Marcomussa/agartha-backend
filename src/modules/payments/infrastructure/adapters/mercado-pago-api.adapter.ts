import { Injectable } from "@nestjs/common";
import { CONFIG } from "../../../../core/config";
import { createHttpClient } from "../../../../core/httpClient";
import { MERCADOPAGO_ENDPOINTS } from "../constants/mercado-pago.constants";
import {
  IMercadoPagoApiPort,
  OAuthTokenRequest,
  OAuthTokenResponse,
} from "../../domain/ports/mercado-pago-api.port";

@Injectable()
export class MercadoPagoApiAdapter implements IMercadoPagoApiPort {
  private readonly httpClient = createHttpClient(
    CONFIG.MERCADOPAGO.API_BASE_URL
  );

  async exchangeCodeForTokens(
    request: OAuthTokenRequest
  ): Promise<OAuthTokenResponse> {
    const response = await this.httpClient.post<OAuthTokenResponse>(
      MERCADOPAGO_ENDPOINTS.OAUTH_TOKEN,
      {
        grant_type: request.grant_type,
        code: request.code,
        redirect_uri: request.redirect_uri,
        client_id: request.client_id,
        client_secret: request.client_secret,
      }
    );

    return response.data;
  }
}
