import { Request, Response } from "express";
import { AuthService } from "../infrastructure/services/auth.service";
import { AuthDtoInput } from "../application/dto/auth.dto.input";
import { NewUserDtoInput } from "../application/dto/auth.dto.input";
import { UserResponseDto } from "../../users/dto/user.dto.response";
import { AuthResponseDto } from "../application/dto/auth.dto.response";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: AuthDtoInput, res: Response): Promise<AuthResponseDto>;
    refresh(req: Request, res: Response): Promise<AuthResponseDto>;
    newUser(body: NewUserDtoInput): Promise<UserResponseDto>;
}
//# sourceMappingURL=auth.controller.d.ts.map