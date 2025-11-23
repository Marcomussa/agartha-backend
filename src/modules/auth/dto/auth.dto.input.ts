import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IAuthDtoInput, INewUserDtoInput } from "../auth.types";

export class AuthDtoInput implements IAuthDtoInput {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}

export class NewUserDtoInput implements INewUserDtoInput {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
