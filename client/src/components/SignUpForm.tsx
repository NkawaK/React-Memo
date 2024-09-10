import React, { useState } from "react";
import { SignUpButton } from "./SignUpButton";

export const SignUpForm: React.FC<UserProps> = ({ setUser }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    userName: "",
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
      <div className="signup-form">
        <div className="username">
          <label>ユーザー名</label>
          <input type="text" name="userName" onChange={(e) => updateField(e)} />
        </div>
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
        <div className="submit-button">
          <SignUpButton formData={formData} setUser={setUser} />
        </div>
      </div>
    </div>
  );
};
