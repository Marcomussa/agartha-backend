import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { UsersRepository } from "./users.repository";
import { UserResponseDto } from "./dto/user.dto.response";
import { NewUserDtoInput } from "../auth/dto/auth.dto.input";
import { IUser, User } from "./users.types";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findById(id: string): Promise<UserResponseDto> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return plainToInstance(UserResponseDto, user.toObject(), {
      excludeExtraneousValues: true,
    });
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user.toObject() as IUser;
  }

  async create(createUserDto: NewUserDtoInput): Promise<UserResponseDto> {
    const doesUserExist = await this.usersRepository.findByEmail(
      createUserDto.email
    );

    if (doesUserExist) {
      throw new ConflictException("User already exists");
    }

    const user = await this.usersRepository.create(createUserDto);
    return plainToInstance(UserResponseDto, user.toObject(), {
      excludeExtraneousValues: true,
    });
  }
}
