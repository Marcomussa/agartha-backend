import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ICreateCategoryDto } from "../categories.types";

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
}
