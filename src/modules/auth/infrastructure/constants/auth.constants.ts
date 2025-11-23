import { CookieOptions } from "express";

const isProduction = process.env.NODE_ENV === "production";

export const REFRESH_TOKEN_COOKIE_NAME = "refresh_token";
export const REFRESH_TOKEN_COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: "lax",
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const ACCESS_TOKEN_EXPIRATION_TIME = "15m";
export const REFRESH_TOKEN_EXPIRATION_TIME = "7d";

export const GOOGLE_ENDPOINTS = {
  AUTHORIZATION: "/o/oauth2/v2/auth",
} as const;
