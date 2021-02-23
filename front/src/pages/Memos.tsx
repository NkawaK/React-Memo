import React from 'react';
import { Memo } from '../components/Memo';
import { AddButton } from '../components/AddButton';

export const Memos: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className="add-button">
          <AddButton />
        </div>
        <Memo />
      </div>
    </>
  );
};