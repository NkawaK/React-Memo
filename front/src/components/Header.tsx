import React from 'react';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <header>
      <h3>{props.title}</h3>
    </header>
  );
};