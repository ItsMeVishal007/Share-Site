import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import './App.css';

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path='/places/new' exact component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
}

export default App;
