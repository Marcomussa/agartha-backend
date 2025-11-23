import { Types } from "mongoose";
import { ICategoryResponseDto } from "../categories/categories.types";
export declare enum EntryType {
    EXPENSE = "expense",
    INCOME = "income"
}
export declare enum EntrySource {
    MANUAL = "manual",
    MERCADOPAGO = "mercadopago"
}
export interface IEntry {
    userId: Types.ObjectId;
    categoryId: Types.ObjectId;
    description: string;
    createdAt: Date;
    amount: number;
    type: EntryType;
    source: EntrySource;
}
export interface ICreateEntryDto {
    description: string;
    categoryId: Types.ObjectId;
    amount: number;
    createdAt: Date;
    type: EntryType;
    source: EntrySource;
}
export interface IEntryResponseDto {
    _id: string;
    userId: string;
    description: string;
    category: ICategoryResponseDto;
    amount: number;
    createdAt: Date;
    type: EntryType;
    source: EntrySource;
}
//# sourceMappingURL=entries.types.d.ts.map