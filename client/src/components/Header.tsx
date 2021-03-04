import React, { useContext } from 'react';
import { userContext } from '../App';
import { signOut } from '../API';

type Props = UserProps;

export const Header: React.FC<Props> = ({ setUser }) => {
  const { userName } = useContext(userContext);

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    signOut()
      .then(({ status }) => {
        if (status === 200) {
          localStorage.removeItem('reactMemoAuth');
          setUser(false);
        }
      })
  };

  return (
    <header>
      <h3>
        <i className="fas fa-book"></i> メモ帳
        <span className='header--userinfo'>
          <span>{userName}</span>|<a href='#' onClick={e => handleSignOut(e)}>ログアウト</a>
        </span>
      </h3>
    </header>
  );
};