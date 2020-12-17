import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from '../styles/global';

const Routers = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routers;
