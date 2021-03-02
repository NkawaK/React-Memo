import React from 'react';
import { Link } from 'react-router-dom';
import { SignInButton } from '../components/SignInButton';

export const SignInForm: React.FC<UserProps> = ({ setUser }) => {
  return (
    <div className='container'>
      <h2 className='icon'>
        <i className="fas fa-book"></i> メモ帳
      </h2>
      <div className='signin-form'>
        <div className='email'>
          <label>Email</label>
          <input type='text'/>
        </div>
        <div className='password'>
          <label>Password</label>
          <input type='password'/>
        </div>
        <Link to='/signup'>
          アカウント作成
        </Link>
        <SignInButton
          setUser={setUser}
        />
      </div>
    </div>
  );
};