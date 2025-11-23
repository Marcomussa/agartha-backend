"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHttpClient = createHttpClient;
const axios_1 = __importDefault(require("axios"));
function createHttpClient(baseURL, apiKey) {
    const client = axios_1.default.create({
        baseURL,
        timeout: 8000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    client.interceptors.request.use((config) => {
        if (apiKey) {
            config.headers["x-api-key"] = apiKey;
        }
        return config;
    });
    return client;
}
//# sourceMappingURL=httpClient.js.map