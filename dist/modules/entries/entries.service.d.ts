import { EntriesRepository } from "./entries.repository";
import { CreateEntryDto } from "./dto/entrie.dto.input";
import { EntryResponseDto } from "./dto/entrie.dto.response";
export declare class EntriesService {
    private readonly entriesRepository;
    constructor(entriesRepository: EntriesRepository);
    findAll(userId: string): Promise<EntryResponseDto[]>;
    create(createEntryDto: CreateEntryDto, userId: string): Promise<EntryResponseDto>;
}
//# sourceMappingURL=entries.service.d.ts.map