import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const DescriptionInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Faça uma breve descrição sobre"
            span="você, e o"
            isgreen="seu"
            continueContent="momento atual. E o que"
            isPurple="você"
            afterEmphasys="espera de uma empresa?"
            hasParagraph
          />
          <GlobalForm isOneInput isDescription />
        </MainContainer>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default DescriptionInputPage;
