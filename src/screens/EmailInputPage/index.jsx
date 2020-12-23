import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const EmailInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Qual o" span="seu" continueContent="melhor email?" />
        </MainContainer>
        <Footer hasAddButton />
      </PagesContainer>
    </>
  );
};
export default EmailInputPage;
