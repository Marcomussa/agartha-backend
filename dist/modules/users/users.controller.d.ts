import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/user.dto.input";
import { UserResponseDto } from "./dto/user.dto.response";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserById(userId: string): Promise<UserResponseDto>;
    createUser(createUserDto: CreateUserDto): Promise<UserResponseDto>;
}
//# sourceMappingURL=users.controller.d.ts.map