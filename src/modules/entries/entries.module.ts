import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EntriesController } from "./entries.controller";
import { EntriesService } from "./entries.service";
import { EntriesRepository } from "./entries.repository";
import { Entry, EntrySchema } from "./entries.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
  ],
  controllers: [EntriesController],
  providers: [EntriesService, EntriesRepository],
})
export class EntriesModule {}
