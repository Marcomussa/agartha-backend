import { UsersRepository } from "./users.repository";
import { UserResponseDto } from "./dto/user.dto.response";
import { NewUserDtoInput } from "../auth/application/dto/auth.dto.input";
import { IUser } from "./users.types";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    findById(id: string): Promise<UserResponseDto>;
    findByEmail(email: string): Promise<IUser>;
    create(createUserDto: NewUserDtoInput): Promise<UserResponseDto>;
}
//# sourceMappingURL=users.service.d.ts.map