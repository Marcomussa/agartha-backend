"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PkceService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let PkceService = class PkceService {
    /**
     * Genera un code_verifier aleatorio según especificación PKCE
     * Debe tener entre 43 y 128 caracteres
     */
    generateCodeVerifier() {
        // Genera 32 bytes (256 bits) y los convierte a base64url
        // Esto da aproximadamente 43 caracteres, cumpliendo el mínimo
        const randomBytesBuffer = (0, crypto_1.randomBytes)(32);
        return this.base64UrlEncode(randomBytesBuffer);
    }
    /**
     * Calcula el code_challenge a partir del code_verifier
     * Usa SHA256 y codifica en base64url
     */
    calculateCodeChallenge(codeVerifier) {
        const hash = (0, crypto_1.createHash)("sha256").update(codeVerifier).digest();
        return this.base64UrlEncode(hash);
    }
    /**
     * Genera un par code_verifier y code_challenge
     */
    generatePKCEPair() {
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
    base64UrlEncode(buffer) {
        return buffer
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
    }
};
exports.PkceService = PkceService;
exports.PkceService = PkceService = __decorate([
    (0, common_1.Injectable)()
], PkceService);
//# sourceMappingURL=pkce.service.js.map