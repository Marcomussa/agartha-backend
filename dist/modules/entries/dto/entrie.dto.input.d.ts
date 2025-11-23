import { EntryType, EntrySource } from "../entries.types";
export declare class CreateEntryDtoInput {
    description: string;
    categoryId: string;
    amount: number;
    createdAt: Date;
    type: EntryType;
}
export declare class CreateEntryDto extends CreateEntryDtoInput {
    source: EntrySource;
}
//# sourceMappingURL=entrie.dto.input.d.ts.map