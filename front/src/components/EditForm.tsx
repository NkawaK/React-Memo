import React from 'react';
import { BackButton } from '../components/BackButton';
import { SaveButton } from '../components/SaveButton';

type Props = {
  memo?: IMemo
};

export const EditForm: React.FC<Props> = ({ memo }) => {
  return (
    <div className='container'>
      <div className="add-button">
          <BackButton />
        </div>
      <div className='editform'>
        <div className='title'>
          <label>タイトル</label>
          <input type='text'/>
        </div>
        <div className='pin'>
          <label>ピン留め</label>
          <input type='checkbox'/>
        </div>
        <div className='description'>
          <label>詳細</label>
          <textarea/>
        </div>
        <div className='savebutton'>
          <SaveButton />
        </div>
      </div>
    </div>
  );
};