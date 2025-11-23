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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const entries_model_1 = require("./entries.model");
let EntriesRepository = class EntriesRepository {
    constructor(entryModel) {
        this.entryModel = entryModel;
    }
    async findAllByUserId(userId) {
        return this.entryModel
            .find({ userId: new mongoose_2.Types.ObjectId(userId) })
            .populate("categoryId", "name")
            .exec();
    }
    async findById(entryId) {
        return this.entryModel
            .findById(entryId)
            .populate("categoryId", "name")
            .exec();
    }
    async create(createEntryData) {
        console.log("createEntryData", createEntryData);
        const newEntry = new this.entryModel(createEntryData);
        const savedEntry = await newEntry.save();
        return this.entryModel
            .findById(savedEntry._id)
            .populate("categoryId", "name description")
            .exec()
            .then((populated) => populated || savedEntry);
    }
};
exports.EntriesRepository = EntriesRepository;
exports.EntriesRepository = EntriesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(entries_model_1.Entry.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EntriesRepository);
//# sourceMappingURL=entries.repository.js.map