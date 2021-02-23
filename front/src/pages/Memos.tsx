import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
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