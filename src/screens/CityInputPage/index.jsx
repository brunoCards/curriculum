import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const CityInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Qual a cidade que"
            span="você"
            continueContent="mora?"
          />
        </MainContainer>
        <Footer />
      </PagesContainer>
    </>
  );
};
export default CityInputPage;
