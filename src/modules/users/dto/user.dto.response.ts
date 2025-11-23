import { Exclude, Expose } from "class-transformer";
import { IUserResponseDto } from "../users.types";

export class UserResponseDto implements IUserResponseDto {
  @Expose()
  _id!: string;

  @Expose()
  email!: string;

  @Expose()
  name!: string;

  @Expose()
  createdAt!: Date;

  @Expose()
  updatedAt!: Date;
}
