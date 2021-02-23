import React from 'react';
import { Link } from 'react-router-dom';

export const AddButton: React.FC = () => {
  return (
    <Link to="" className="btn btn--blue">
      <i className="fas fa-pen"></i> メモ追加
    </Link>
  );
};