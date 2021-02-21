import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Memos } from './pages/Memos';
import { EditMemo } from './pages/EditMemo'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/memos" component={Memos} />
        <Route path="/edit-memo" component={EditMemo} />
        <Redirect from="*" to="/memos" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
