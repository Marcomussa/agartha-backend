import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { User, UserDocument } from "./users.model";

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(createUserData: Partial<UserDocument>): Promise<UserDocument> {
    if (createUserData.password) {
      const saltRounds = 10;
      createUserData.password = await bcrypt.hash(
        createUserData.password,
        saltRounds
      );
    }

    const newUser = new this.userModel(createUserData);
    return newUser.save();
  }

  async updateMercadoPagoTokens(
    userId: string,
    accessToken: string,
    refreshToken: string
  ): Promise<UserDocument | null> {
    return this.userModel
      .findByIdAndUpdate(
        userId,
        {
          mpAccessToken: accessToken,
          mpRefreshToken: refreshToken,
        },
        { new: true }
      )
      .exec();
  }
}
