import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/user.dto.input";
import { UserResponseDto } from "./dto/user.dto.response";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":userId")
  async getUserById(@Param("userId") userId: string): Promise<UserResponseDto> {
    try {
      return await this.usersService.findById(userId);
    } catch (error: any) {
      console.error("[Controller Error] Users:", error);
      throw error;
    }
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<UserResponseDto> {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error: any) {
      console.error("[Controller Error] Users:", error);
      throw error;
    }
  }
}
