import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { IEntry, EntryType, EntrySource } from "./entries.types";

export type EntryDocument = Entry & Document;

@Schema({ timestamps: true })
export class Entry implements IEntry {
  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  userId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Category", required: true })
  categoryId!: Types.ObjectId;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  amount!: number;

  @Prop({ required: true })
  createdAt!: Date;

  @Prop({ type: String, enum: EntryType, required: true })
  type!: EntryType;

  @Prop({ type: String, enum: EntrySource, required: true })
  source!: EntrySource;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
