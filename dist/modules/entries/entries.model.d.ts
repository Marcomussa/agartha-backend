import { Document, Types } from "mongoose";
import { IEntry, EntryType, EntrySource } from "./entries.types";
export type EntryDocument = Entry & Document;
export declare class Entry implements IEntry {
    userId: Types.ObjectId;
    categoryId: Types.ObjectId;
    description: string;
    amount: number;
    createdAt: Date;
    type: EntryType;
    source: EntrySource;
}
export declare const EntrySchema: import("mongoose").Schema<Entry, import("mongoose").Model<Entry, any, any, any, Document<unknown, any, Entry, any, {}> & Entry & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Entry, Document<unknown, {}, import("mongoose").FlatRecord<Entry>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Entry> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=entries.model.d.ts.map