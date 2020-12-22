import React from 'react';

//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const NameInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer></MainContainer>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default NameInputPage;
