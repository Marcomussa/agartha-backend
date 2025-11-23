import { Expose, Type } from "class-transformer";
import { IEntryResponseDto, EntryType, EntrySource } from "../entries.types";
import { ICategoryResponseDto } from "../../categories/categories.types";

class CategoryInfoDto {
  @Expose()
  _id!: string;

  @Expose()
  name!: string;

  @Expose()
  description?: string;
}

export class EntryResponseDto implements IEntryResponseDto {
  @Expose()
  _id!: string;

  @Expose()
  userId!: string;

  @Expose({ name: "title" })
  description!: string;

  @Expose({ name: "categoryId" })
  @Type(() => CategoryInfoDto)
  category!: ICategoryResponseDto;

  @Expose()
  amount!: number;

  @Expose()
  createdAt!: Date;

  @Expose()
  type!: EntryType;

  @Expose()
  source!: EntrySource;
}
