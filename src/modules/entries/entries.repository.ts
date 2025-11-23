import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Entry, EntryDocument } from "./entries.model";

@Injectable()
export class EntriesRepository {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>
  ) {}

  async findAllByUserId(userId: string): Promise<EntryDocument[]> {
    return this.entryModel
      .find({ userId: new Types.ObjectId(userId) })
      .populate("categoryId", "name")
      .exec();
  }

  async findById(entryId: string): Promise<EntryDocument | null> {
    return this.entryModel
      .findById(entryId)
      .populate("categoryId", "name")
      .exec();
  }

  async create(
    createEntryData: Partial<EntryDocument>
  ): Promise<EntryDocument> {
    console.log("createEntryData", createEntryData);
    const newEntry = new this.entryModel(createEntryData);
    const savedEntry = await newEntry.save();
    return this.entryModel
      .findById(savedEntry._id)
      .populate("categoryId", "name description")
      .exec()
      .then((populated) => populated || savedEntry);
  }
}
