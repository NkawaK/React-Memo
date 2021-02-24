import React from 'react';
import { EditButton } from '../components/EditButton';
import { DeleteButton } from '../components/DeleteButton';

export const Memo: React.FC<MemoProps> = ({ memo }) => {
  return (
    <>
      <div className='card'>
        <h4>{memo.title}</h4>
        <div className="description">
          {memo.description}
        </div>
        <div className='button'>
          <EditButton />
          <DeleteButton 
            _id={memo._id}
          />
        </div>
      </div>
    </>
  );
};