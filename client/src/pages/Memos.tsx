import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
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
      .then(({ data: { memos } }: IMemo[] | any) => { 
        const pinnedMemo = _.sortBy(memos.filter((memo: IMemo) => memo.pinned), 'updatedAt');
        const unPinnedMemo = _.sortBy(memos.filter((memo: IMemo) => !memo.pinned), 'updatedAt');
        setMemos([...pinnedMemo, ...unPinnedMemo]);
      })
      .catch((err: Error) => console.log(err));
  };

  return (
    <>
      <div className='container'>
        <div className='add-button'>
          <AddButton />
        </div>
        <div className='memos'>
          {memos.map((memo: IMemo) => (
            <Memo
              key={memo._id}
              memo={memo}
              setMemos={setMemos}
            />
          ))}
        </div>
      </div>
    </>
  );
};