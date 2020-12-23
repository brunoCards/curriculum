import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

//styled-components

const AgeInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Qual a" span="sua" continueContent="idade?" />
        </MainContainer>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default AgeInputPage;
