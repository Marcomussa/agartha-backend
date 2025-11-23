import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Category, CategoryDocument } from "./categories.model";

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) {}

  async findAllByUserId(userId: string): Promise<CategoryDocument[]> {
    return this.categoryModel
      .find({ userId: new Types.ObjectId(userId) })
      .exec();
  }

  async create(
    createCategoryData: Partial<CategoryDocument>
  ): Promise<CategoryDocument> {
    const newCategory = new this.categoryModel(createCategoryData);
    return newCategory.save();
  }
}
