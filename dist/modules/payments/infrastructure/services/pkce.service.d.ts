export interface PKCEPair {
    codeVerifier: string;
    codeChallenge: string;
}
export declare class PkceService {
    /**
     * Genera un code_verifier aleatorio según especificación PKCE
     * Debe tener entre 43 y 128 caracteres
     */
    generateCodeVerifier(): string;
    /**
     * Calcula el code_challenge a partir del code_verifier
     * Usa SHA256 y codifica en base64url
     */
    calculateCodeChallenge(codeVerifier: string): string;
    /**
     * Genera un par code_verifier y code_challenge
     */
    generatePKCEPair(): PKCEPair;
    /**
     * Codifica un buffer a base64url (sin padding, con caracteres URL-safe)
     */
    private base64UrlEncode;
}
//# sourceMappingURL=pkce.service.d.ts.map