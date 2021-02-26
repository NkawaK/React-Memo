import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addMemo, updateMemo } from '../API';
import { FormData } from '../components/EditForm';

type Props = {
  _id?: string; 
  formData: FormData;
};

export const SaveButton: React.FC<Props> = ({ _id, formData }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveMemo = (e:React.MouseEvent) => {
    e.preventDefault();
    if (_id) {
      updateMemo(_id, formData)
        .then(({ status }) => {
          if (status !== 200) throw new Error("メモの編集に失敗しました。");
          setIsSaved(true);
        })
        .catch(err => console.log(err));
    } else {
      addMemo(formData)
        .then(({ status }) => {
          if (status !== 201) throw new Error("メモの追加に失敗しました。");
          setIsSaved(true); 
        })
        .catch(err => console.log(err));
    }
  };

  return (
    isSaved ? <Redirect to='/memos'/> :
    <Link to="#" className='btn btn-–large btn--navy'
     onClick={e => handleSaveMemo(e)}
    >
      保存
    </Link>
  );
};