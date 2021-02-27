import { IUser } from './../types/user';
import { model, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

export default model<IUser>('User', userSchema);