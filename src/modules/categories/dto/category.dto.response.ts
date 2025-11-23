import { Expose } from "class-transformer";
import { ICategoryResponseDto } from "../categories.types";

export class CategoryResponseDto implements ICategoryResponseDto {
  @Expose()
  _id!: string;

  @Expose()
  userId!: string;

  @Expose()
  name!: string;
}
