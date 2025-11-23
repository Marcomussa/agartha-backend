import axios from "axios";

export function createHttpClient(baseURL: string, apiKey?: string) {
  const client = axios.create({
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
