import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { IUser } from "./users.types";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User implements IUser {
  _id!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ required: false })
  mpAccessToken?: string;

  @Prop({ required: false })
  mpRefreshToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
