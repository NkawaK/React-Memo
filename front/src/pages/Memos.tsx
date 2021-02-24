import React, { useState, useEffect, memo } from 'react';
import { Memo } from '../components/Memo';
import { AddButton } from '../components/AddButton';
import { getMemos } from '../API';

export const Memos: React.FC = () => {
  const [memos, setMemos] = useState<IMemo[]>([]);

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = (): void => {
    getMemos()
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
          />
        ))}
      </div>
    </>
  );
};