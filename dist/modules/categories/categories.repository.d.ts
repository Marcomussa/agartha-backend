import { Model } from "mongoose";
import { CategoryDocument } from "./categories.model";
export declare class CategoriesRepository {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    findAllByUserId(userId: string): Promise<CategoryDocument[]>;
    create(createCategoryData: Partial<CategoryDocument>): Promise<CategoryDocument>;
}
//# sourceMappingURL=categories.repository.d.ts.map