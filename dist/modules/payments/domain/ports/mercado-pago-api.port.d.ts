export interface OAuthTokenRequest {
    grant_type: "authorization_code";
    code: string;
    redirect_uri: string;
    client_id: string;
    client_secret: string;
}
export interface OAuthTokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    user_id: number;
    public_key: string;
    live_mode: boolean;
}
export interface IMercadoPagoApiPort {
    exchangeCodeForTokens(request: OAuthTokenRequest): Promise<OAuthTokenResponse>;
}
//# sourceMappingURL=mercado-pago-api.port.d.ts.map