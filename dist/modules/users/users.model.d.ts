import { Document } from "mongoose";
import { IUser } from "./users.types";
export type UserDocument = User & Document;
export declare class User implements IUser {
    _id: string;
    email: string;
    name: string;
    password: string;
    mpAccessToken?: string;
    mpRefreshToken?: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any, {}> & User & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
//# sourceMappingURL=users.model.d.ts.map