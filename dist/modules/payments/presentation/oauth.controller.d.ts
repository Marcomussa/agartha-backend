import { Response } from "express";
import { AuthorizeUserUseCase } from "../domain/use-cases/authorize-user.use-case";
import { OAuthCallbackDto } from "../application/dto/oauth-callback.dto.input";
export declare class OAuthController {
    private readonly authorizeUserUseCase;
    constructor(authorizeUserUseCase: AuthorizeUserUseCase);
    initiateOAuth(user: {
        userId: string;
    }, res: Response): Promise<void>;
    handleCallback(query: OAuthCallbackDto, res: Response): Promise<void>;
}
//# sourceMappingURL=oauth.controller.d.ts.map