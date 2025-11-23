import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Types } from "mongoose";
import { EntriesRepository } from "./entries.repository";
import { CreateEntryDto } from "./dto/entrie.dto.input";
import { EntryResponseDto } from "./dto/entrie.dto.response";

@Injectable()
export class EntriesService {
  constructor(private readonly entriesRepository: EntriesRepository) {}

  async findAll(userId: string): Promise<EntryResponseDto[]> {
    const entries = await this.entriesRepository.findAllByUserId(userId);
    return entries.map((entry) =>
      plainToInstance(EntryResponseDto, entry.toObject(), {
        excludeExtraneousValues: true,
      })
    );
  }

  async create(
    createEntryDto: CreateEntryDto,
    userId: string
  ): Promise<EntryResponseDto> {
    const parsedEntry = {
      ...createEntryDto,
      categoryId: new Types.ObjectId(createEntryDto.categoryId),
      userId: new Types.ObjectId(userId),
      createdAt: new Date(createEntryDto.createdAt),
    };

    const populatedEntry = await this.entriesRepository.create(parsedEntry);

    if (!populatedEntry) {
      throw new Error("Entry not found after creation");
    }
    return plainToInstance(EntryResponseDto, populatedEntry.toObject(), {
      excludeExtraneousValues: true,
    });
  }
}
