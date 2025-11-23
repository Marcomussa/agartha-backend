import { Body, Controller, Get, Post } from "@nestjs/common";
import { EntriesService } from "./entries.service";
import { CreateEntryDto, CreateEntryDtoInput } from "./dto/entrie.dto.input";
import { EntryResponseDto } from "./dto/entrie.dto.response";
import { CurrentUser } from "../auth/jwt/current-user.decorator";
import { EntrySource } from "./entries.types";

@Controller("entries")
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Get()
  async getEntries(
    @CurrentUser() user: { userId: string }
  ): Promise<EntryResponseDto[]> {
    try {
      return await this.entriesService.findAll(user.userId);
    } catch (error: any) {
      console.error("[Controller Error] Entries:", error);
      throw error;
    }
  }

  @Post()
  async createEntry(
    @Body() createEntryDto: CreateEntryDtoInput,
    @CurrentUser() user: { userId: string }
  ): Promise<EntryResponseDto> {
    const parsedEntry: CreateEntryDto = {
      ...createEntryDto,
      source: EntrySource.MANUAL,
    };
    try {
      return await this.entriesService.create(parsedEntry, user.userId);
    } catch (error: any) {
      console.error("[Controller Error] Entries:", error);
      throw error;
    }
  }
}
