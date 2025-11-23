import { IEntryResponseDto, EntryType, EntrySource } from "../entries.types";
import { ICategoryResponseDto } from "../../categories/categories.types";
export declare class EntryResponseDto implements IEntryResponseDto {
    _id: string;
    userId: string;
    description: string;
    category: ICategoryResponseDto;
    amount: number;
    createdAt: Date;
    type: EntryType;
    source: EntrySource;
}
//# sourceMappingURL=entrie.dto.response.d.ts.map