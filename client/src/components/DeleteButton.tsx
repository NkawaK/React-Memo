import React from 'react';
import { Link } from 'react-router-dom';
import { deleteMemo } from '../API';

type Props = {
  _id: string
};

export const DeleteButton: React.FC<Props> = ({ _id }) => {
  return (
    <Link to="#" className="btn btn-small btn--red" onClick={() => deleteMemo(_id)}>
      <i className="fas fa-trash-alt"></i> 削除
    </Link>
  );
};