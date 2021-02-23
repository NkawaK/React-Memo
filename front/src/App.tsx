import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
          <Route path='/memos' component={Memos} />
          <Route path='/edit-memo' component={EditMemo} />
          <Redirect from='*' to='/memos'/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
