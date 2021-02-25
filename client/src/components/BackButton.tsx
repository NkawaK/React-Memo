import React from 'react';
import { Link } from 'react-router-dom';

export const BackButton: React.FC = () => {
  return (
    <Link to='/memos' className='btn btn--blue'>
      <i className='fas fa-long-arrow-alt-left'></i> 戻る
    </Link>
  );
};