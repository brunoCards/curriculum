import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import LandingPage from '../components/LandingPage';

const Routers = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routers;
