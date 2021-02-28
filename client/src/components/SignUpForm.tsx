import React from 'react';
import { SignUpButton } from '../components/SignUpButton';

export const SignUpForm: React.FC = () => {
  return (
    <div className='container'>
      <h2 className='icon'>
        <i className="fas fa-book"></i> メモ帳
      </h2>
      <div className='signup-form'>
        <div className='username'>
          <label>ユーザー名</label>
          <input type='text'/>
        </div>
        <div className='email'>
          <label>Email</label>
          <input type='text'/>
        </div>
        <div className='password'>
          <label>Password</label>
          <input type='password'/>
        </div>
        <div className='submit-button'>
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};