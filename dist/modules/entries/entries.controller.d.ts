import { EntriesService } from "./entries.service";
import { CreateEntryDtoInput } from "./dto/entrie.dto.input";
import { EntryResponseDto } from "./dto/entrie.dto.response";
export declare class EntriesController {
    private readonly entriesService;
    constructor(entriesService: EntriesService);
    getEntries(user: {
        userId: string;
    }): Promise<EntryResponseDto[]>;
    createEntry(createEntryDto: CreateEntryDtoInput, user: {
        userId: string;
    }): Promise<EntryResponseDto>;
}
//# sourceMappingURL=entries.controller.d.ts.map