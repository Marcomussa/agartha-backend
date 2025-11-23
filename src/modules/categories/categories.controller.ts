import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/category.dto.input";
import { CategoryResponseDto } from "./dto/category.dto.response";
import { CurrentUser } from "../auth/jwt/current-user.decorator";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories(
    @CurrentUser() user: { userId: string }
  ): Promise<CategoryResponseDto[]> {
    try {
      return await this.categoriesService.findAll(user.userId);
    } catch (error: any) {
      console.error("[Controller Error] Categories:", error);
      throw error;
    }
  }

  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @CurrentUser() user: { userId: string }
  ): Promise<void> {
    try {
      await this.categoriesService.create(createCategoryDto, user.userId);
    } catch (error: any) {
      console.error("[Controller Error] Categories:", error);
      throw error;
    }
  }
}
