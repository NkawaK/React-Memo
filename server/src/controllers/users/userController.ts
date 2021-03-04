import { Request, Response } from 'express';
import { IUser } from '../../types/user';
import User from '../../models/user';
import passport from 'passport';

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: IUser = new User(req.body);
    (User as any).register(newUser, req.body.password, (err: any, user: IUser) => {
      if (user) {
        res.status(201).json({ message: 'ユーザーを作成しました。', user: user });
      } else {
        res.status(500).json({ message: 'ユーザーの作成に失敗しました。', err });
      }
    });
  } catch (error) {
    throw error;
  }
};

const signIn = async (req: Request, res: Response, next: any): Promise<void> => {
  try {
    passport.authenticate('local', (error, user, info) => {
      if (error) res.status(404).json({ message: 'エラーが発生しました。', error });
      if (user) {
        res.status(200).json({ message: '認証に成功しました。', user });
      } else {
        res.status(401).json({ message: 'emailかパスワードが間違っています。', info });
      }
    })(req, res, next);
  } catch (error) {
    throw error;
  }
};

const signOut = async (req: Request, res: Response): Promise<void> => {
  try {
    req.logOut();
    res.status(200).json({ message: 'ログアウトしました。' });
  } catch (error) {
    throw (error)
  }
};

export { signIn, signUp, signOut };