import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Memos } from "./pages/Memos";
import { EditMemo } from "./pages/EditMemo";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const userContext = React.createContext<Pick<IUser, "_id" | "userName">>(
  { _id: "", userName: "" }
);

const App: React.FC = () => {
  const [user, setUser] = useState<IUser | false>(false);

  useEffect(() => {
    const currentUser: IUser | null = JSON.parse(
      localStorage.getItem("reactMemoAuth") as string
    );
    currentUser && setUser(currentUser);
  }, []);

  return user ? (
    <userContext.Provider value={user}>
      <Header setUser={setUser} />
      <BrowserRouter>
        <Routes>
          <Route path="/memos" element={<Memos />} />
          <Route path="/add-memo" element={<EditMemo />} />
          <Route path="/edit-memo/:id" element={<EditMemo />} />
          <Route path="*" element={<Memos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </userContext.Provider>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="*" element={<SignIn setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
