import { UsersService } from "../../../users/users.service";
import { IUser } from "../../../users/users.types";
import { TokenService } from "./jwt.service";
import { UserResponseDto } from "../../../users/dto/user.dto.response";
import { NewUserDtoInput } from "../../application/dto/auth.dto.input";
export declare class AuthService {
    private readonly tokenService;
    private readonly usersService;
    constructor(tokenService: TokenService, usersService: UsersService);
    validateUser(email: string, password: string): Promise<IUser>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserResponseDto;
    }>;
    register(createUserDto: NewUserDtoInput): Promise<UserResponseDto>;
    refreshTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserResponseDto;
    }>;
    generateTokensWithUser(userId: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserResponseDto;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map