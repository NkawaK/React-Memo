import React, { useState } from 'react';
import { BackButton } from './BackButton';
import { SaveButton } from './SaveButton';

type Props = {
  memo?: IMemo
};

export type FormData = {
  title: string;
  pinned: boolean;
  description: string;
};

export const EditForm: React.FC<Props> = ({ memo }) => {
  const [formData, setFormData] = useState<FormData>({
    title: memo?.title ?? '',
    pinned: memo?.pinned　?? false,
    description: memo?.description ?? ''
  });

  const updateField = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='container'>
      <div className="add-button">
          <BackButton />
      </div>
      <div className='editform'>
        <div className='title'>
          <label>タイトル</label>
          <input type='text' name='title' onChange={e => updateField(e)}/>
        </div>
        <div className='pin'>
          <label>ピン留め</label>
          <input type='checkbox' name='pinned' checked={formData.pinned} 
           onChange={() => setFormData({...formData, pinned: !formData.pinned})}
          />
        </div>
        <div className='description'>
          <label>詳細</label>
          <textarea name='description' onChange={e => updateField(e)}/>
        </div>
        <div className='savebutton'>
          <SaveButton 
            formData={formData}
          />
        </div>
      </div>
    </div>
  );
};