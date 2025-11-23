import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { CONFIG } from "../core/config";
import { RedisModule } from "../core/redis.module";
import { EntriesModule } from "../modules/entries/entries.module";
import { CategoriesModule } from "../modules/categories/categories.module";
import { AuthModule } from "../modules/auth/auth.module";
import { PaymentsModule } from "../modules/payments/payments.module";
import { JwtAuthGuard } from "../modules/auth/jwt/jwt-auth.guard";

@Module({
  imports: [
    MongooseModule.forRoot(CONFIG.MONGODB_URI),
    RedisModule,
    EntriesModule,
    CategoriesModule,
    AuthModule,
    PaymentsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
