import { IsString, IsEmail, IsNotEmpty, IsMongoId } from "class-validator";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  password: string;
  mpAccessToken?: string;
  mpRefreshToken?: string;
}

export interface ICreateUserDto {
  email: string;
  name: string;
  password: string;
}

export interface IUserResponseDto {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User implements IUser {
  @IsMongoId()
  @IsNotEmpty()
  _id!: string;

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
