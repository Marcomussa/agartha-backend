import { Types } from "mongoose";
export interface ICategory {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    name: string;
}
export interface ICreateCategoryDto {
    name: string;
}
export interface ICategoryResponseDto {
    _id: string;
    name: string;
}
//# sourceMappingURL=categories.types.d.ts.map