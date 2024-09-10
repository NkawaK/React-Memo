import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignInButton } from "./SignInButton";

export const SignInForm: React.FC<UserProps> = ({ setUser }) => {
  const [formData, setFormData] = useState<Omit<AuthFormData, "userName">>({
    email: "",
    password: "",
  });

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h2 className="icon">
        <i className="fas fa-book"></i> メモ帳
      </h2>
      <div className="signin-form">
        <div className="email">
          <label>Email</label>
          <input type="text" name="email" onChange={(e) => updateField(e)} />
        </div>
        <div className="password">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => updateField(e)}
          />
        </div>
        <Link to="/signup">アカウント作成</Link>
        <SignInButton formData={formData} setUser={setUser} />
      </div>
    </div>
  );
};
