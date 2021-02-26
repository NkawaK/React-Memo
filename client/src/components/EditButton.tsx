import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  _id: string;
};

export const EditButton: React.FC<Props> = ({ _id }) => {
  return (
    <Link to={`/edit-memo/${_id}`} className="btn btn-small btn--blue">
      <i className="fas fa-edit"></i> 編集
    </Link>
  );
};