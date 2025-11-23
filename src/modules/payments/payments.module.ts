import { Module } from "@nestjs/common";
import { OAuthController } from "../auth/presentation/oauth.controller";
import { AuthorizeUserUseCase } from "../auth/domain/use-cases/authorize-user.use-case";
import { MercadoPagoApiAdapter } from "./infrastructure/adapters/mercado-pago-api.adapter";
import { PkceService } from "./infrastructure/services/pkce.service";
import { UsersModule } from "../users/users.module";
import { IMercadoPagoApiPort } from "../auth/domain/ports/mercado-pago-api.port";

@Module({
  imports: [UsersModule],
  controllers: [OAuthController],
  providers: [
    AuthorizeUserUseCase,
    PkceService,
    {
      provide: "IMercadoPagoApiPort",
      useClass: MercadoPagoApiAdapter,
    },
  ],
  exports: ["IMercadoPagoApiPort"],
})
export class PaymentsModule {}
