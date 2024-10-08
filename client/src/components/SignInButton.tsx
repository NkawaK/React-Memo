import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signIn } from "../API";

type Props = UserProps & {
  formData: Omit<AuthFormData, "userName">;
};

export const SignInButton: React.FC<Props> = ({ formData, setUser }) => {
  const [isLogined, setIsLogined] = useState(false);

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    signIn(formData)
      .then(({ status, data }) => {
        console.log(status);
        if (status !== 200) throw new Error("ログインに失敗しました。");
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
    <Link
      to="#"
      className="btn btn-small btn--navy"
      onClick={(e) => handleSignIn(e)}
    >
      ログイン
    </Link>
  );
};
