import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signUp } from "../API";

type Props = UserProps & {
  formData: AuthFormData;
};

export const SignUpButton: React.FC<Props> = ({ setUser, formData }) => {
  const [isLogined, setIsLogined] = useState(false);

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    signUp(formData)
      .then(({ status, data }) => {
        if (status !== 201) throw new Error("アカウント作成に失敗しました。");
        localStorage.setItem(
          "reactMemoAuth",
          JSON.stringify({
            _id: (data.user as IUser)._id,
            userName: (data.user as IUser).userName,
          })
        );
        if (data.user) {
          setUser(data.user);
          setIsLogined(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return isLogined ? (
    <Navigate to="/memos" />
  ) : (
    <Link to="#" className="btn btn--navy" onClick={(e) => handleSignUp(e)}>
      アカウント作成
    </Link>
  );
};
