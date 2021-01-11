import React from 'react';

//import globalStyles
import GlobalStyle from './styles/global';

//import Routers
import Router from './routers/Router';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router />
    </>
  );
};

export default App;
