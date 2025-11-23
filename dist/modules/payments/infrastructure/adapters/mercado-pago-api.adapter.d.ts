import { IMercadoPagoApiPort, OAuthTokenRequest, OAuthTokenResponse } from "../../domain/ports/mercado-pago-api.port";
export declare class MercadoPagoApiAdapter implements IMercadoPagoApiPort {
    private readonly httpClient;
    exchangeCodeForTokens(request: OAuthTokenRequest): Promise<OAuthTokenResponse>;
}
//# sourceMappingURL=mercado-pago-api.adapter.d.ts.map