import { UsersService } from "../../../users/users.service";
import { UserResponseDto } from "../../../users/dto/user.dto.response";
import { NewUserDtoInput } from "../../application/dto/auth.dto.input";
export declare class RegisterUseCase {
    private readonly usersService;
    constructor(usersService: UsersService);
    execute(createUserDto: NewUserDtoInput): Promise<UserResponseDto>;
}
//# sourceMappingURL=register.use-case.d.ts.map