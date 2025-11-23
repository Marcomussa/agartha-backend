import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import Redis from "ioredis";
import { CONFIG } from "./config";

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: CONFIG.REDIS.HOST,
      port: CONFIG.REDIS.PORT,
      password: CONFIG.REDIS.PASSWORD,
      db: CONFIG.REDIS.DB,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
    });

    this.client.on("error", (err) => {
      console.error("[Redis Error]:", err);
    });

    this.client.on("connect", () => {
      console.log("[Redis]: Connected successfully");
    });
  }

  async onModuleInit() {
    // La conexión se establece automáticamente al crear la instancia
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  getClient(): Redis {
    return this.client;
  }

  async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
    if (ttlSeconds) {
      await this.client.setex(key, ttlSeconds, value);
    } else {
      await this.client.set(key, value);
    }
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async del(key: string): Promise<number> {
    return await this.client.del(key);
  }

  async exists(key: string): Promise<number> {
    return await this.client.exists(key);
  }
}
