import { IMercadoPagoApiPort } from "../ports/mercado-pago-api.port";
import { UsersRepository } from "../../../users/users.repository";
export declare class AuthorizeUserUseCase {
    private readonly mercadoPagoApi;
    private readonly usersRepository;
    constructor(mercadoPagoApi: IMercadoPagoApiPort, usersRepository: UsersRepository);
    execute(userId: string, code: string): Promise<void>;
}
//# sourceMappingURL=authorize-user.use-case.d.ts.map