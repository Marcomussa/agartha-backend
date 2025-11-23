import { CategoriesRepository } from "./categories.repository";
import { CreateCategoryDto } from "./dto/category.dto.input";
import { CategoryResponseDto } from "./dto/category.dto.response";
export declare class CategoriesService {
    private readonly categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    findAll(userId: string): Promise<CategoryResponseDto[]>;
    create(createCategoryDto: CreateCategoryDto, userId: string): Promise<CategoryResponseDto>;
}
//# sourceMappingURL=categories.service.d.ts.map