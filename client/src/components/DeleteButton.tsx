import React from "react";
import { Link } from "react-router-dom";
import { deleteMemo } from "../API";

type Props = {
  _id: string;
  setMemos: React.Dispatch<React.SetStateAction<IMemo[]>>;
};

export const DeleteButton: React.FC<Props> = ({ _id, setMemos }) => {
  const handleDeleteMemo = (_id: string): void => {
    deleteMemo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("メモの削除に失敗しました。");
        }
        setMemos(data.memos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Link
      to="#"
      className="btn btn-small btn--red"
      onClick={() => handleDeleteMemo(_id)}
    >
      <i className="fas fa-trash-alt"></i> 削除
    </Link>
  );
};
