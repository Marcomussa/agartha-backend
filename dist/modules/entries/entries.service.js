"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("mongoose");
const entries_repository_1 = require("./entries.repository");
const entrie_dto_response_1 = require("./dto/entrie.dto.response");
let EntriesService = class EntriesService {
    constructor(entriesRepository) {
        this.entriesRepository = entriesRepository;
    }
    async findAll(userId) {
        const entries = await this.entriesRepository.findAllByUserId(userId);
        return entries.map((entry) => (0, class_transformer_1.plainToInstance)(entrie_dto_response_1.EntryResponseDto, entry.toObject(), {
            excludeExtraneousValues: true,
        }));
    }
    async create(createEntryDto, userId) {
        const parsedEntry = {
            ...createEntryDto,
            categoryId: new mongoose_1.Types.ObjectId(createEntryDto.categoryId),
            userId: new mongoose_1.Types.ObjectId(userId),
            createdAt: new Date(createEntryDto.createdAt),
        };
        const populatedEntry = await this.entriesRepository.create(parsedEntry);
        if (!populatedEntry) {
            throw new Error("Entry not found after creation");
        }
        return (0, class_transformer_1.plainToInstance)(entrie_dto_response_1.EntryResponseDto, populatedEntry.toObject(), {
            excludeExtraneousValues: true,
        });
    }
};
exports.EntriesService = EntriesService;
exports.EntriesService = EntriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [entries_repository_1.EntriesRepository])
], EntriesService);
//# sourceMappingURL=entries.service.js.map