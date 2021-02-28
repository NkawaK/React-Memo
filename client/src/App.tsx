import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Memos } from './pages/Memos';
import { EditMemo } from './pages/EditMemo'
import { Header } from './components/Header';
import { Footer } from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/signin' component={SignIn} exact/>
            <Route path='/signup' component={SignUp} exact/>
            <Route path='/memos' component={Memos} exact/>
            <Route path='/add-memo' component={EditMemo} exact/>
            <Route path='/edit-memo/:id' component={EditMemo} exact/>
            <Redirect from='*' to='/memos'/>
          </Switch>
        </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
