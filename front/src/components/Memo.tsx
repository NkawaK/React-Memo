import React from 'react';
import { EditButton } from '../components/EditButton';
import { DeleteButton } from '../components/DeleteButton';
export const Memo: React.FC = () => {
  return (
    <>
      <div className='card'>
        <h4>メモ１</h4>
        <div className="description">
          あああああああああああああああああああああああああああああ
          あああああああああああああああああああああああああああああ
        </div>
        <div className='button'>
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </>
  );
};