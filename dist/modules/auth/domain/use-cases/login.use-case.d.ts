import { UsersService } from "../../../users/users.service";
import { TokenService } from "../../infrastructure/services/jwt.service";
import { UserResponseDto } from "../../../users/dto/user.dto.response";
export declare class LoginUseCase {
    private readonly tokenService;
    private readonly usersService;
    constructor(tokenService: TokenService, usersService: UsersService);
    execute(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserResponseDto;
    }>;
}
//# sourceMappingURL=login.use-case.d.ts.map