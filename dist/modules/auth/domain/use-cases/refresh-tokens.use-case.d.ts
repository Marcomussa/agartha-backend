import { UsersService } from "../../../users/users.service";
import { TokenService } from "../../infrastructure/services/jwt.service";
import { UserResponseDto } from "../../../users/dto/user.dto.response";
export declare class RefreshTokensUseCase {
    private readonly tokenService;
    private readonly usersService;
    constructor(tokenService: TokenService, usersService: UsersService);
    execute(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserResponseDto;
    }>;
}
//# sourceMappingURL=refresh-tokens.use-case.d.ts.map