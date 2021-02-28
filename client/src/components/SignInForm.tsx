import React from 'react';
import { Link } from 'react-router-dom';

export const SignInForm: React.FC = () => {
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
        <Link to='#' className="btn btn-small btn--navy">
          ログイン
        </Link>
      </div>
    </div>
  );
};