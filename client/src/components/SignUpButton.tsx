import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../API';

type Props = UserProps & {
  formData: AuthFormData;
};

export const SignUpButton: React.FC<Props> = ({ setUser, formData }) => {
  const [isLogined, setIsLogined] = useState(false);

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    signUp(formData)
      .then(({ status, data }) => {
        if (status !== 201) throw new Error('アカウント作成失敗しました。');
        data.user && setUser(data.user) && setIsLogined(true);
      })
      .catch(err => console.log(err));
  };

  return (
    isLogined ?
    <Redirect to='/memos'/>
    :
    <Link to='#' className="btn btn-–large btn--navy"
      onClick={e => handleSignUp(e)}
    >
      アカウント作成
    </Link>
  );
};