import { Injectable } from "@nestjs/common";
import { createHash, randomBytes } from "crypto";

export interface PKCEPair {
  codeVerifier: string;
  codeChallenge: string;
}

@Injectable()
export class PkceService {
  /**
   * Genera un code_verifier aleatorio según especificación PKCE
   * Debe tener entre 43 y 128 caracteres
   */
  generateCodeVerifier(): string {
    // Genera 32 bytes (256 bits) y los convierte a base64url
    // Esto da aproximadamente 43 caracteres, cumpliendo el mínimo
    const randomBytesBuffer = randomBytes(32);
    return this.base64UrlEncode(randomBytesBuffer);
  }

  /**
   * Calcula el code_challenge a partir del code_verifier
   * Usa SHA256 y codifica en base64url
   */
  calculateCodeChallenge(codeVerifier: string): string {
    const hash = createHash("sha256").update(codeVerifier).digest();
    return this.base64UrlEncode(hash);
  }

  /**
   * Genera un par code_verifier y code_challenge
   */
  generatePKCEPair(): PKCEPair {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = this.calculateCodeChallenge(codeVerifier);

    return {
      codeVerifier,
      codeChallenge,
    };
  }

  /**
   * Codifica un buffer a base64url (sin padding, con caracteres URL-safe)
   */
  private base64UrlEncode(buffer: Buffer): string {
    return buffer
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  }
}
