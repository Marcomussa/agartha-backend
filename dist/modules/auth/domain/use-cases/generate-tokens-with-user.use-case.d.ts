import { UsersService } from "../../../users/users.service";
import { TokenService } from "../../infrastructure/services/jwt.service";
import { UserResponseDto } from "../../../users/dto/user.dto.response";
export declare class GenerateTokensWithUserUseCase {
    private readonly tokenService;
    private readonly usersService;
    constructor(tokenService: TokenService, usersService: UsersService);
    execute(userId: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserResponseDto;
    }>;
}
//# sourceMappingURL=generate-tokens-with-user.use-case.d.ts.map