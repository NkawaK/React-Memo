import React from 'react';
import { SignInForm } from '../components/SignInForm';

export const SignIn: React.FC<UserProps> = ({ setUser }) => {
  return (
    <SignInForm
      setUser={setUser}
    />
  );
};