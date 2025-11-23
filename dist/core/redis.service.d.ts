import { OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import Redis from "ioredis";
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    private client;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getClient(): Redis;
    set(key: string, value: string, ttlSeconds?: number): Promise<void>;
    get(key: string): Promise<string | null>;
    del(key: string): Promise<number>;
    exists(key: string): Promise<number>;
}
//# sourceMappingURL=redis.service.d.ts.map