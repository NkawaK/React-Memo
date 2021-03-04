import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { useParams } from 'react-router-dom';
import { BackButton } from './BackButton';
import { SaveButton } from './SaveButton';
import { getMemo } from '../API';

export type FormData = {
  title: string;
  pinned: boolean;
  description: string;
  userId: string;
};

export const EditForm: React.FC = () => {
  const param: any = useParams();
  const { _id } = useContext(userContext);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    pinned: false,
    description: '',
    userId: _id,
  });

  const updateField = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fetchMemo = (_id: string): void => {
    getMemo(_id)
      .then(({ data: { memo } }: IMemo | any) => setFormData({
        ...formData,
        title: memo.title,
        pinned: memo.pinned,
        description: memo.description,
      }))
      .catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    if (!param.id) return;
    fetchMemo(param.id);
  }, []);

  return (
    <div className='container'>
      <div className="add-button">
          <BackButton />
      </div>
      <div className='editform'>
        <div className='title'>
          <label>タイトル</label>
          <input type='text' name='title' value={formData.title} onChange={e => updateField(e)}/>
        </div>
        <div className='pin'>
          <label>ピン留め</label>
          <input type='checkbox' name='pinned' checked={formData.pinned} 
            onChange={() => setFormData({...formData, pinned: !formData.pinned})}
          />
        </div>
        <div className='description'>
          <label>詳細</label>
          <textarea name='description' value={formData.description} onChange={e => updateField(e)}/>
        </div>
        <div className='savebutton'>
          <SaveButton
            _id={param.id}
            formData={formData}
          />
        </div>
      </div>
    </div>
  );
};