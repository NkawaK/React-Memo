import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Memos } from './pages/Memos';
import { EditMemo } from './pages/EditMemo'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const userContext = React.createContext<Pick<IUser, '_id'|'userName'>>({ _id: '', userName: '' }); 

const App: React.FC = () => {
  const [user, setUser] = useState<IUser|false>(false);

  useEffect(() => {
    const currentUser: IUser | null = JSON.parse(localStorage.getItem('reactMemoAuth') as string);
    currentUser && setUser(currentUser);
  }, [])

  return (
    user ? 
    <userContext.Provider value={user}>
      <Header setUser={setUser}/>
        <BrowserRouter>
          <Switch>
            <Route path='/memos' component={Memos} exact/>
            <Route path='/add-memo' component={EditMemo} exact/>
            <Route path='/edit-memo/:id' component={EditMemo} exact/>
            <Redirect from='*' to='/memos'/>
          </Switch>
        </BrowserRouter>
      <Footer />
    </userContext.Provider> 
    : 
    <BrowserRouter>
      <Switch>
        <Route path='/signin' render={() => <SignIn setUser={setUser}/>}/>
        <Route path='/signup' render={() => <SignUp setUser={setUser}/>}/>
        <Redirect from='*' to='/signin'/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
