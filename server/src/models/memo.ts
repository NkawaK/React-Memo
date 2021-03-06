import { IMemo } from './../types/memo';
import { model, Schema } from 'mongoose';

const memoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    pinned: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IMemo>('Memo', memoSchema);