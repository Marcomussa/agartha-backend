"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN_EXPIRATION_TIME = exports.ACCESS_TOKEN_EXPIRATION_TIME = exports.REFRESH_TOKEN_COOKIE_OPTIONS = exports.REFRESH_TOKEN_COOKIE_NAME = void 0;
const isProduction = process.env.NODE_ENV === "production";
exports.REFRESH_TOKEN_COOKIE_NAME = "refresh_token";
exports.REFRESH_TOKEN_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};
exports.ACCESS_TOKEN_EXPIRATION_TIME = "15m";
exports.REFRESH_TOKEN_EXPIRATION_TIME = "7d";
//# sourceMappingURL=auth.constants.js.map