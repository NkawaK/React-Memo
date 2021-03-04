interface IUser {
  _id: string;
  userName: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

interface IMemo {
  _id: string;
  title: string;
  description: string;
  pinned: boolean;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
};

interface MemoProps {
  memo: IMemo;
  setMemos: React.Dispatch<React.SetStateAction<IMemo[]>>;
};

interface UserProps {
  setUser: React.Dispatch<React.SetStateAction<IUser|false>>;
};

interface AuthFormData {
  userName: string;
  email: string;
  password: string;
};

type ApiUserDataType = {
  message: string;
  status: string;
  user: IUser | false;
}

type ApiMemoDataType = {
  message: string;
  status: string;
  memos: IMemo[];
  memo?: IMemo;
};