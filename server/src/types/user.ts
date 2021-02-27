import { Document } from 'mongoose';
import { IMemo } from './memo';

export interface IUser extends Document {
  userName: string;
  email: string;
  passwaord: string;
  memos: IMemo[];
};