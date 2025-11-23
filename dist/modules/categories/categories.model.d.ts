import { Document, Types } from "mongoose";
import { ICategory } from "./categories.types";
export type CategoryDocument = Category & Document;
export declare class Category implements ICategory {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    name: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category, any, {}> & Category & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Category> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=categories.model.d.ts.map