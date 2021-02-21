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
};

type ApiMemoDataType = {
  message: string;
  status: string;
  memos: IMemo[];
  memo?: IMemo;
};