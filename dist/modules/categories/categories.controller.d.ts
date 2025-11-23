import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/category.dto.input";
import { CategoryResponseDto } from "./dto/category.dto.response";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(user: {
        userId: string;
    }): Promise<CategoryResponseDto[]>;
    createCategory(createCategoryDto: CreateCategoryDto, user: {
        userId: string;
    }): Promise<void>;
}
//# sourceMappingURL=categories.controller.d.ts.map