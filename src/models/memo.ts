import { IMemo } from './../types/memo';
import { model, Schema } from 'mongoose';

const memoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: String,
    },
    pinned: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IMemo>("Memo", memoSchema);