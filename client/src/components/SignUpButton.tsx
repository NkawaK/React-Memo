import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpButton: React.FC = () => {
  return (
    <Link to='#' className="btn btn-–large btn--navy">
      アカウント作成
    </Link>
  );
};