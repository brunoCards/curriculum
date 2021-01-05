import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const NameInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Olá como " span="você" continueContent="se chama?" />
          <GlobalForm isOneInput isName />
        </MainContainer>
        <Footer />
      </PagesContainer>
    </>
  );
};
export default NameInputPage;
