import React from 'react';
import { Link } from 'react-router-dom';

export const EditButton: React.FC = () => {
  return (
    <Link to="" className="btn btn-small btn--blue">
        <i className="fas fa-edit"></i> 編集
    </Link>
  );
};