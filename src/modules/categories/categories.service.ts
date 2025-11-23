import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Types } from "mongoose";
import { CategoriesRepository } from "./categories.repository";
import { CreateCategoryDto } from "./dto/category.dto.input";
import { CategoryResponseDto } from "./dto/category.dto.response";

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async findAll(userId: string): Promise<CategoryResponseDto[]> {
    const categories = await this.categoriesRepository.findAllByUserId(userId);
    return categories.map((category) => category.toObject());
  }

  async create(
    createCategoryDto: CreateCategoryDto,
    userId: string
  ): Promise<CategoryResponseDto> {
    const category = await this.categoriesRepository.create({
      ...createCategoryDto,
      userId: new Types.ObjectId(userId),
    });
    return plainToInstance(CategoryResponseDto, category.toObject(), {
      excludeExtraneousValues: true,
    });
  }
}
