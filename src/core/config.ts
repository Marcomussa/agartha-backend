import { config } from "dotenv";

config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const MONGODB_URI = `mongodb+srv://${db_user}:${db_password}@development.8moqppo.mongodb.net/?appName=development`;

const PORT = Number(process.env.PORT) || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const API_PREFIX = process.env.API_PREFIX || "api";

export const CONFIG = {
  PORT,
  MONGODB_URI: MONGODB_URI,

  REDIS: {
    HOST: process.env.REDIS_HOST || "localhost",
    PORT: Number(process.env.REDIS_PORT) || 6379,
    PASSWORD: process.env.REDIS_PASSWORD || undefined,
    DB: Number(process.env.REDIS_DB) || 0,
  },

  MERCADOPAGO: {
    CLIENT_ID: process.env.MERCADOPAGO_CLIENT_ID,
    CLIENT_SECRET: process.env.MERCADOPAGO_CLIENT_SECRET,
    REDIRECT_URI:
      process.env.MERCADOPAGO_REDIRECT_URI ||
      `${BASE_URL}/${API_PREFIX}/oauth/callback`,
    API_BASE_URL:
      process.env.MERCADOPAGO_API_BASE_URL || "https://api.mercadopago.com",
    AUTH_BASE_URL: "https://auth.mercadopago.com",
  },
};
