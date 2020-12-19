import React from 'react';

//imports react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//reset global-style do styled-components
import GlobalStyle from '../styles/global';

//screens
import LandingPage from '../screens/LandingPage';
import NameInputPage from '../screens/NameInputPage';
import AgeInputPage from '../screens/AgeInputPage';
import CityInputPage from '../screens/CityInputPage';
import StateInputPage from '../screens/StateInputPage';
import PhoneInputPage from '../screens/PhoneInputPage';
import EmailInputPage from '../screens/EmailInputPage';
import DescriptionInputPage from '../screens/DescriptionInputPage';
import DifferentialsInputPage from '../screens/DifferentialsInputPage';

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
          <Route exact path="/idade">
            <AgeInputPage />
          </Route>
          <Route exact path="/cidade">
            <CityInputPage />
          </Route>
          <Route exact path="/estado">
            <StateInputPage />
          </Route>
          <Route exact path="/telefones">
            <PhoneInputPage />
          </Route>
          <Route exact path="/emails">
            <EmailInputPage />
          </Route>
          <Route exact path="/descricao">
            <DescriptionInputPage />
          </Route>
          <Route exact path="/diferenciais">
            <DifferentialsInputPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routers;
