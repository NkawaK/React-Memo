import { Document } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  email: string;
  passwaord: string;
};