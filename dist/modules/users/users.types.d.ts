export interface IUser {
    _id: string;
    email: string;
    name: string;
    password: string;
    mpAccessToken?: string;
    mpRefreshToken?: string;
}
export interface ICreateUserDto {
    email: string;
    name: string;
    password: string;
}
export interface IUserResponseDto {
    _id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class User implements IUser {
    _id: string;
    email: string;
    name: string;
    password: string;
}
//# sourceMappingURL=users.types.d.ts.map