import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const AgeInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Qual a" span="sua" continueContent="idade?" />
          <GlobalForm isOneInput isAge />
        </MainContainer>
        <Footer />
      </PagesContainer>
    </>
  );
};
export default AgeInputPage;
