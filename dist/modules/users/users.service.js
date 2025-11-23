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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const users_repository_1 = require("./users.repository");
const user_dto_response_1 = require("./dto/user.dto.response");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findById(id) {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return (0, class_transformer_1.plainToInstance)(user_dto_response_1.UserResponseDto, user.toObject(), {
            excludeExtraneousValues: true,
        });
    }
    async findByEmail(email) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return user.toObject();
    }
    async create(createUserDto) {
        const doesUserExist = await this.usersRepository.findByEmail(createUserDto.email);
        if (doesUserExist) {
            throw new common_1.ConflictException("User already exists");
        }
        const user = await this.usersRepository.create(createUserDto);
        return (0, class_transformer_1.plainToInstance)(user_dto_response_1.UserResponseDto, user.toObject(), {
            excludeExtraneousValues: true,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map