import { Model } from "mongoose";
import { EntryDocument } from "./entries.model";
export declare class EntriesRepository {
    private entryModel;
    constructor(entryModel: Model<EntryDocument>);
    findAllByUserId(userId: string): Promise<EntryDocument[]>;
    findById(entryId: string): Promise<EntryDocument | null>;
    create(createEntryData: Partial<EntryDocument>): Promise<EntryDocument>;
}
//# sourceMappingURL=entries.repository.d.ts.map