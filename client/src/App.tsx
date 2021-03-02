import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Memos } from './pages/Memos';
import { EditMemo } from './pages/EditMemo'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { getUser } from './API';

const userContext = React.createContext<IUser|false>(false); 

const App: React.FC = () => {
  const [user, setUser] = useState<IUser|false>(false);

  useEffect(() => {
    getUser()
      .then(({ status, data }) => {
        if (status === 200) {
          setUser(data.user);
        }
      })
      .catch((err: Error) => console.log(err));
  }, [])

  return (
    user ? 
    <userContext.Provider value={user}>
      <Header />
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
