import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Memo } from '../components/Memo';
import { AddButton } from '../components/AddButton';
import { getMemos } from '../API';

export const Memos: React.FC = () => {
  const [memos, setMemos] = useState<IMemo[]>([]);
  const { _id } = useContext(userContext);

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = (): void => {
    getMemos(_id)
      .then(({ data: { memos } }: IMemo[] | any) => setMemos(memos))
      .catch((err: Error) => console.log(err));
  };

  return (
    <>
      <div className='container'>
        <div className="add-button">
          <AddButton />
        </div>
        {memos.map((memo: IMemo) => (
          <Memo
            key={memo._id}
            memo={memo}
            setMemos={setMemos}
          />
        ))}
      </div>
    </>
  );
};