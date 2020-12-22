import React from 'react';

//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import GlobalForm from '../../components/GlobalForm';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

//styled-components

const AgeInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer></MainContainer>
        <GlobalForm />
        <Footer />
      </PagesContainer>
    </>
  );
};
export default AgeInputPage;
