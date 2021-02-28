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
  createdAt?: string;
  updatedAt?: string;
};

interface MemoProps {
  memo: IMemo;
  setMemos: React.Dispatch<React.SetStateAction<IMemo[]>>;
};

type ApiUserDataType = {
  message: string;
  status: string;
  user: IUser;
}

type ApiMemoDataType = {
  message: string;
  status: string;
  memos: IMemo[];
  memo?: IMemo;
};