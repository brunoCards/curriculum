import React from 'react';

//imports react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//reset global-style do styled-components
import GlobalStyle from '../styles/global';

//screens
import LandingPage from '../screens/LandingPage';
import NameInputPage from '../screens/NameInputPage';

const Routers = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/name">
            <NameInputPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routers;
