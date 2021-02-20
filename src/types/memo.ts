import { Document } from "mongoose";

export interface IMemo extends Document {
  title: string;
  description: string;
  pinned: boolean;
};