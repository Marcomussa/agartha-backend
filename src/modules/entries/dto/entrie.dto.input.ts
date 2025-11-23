import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsEnum,
} from "class-validator";
import { EntryType, EntrySource } from "../entries.types";

export class CreateEntryDtoInput {
  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  categoryId!: string;

  @IsNumber()
  @IsNotEmpty()
  amount!: number;

  @IsDateString()
  @IsNotEmpty()
  createdAt!: Date;

  @IsEnum(EntryType)
  @IsNotEmpty()
  type!: EntryType;
}

export class CreateEntryDto extends CreateEntryDtoInput {
  @IsEnum(EntrySource)
  @IsNotEmpty()
  source!: EntrySource;
}
