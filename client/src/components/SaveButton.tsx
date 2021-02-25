import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { addMemo } from '../API';
import { FormData } from '../components/EditForm';

type Props = {
  formData: FormData;
};

export const SaveButton: React.FC<Props> = ({ formData }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveMemo = (e:React.MouseEvent) => {
    e.preventDefault();
    addMemo(formData)
    　.then(({ status }) => {
      if (status !== 201) {
        throw new Error("Error! Todo not saved");
      }
      setIsSaved(true); 
    })
    .catch(err => console.log(err));
  };

  return (
    isSaved ? <Redirect to='/memos'/> :
    <a href='#' className='btn btn-–large btn--navy'
     onClick={e => handleSaveMemo(e)}
    >
      保存
    </a>
  );
};