import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { ICategory } from "./categories.types";

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category implements ICategory {
  _id!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  userId!: Types.ObjectId;

  @Prop({ required: true })
  name!: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
