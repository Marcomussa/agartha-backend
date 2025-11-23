import { Model } from "mongoose";
import { UserDocument } from "./users.model";
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findById(id: string): Promise<UserDocument | null>;
    findByEmail(email: string): Promise<UserDocument | null>;
    create(createUserData: Partial<UserDocument>): Promise<UserDocument>;
    updateMercadoPagoTokens(userId: string, accessToken: string, refreshToken: string): Promise<UserDocument | null>;
}
//# sourceMappingURL=users.repository.d.ts.map