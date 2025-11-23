import { IsString, IsEmail, IsNotEmpty } from "class-validator";
import { ICreateUserDto } from "../users.types";

export class CreateUserDto implements ICreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
