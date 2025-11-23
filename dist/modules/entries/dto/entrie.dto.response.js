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
exports.EntryResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const entries_types_1 = require("../entries.types");
class CategoryInfoDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CategoryInfoDto.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CategoryInfoDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CategoryInfoDto.prototype, "description", void 0);
class EntryResponseDto {
}
exports.EntryResponseDto = EntryResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EntryResponseDto.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EntryResponseDto.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "title" }),
    __metadata("design:type", String)
], EntryResponseDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "categoryId" }),
    (0, class_transformer_1.Type)(() => CategoryInfoDto),
    __metadata("design:type", Object)
], EntryResponseDto.prototype, "category", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], EntryResponseDto.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], EntryResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EntryResponseDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EntryResponseDto.prototype, "source", void 0);
//# sourceMappingURL=entrie.dto.response.js.map