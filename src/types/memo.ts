import { Document } from "mongoose";

export interface IMemo extends Document {
  title: string;
  descriptions: string;
  pinned: boolean;
};