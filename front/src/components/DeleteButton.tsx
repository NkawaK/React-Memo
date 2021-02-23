import React from 'react';
import { Link } from 'react-router-dom';

export const DeleteButton: React.FC = () => {
  return (
    <Link to="#" className="btn btn-small btn--red">
      <i className="fas fa-trash-alt"></i> 削除
    </Link>
  );
};