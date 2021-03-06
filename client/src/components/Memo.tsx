import React from 'react';
import { EditButton } from './EditButton';
import { DeleteButton } from './DeleteButton';

export const Memo: React.FC<MemoProps> = ({ memo, setMemos }) => {
  return (
    <>
      <div className='card'>
        <h4>
          {memo.pinned && 
            <i className="fas fa-thumbtack"></i>
          } {memo.title}
        </h4>
        <div className="description">
          {memo.description}
        </div>
        <div className='button'>
          <EditButton 
            _id={memo._id}
          />
          <DeleteButton 
            _id={memo._id}
            setMemos={setMemos}
          />
        </div>
      </div>
    </>
  );
};