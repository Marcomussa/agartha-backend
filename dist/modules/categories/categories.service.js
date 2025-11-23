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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("mongoose");
const categories_repository_1 = require("./categories.repository");
const category_dto_response_1 = require("./dto/category.dto.response");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async findAll(userId) {
        const categories = await this.categoriesRepository.findAllByUserId(userId);
        return categories.map((category) => category.toObject());
    }
    async create(createCategoryDto, userId) {
        const category = await this.categoriesRepository.create({
            ...createCategoryDto,
            userId: new mongoose_1.Types.ObjectId(userId),
        });
        return (0, class_transformer_1.plainToInstance)(category_dto_response_1.CategoryResponseDto, category.toObject(), {
            excludeExtraneousValues: true,
        });
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categories_repository_1.CategoriesRepository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map