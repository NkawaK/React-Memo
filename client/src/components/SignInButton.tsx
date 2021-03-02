import React from 'react';
import { Link } from 'react-router-dom';

export const SignInButton: React.FC<UserProps> = ({ setUser }) => {
  return (
    <Link to='#' className="btn btn-small btn--navy">
      ログイン
    </Link>
  );
};