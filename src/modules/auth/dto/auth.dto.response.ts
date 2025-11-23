import { Expose } from "class-transformer";
import { UserResponseDto } from "../../users/dto/user.dto.response";

export class AuthResponseDto {
  @Expose()
  accessToken!: string;

  @Expose()
  user!: UserResponseDto;
}
